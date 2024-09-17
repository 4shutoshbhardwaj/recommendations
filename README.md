# Recommendations Collection App

## Overview

The Recommendations Collection App is a Node.js and Express application that enables users to group their recommendations (e.g., movies, TV shows, places to visit) into collections. Users can create collections, add or remove recommendations, view their collections, and delete them as needed.

## Features

- **Create a Collection**: Create a new collection with a name and description.
- **Add Recommendations**: Add recommendations to a specific collection.
- **Remove Recommendations**: Remove recommendations from a collection.
- **View Collections**: Retrieve all collections and associated recommendations for a user.
- **Delete Collections**: Delete a collection and its associated recommendations.

## Technology Stack

- **Node.js**: JavaScript runtime for server-side scripting.
- **Express**: Web framework for Node.js.
- **PostgreSQL**: Relational database management system.
- **pg**: PostgreSQL client for Node.js.


## Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/recommendations-app.git
   cd recommendations-app


2. **Install Dependencies**

   ```bash
   npm install

3. **Setup Environment Variables**

   ```bash
   DATABASE_URL=postgresql://username:password@hostname:port/database?sslmode=require

4. **Run the Application**

   ```bash
   node src/app.js


# Recommendations Collection API

## Overview

The Recommendations Collection API allows users to manage their recommendations by grouping them into collections. Users can create collections, add or remove recommendations, view collections, and delete them as needed.

## API Endpoints

### 1. Create Collection

- **Endpoint**: `POST /api/create`
- **Description**: Creates a new collection for the specified user.
- **Request Body**:
  ```json
  {
    "userId": 1,
    "name": "Favorite Movies",
    "description": "A collection of my favorite movies"
  }
- **Response**:
  ```json
  {
     "id": 1,
     "userId": 1,
     "name": "Favorite Movies",
     "description": "A collection of my favorite movies"
   }

- **Endpoint**: `POST /api/add`
- **Description**: Adds a recommendation to a specified collection.
- **Request Body**:
  ```json
  {
  "collectionId": 1,
  "recommendationId": 3,
  "userId": 1
   }
- **Response**:
  ```json
  {
  "collectionId": 1,
  "recommendationId": 3,
  "status": "Added"
   }

- **Endpoint**: `DELETE /api/remove`
- **Description**: Removes a recommendation from a specified collection.
- **Request Body**:
  ```json
  {
  "collectionId": 1,
  "recommendationId": 3
   }
- **Response**:
  ```json
  {
  "status": "Removed"
   }
- **Endpoint**: `GET /api/:userId`
- **Description**: Retrieves all collections and associated recommendations for a user.
- **Response**:
  ```json
  [
  {
    "id": 1,
    "userId": 1,
    "name": "Favorite Movies",
    "description": "A collection of my favorite movies",
    "recommendations": [
      {
        "id": 3,
        "title": "Inception",
        "type": "Movie"
      }
    ]
  }
   ]
- **Endpoint**: `DELETE /api/:collectionId`
- **Description**: Deletes a specified collection.
- **Response**:
  ```json
  {
  "status": "Deleted"
   }
