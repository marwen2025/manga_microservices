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
Request Body: Requires a JSON object with the name property representing the category name.
Response: Returns a success message upon successful creation.
Update Category
Endpoint: PUT /s2/category/:id
Description: Updates an existing category based on the provided ID.
Parameters: id - The ID of the category.
Request Body: Requires a JSON object with the name property representing the updated category name.
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
Request Body: Requires a JSON object with the name, categoryId, and author properties representing the manga details.
Response: Returns a success message upon successful creation.
Update Manga
Endpoint: PUT /s1/manga/:id
Description: Updates an existing manga based on the provided ID.
Parameters: id - The ID of the manga.
Request Body: Requires a JSON object with the name, categoryId, and author properties representing the updated manga details.
Response: Returns a success message upon successful update.
Delete Manga
Endpoint: DELETE /s1/manga/:id
Description: Deletes a manga from the database based on the provided ID.
Parameters: id - The ID of the manga.
Response: Returns a success message upon successful deletion.



Feel free to explore and utilize these routes to manage categories and mangas in your web application.