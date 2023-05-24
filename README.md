# Manga_microservices_example
 
# Routes
This repository contains the implementation of various routes for managing categories and mangas in a web application. The routes are organized as follows:

# Category Routes
# Get All Categories

Endpoint: GET /s2/categories

Description: Retrieves all categories from the database.

Response: Returns an array of category objects.

Get Category by ID

Endpoint: GET /s2/category/:id

Description: Retrieves a specific category based on the provided ID.

Parameters: id - The ID of the category.

Response: Returns a single category object.

Create Category

Endpoint: POST /s2/category


Description: Adds a new category to the database.

Request Body: Requires a JSON object with the name property representing the category 
name.

Response: Returns a success message upon successful creation.

Update Category

Endpoint: PUT /s2/category/:id

Description: Updates an existing category based on the provided ID.

Parameters: id - The ID of the category.

Request Body: Requires a JSON object with the name property representing the updated 

category name.

Response: Returns a success message upon successful update.

Delete Category

Endpoint: DELETE /s2/category/:id

Description: Deletes a category from the database based on the provided ID.

Parameters: id - The ID of the category.

Response: Returns a success message upon successful deletion.

# Manga Routes
# Get All Mangas
Endpoint: GET /s1/mangas

Description: Retrieves all mangas from the database.

Response: Returns an array of manga objects.

Get Manga by ID

Endpoint: GET /s1/manga/:id

Description: Retrieves a specific manga based on the provided ID.

Parameters: id - The ID of the manga.

Response: Returns a single manga object.

Create Manga

Endpoint: POST /s1/manga

Description: Adds a new manga to the database.

Request Body: Requires a JSON object with the name, categoryId, and author properties 
representing the manga details.

Response: Returns a success message upon successful creation.

Update Manga

Endpoint: PUT /s1/manga/:id

Description: Updates an existing manga based on the provided ID.

Parameters: id - The ID of the manga.

Request Body: Requires a JSON object with the name, categoryId, and author properties 
representing the updated manga details.

Response: Returns a success message upon successful update.

Delete Manga

Endpoint: DELETE /s1/manga/:id

Description: Deletes a manga from the database based on the provided ID.

Parameters: id - The ID of the manga.

Response: Returns a success message upon successful deletion.

# API Gateway 
This repository contains an API Gateway implementation using Express.js and http-proxy-middleware library. The API Gateway acts as an intermediary between clients and microservices, allowing for centralized routing and proxying requests to the appropriate microservices based on defined routes.

Setup
To get started, follow these steps:

Install the required dependencies by running npm install in the project directory.

Configure the routes and their corresponding microservice endpoints in the routes object located in the index.js file. Each route should be associated with the target URL of the microservice.

Start the API Gateway server by running npm start. The server will listen on port 5003 by default, but you can modify it if needed.

Usage
Once the API Gateway is running, you can send requests to the defined routes, and the API Gateway will proxy those requests to the respective microservices. Here's an example of how to use the API Gateway:

Ensure that the microservices are running on the specified ports (5000 for manga microservice and 5001 for category microservice).

Open a web browser and navigate to http://localhost:5001/s2 to access the category microservice through the API Gateway. This will proxy the request to the category microservice and return the response.

Similarly, open a web browser and navigate to http://localhost:5000/s1 to access the manga microservice through the API Gateway. The API Gateway will forward the request to the manga microservice and return the response.


Feel free to explore and utilize these routes to manage categories and mangas in your 

web application.
