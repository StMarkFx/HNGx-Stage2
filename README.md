# My CRUD Operation API Documentation

 This documentation provides an overview of CRUD (Create, Read, Update, Delete) operations using a Person as an example.

 ## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [API Endpoints](#api-endpoints)
  - [Create](#create)
  - [Read](#read)
  - [Update](#update)
  - [Delete](#delete)
- [Usage Examples](#usage-examples)

## Gettint Started

In software development, CRUD operations are fundamental actions used to manipulate data. CRUD stands for Create, Read, Update, and Delete. In this guide, we'll walk you through implementing these operations for a "Person" entity.

### Prerequisites

Before you begin, make sure you have the following requirements and dependencies: 
- Node.js
- MongoDB
- Express

### Installation

1. Clone the repository: 
    ```shell
    git clone https://github.com/StMarkFx/HNGx-Stage2
    cd HNGx-Stage2
    ```
2. In the project directory run these commands to install the dependencies and run the API:
    ```shell
    npm install
    npm start
    ```

## API Endpoints

### Create
- Endpoint `https://stmarkfx.onrender.com/api`
- Method: `POST`
- Description: Create a new person in the database
- Request Body: JSON data containing a value "name" and the name of the person.
- Response: Contains a message "Person saved successfully" and the person object that contains id and name.

### Read

1. 
- Endpoint `https://stmarkfx.onrender.com/api`
- Method: `GET`
- Description: This endpoint is for reading all the persons in the database.
- Response: JSON response with the resource data.

2. 
- Endpoint `https://stmarkfx.onrender.com/api/:_id`
- Method: `GET`
- Description: Retrieve details of a specific person by their id.
- Response: JSON response with the resource data.

### Update

- Endpoint `https://stmarkfx.onrender.com/api/:_id`
- Method: `PUT`
- Description: Update an existing person by its ID.
- Request Body: JSON data containing the updated name of the person.
- Response: JSON response containing the updated person.

### Delete

- Endpoint `https://stmarkfx.onrender.com/api/:_id`
- Method: `DELETE`
- Description: Delete a person from the database by id.
- Response: JSON response indicating the person with the id has been deleted.

## Usage Example

### Create a new person

**HTTP Method:** POST
**Endpoint:** `https://stmarkfx.onrender.com/api`
**Request Body:**
```json
{
	"name": "Terry"
}
```
**Response:**
```json
{
    "name": "Terry",
    "_id": "650503d41336f0a432d97974",
    "__v": 0
}

```

### Retrieve a List of Persons

**HTTP Method:** GET
**Endpoint:** `https://stmarkfx.onrender.com/api`
**Response:**

```json
[
    {
        "_id": "650503d41336f0a432d97974",
        "name": "Terry",
        "__v": 0
    }
]
```

### Retrieve a Person by id

**HTTP Method:** GET
**Endpoint:** `https://stmarkfx.onrender.com/persons/650503d41336f0a432d97974`
**Response:**
```json

    {
        "_id": "650503d41336f0a432d97974",
        "name": "Terry",
        "__v": 0
    }

```

### Update a Person by id

**HTTP Method:** PUT
**Endpoint:** `https://stmarkfx.onrender.com/api/650503d41336f0a432d97974`
**Request Body:**
```json
{
    "name": "Femi"
}
```

**Response:**
```json
{
  
    "_id": "650503d41336f0a432d97974",
    "name": "Femi",
    "__v": 0
}
```

**HTTP Method:** DELETE
**Endpoint:** `https://stmarkfx.onrender.com/api/650503d41336f0a432d97974`
**Response:**
```json

  {
    "message": "cannot find any person with ID ${id}"
}

```
