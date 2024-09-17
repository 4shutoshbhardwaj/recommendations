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

npm install

2. **Setup Environment Variables**

DATABASE_URL=postgresql://username:password@hostname:port/database?sslmode=require

3. **Run the Application**

node src/app.js
