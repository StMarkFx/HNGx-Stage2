 const express = require('express')
 const mongoose = require('mongoose')
 const Person = require('./modules/person')
 const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))
 

//routes
 app.get('/', (req, res) => {
    res.send('Hello CRUD API')
 })
 

app.get('/api', async(req, res) => {
    try {
            const persons = await Person.find({});
            res.status(200).json(persons)
    }   catch (error) {
           res.status(500).json({message: error.message})
    }  
})

app.get('/api/:id', async(req, res,) => {
    try {
        const {id} = req.params;
        const person = await Person.findById(id);
            res.status(200).json(person)
    }   catch (error) {
            res.status(500).json({message: error.message})
    }
})


app.post('/api', async(req, res) => {
        try {
            const person = await Person.create(req.body)
            res.status(200).json(person); 

        } catch (error) {
            console.log(error.message);
            res.status(500).json({message: error.message})
        }
})

//update a person
app.put('/api/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const person = await Person.findByIdAndUpdate(id, req.body);
        //if we cannot find any person in database
        if(!person){
                return res.status(404).json({message: 'cannot find any person with ID ${id}'})
        }
        const updatedPerson = await Person.findById(id);
        res.status(200).json(updatedPerson); 

    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

//delete a person
app.delete('/api/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const person = await Person.findByIdAndDelete(id);
        if(!person){
            return res.status(404).json({message: 'cannot find any person with ID ${id}'})
        }
        res.status(200).json(person)
        } catch  (error) {
        res.status(500).json({message: error.message})
    }
})


 mongoose.set("strictQuery", false)
 mongoose.
 connect('mongodb+srv://NodeREST:Node--REST@cluster0.dpvtrtz.mongodb.net/Node-API?retryWrites=true&w=majority&appName=AtlasApp')
 .then(() => {
    app.listen(3000,() => {
        console.log('Node API app is running on port 3000')
     })
    console.log('connected to MongoDB')
 }).catch((error) => {
    console.log(error)
 })

