# E-Commerce Backend
---
# API Documentation

## Base URL
The API is served on `http://localhost:3000` (assuming default port).

## Items

### Get All Items
- **Endpoint**: `GET /items`
- **Description**: Retrieves a list of all items.
- **Response**: Array of item objects.

### Get One Item
- **Endpoint**: `GET /items/:id`
- **Description**: Retrieves a single item by ID.
- **Parameters**: `id` (string) - The ID of the item.
- **Response**: Item object or 404 if not found.

### Create an Item
- **Endpoint**: `POST /items`
- **Description**: Creates a new item.
- **Request Body**:
  ```json
  {
    "imageUrl": "string",
    "imageAlt": "string",
    "name": "string",
    "colors": ["string"],
    "sizes": ["string"],
    "price": number,
    "description": "string"
  }
  ```
- **Response**: Created item object (201) or error (400).

### Update an Item
- **Endpoint**: `PATCH /items/:id`
- **Description**: Updates an existing item.
- **Parameters**: `id` (string) - The ID of the item.
- **Request Body**: Partial item object with fields to update.
- **Response**: Updated item object or error.

### Delete an Item
- **Endpoint**: `DELETE /items/:id`
- **Description**: Deletes an item by ID.
- **Parameters**: `id` (string) - The ID of the item.
- **Response**: "Deleted Item" or error.

## Reviews

### Get All Reviews for an Item
- **Endpoint**: `GET /items/:itemId/reviews`
- **Description**: Retrieves all reviews for a specific item.
- **Parameters**: `itemId` (string) - The ID of the item.
- **Response**: Array of review objects.

### Get One Review
- **Endpoint**: `GET /items/:itemId/reviews/:reviewId`
- **Description**: Retrieves a single review by ID.
- **Parameters**: `itemId` (string), `reviewId` (string).
- **Response**: Review object or 404 if not found.

### Create a Review
- **Endpoint**: `POST /items/:itemId/reviews`
- **Description**: Creates a new review for an item.
- **Parameters**: `itemId` (string) - The ID of the item.
- **Request Body**:
  ```json
  {
    "reviewerName": "string",
    "reviewScore": number,
    "reviewText": "string"
  }
  ```
- **Response**: Created review object (201) or error (400).

### Update a Review
- **Endpoint**: `PATCH /items/:itemId/reviews/:reviewId`
- **Description**: Updates an existing review.
- **Parameters**: `itemId` (string), `reviewId` (string).
- **Request Body**: Partial review object with fields to update.
- **Response**: Updated review object or error.

### Delete a Review
- **Endpoint**: `DELETE /items/:itemId/reviews/:reviewId`
- **Description**: Deletes a review by ID.
- **Parameters**: `itemId` (string), `reviewId` (string).
- **Response**: "Deleted Review" or error.

## Root Endpoint
- **Endpoint**: `GET /`
- **Description**: Basic health check.
- **Response**: "Hello World"
