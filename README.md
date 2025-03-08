# Product Management Application

A React-based web application for managing products with features to view, add, update, and delete products, using MongoDB as the database.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Database](#database)
- [Contributing](#contributing)

## Overview

This application provides a user-friendly interface for managing products. Users can view a list of products, add new products, view product details, and update existing products. The application uses MongoDB for data persistence.

## Features

- **Product Listing**: View all available products
- **Product Details**: View detailed information about a specific product
- **Add Product**: Create new products with image upload capability
- **Update Product**: Modify existing product information
- **Responsive Design**: Works on various screen sizes using Bootstrap

## Technologies Used

- **Frontend**:
  - React.js
  - React Router for navigation
  - React Bootstrap for UI components
  - Axios for API requests
  - Redux Toolkit for state management

- **Backend**:
  - Django REST Framework
  - MongoDB for database
  - Corsheaders for handling CORS
  - RESTful API running on port 8000

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MongoDB (v4.4 or higher)
- Python (v3.8 or higher)
- Django and Django REST Framework
- Backend API server running on http://localhost:8000

### Installation

1. Clone the repository:
  ```bash
   git clone 
   cd newProject
  ```

### Install frontend dependencies:
  - cd client
  - npm install


### Install backend dependencies:
  - cd ../sever
  - pip install -r requirements.txt


### Configure MongoDB:
  - Ensure MongoDB is running on your system
  - Update the database configuration in sever/settings.py if needed
  - Start the backend server:
  - python manage.py runserver


### Start the frontend development server:
  - cd ../client
  - npm start


### Open your browser and navigate to:
  - http://localhost:3000

```bash
Project Structure
project/
├── client/                 # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── AddProduct.js
│   │   │   ├── NavbarMenu.js
│   │   │   ├── ProductDetail.js
│   │   │   ├── ShowProducs.js
│   │   │   └── UpdateProduct.js
│   │   ├── App.js
│   │   ├── index.js
│   │   └── ...
│   └── package.json
│
├── sever/                  # Django backend
│   ├── products/           # Products app
│   │   ├── models.py       # MongoDB models
│   │   ├── serializers.py  # REST serializers
│   │   ├── views.py        # API views
│   │   └── ...
│   ├── sever/              # Project settings
│   │   ├── settings.py     # MongoDB configuration
│   │   ├── urls.py         # API routes
│   │   └── ...
│   └── manage.py
└── ...
```

### API Endpoints
  - The application interacts with the following API endpoints:
```python
  GET http://localhost:8000/api/: Fetch all products
  GET http://localhost:8000/api/:id/: Fetch a specific product
  POST http://localhost:8000/api/: Create a new product
  PUT http://localhost:8000/api/:id/: Update a product
  DELETE http://localhost:8000/api/:id/: Delete a product
```
### Database
  - MongoDB Configuration
  - The application uses MongoDB as its primary database. The connection is configured in the
   
### Django settings file:
```python
DATABASES = {
    'default': {
        'ENGINE': 'djongo',
        'NAME': 'product_db',
        # Add additional configuration if needed:
        # 'HOST': 'mongodb://localhost:27017/',
        # 'USER': 'db_user',
        # 'PASSWORD': 'db_password',
    }
}
```

### Data Models
  - The main data model for the application is the Product model, which stores information about products including name, category, price, and image.

### Contributing
 - Fork the repository
 - Create your feature branch (git checkout -b feature/amazing-feature)
 - Commit your changes (git commit -m 'Add some amazing feature')
 - Push to the branch (git push origin feature/amazing-feature)
 - Open a Pull Request


### I've updated the README to include MongoDB information. The new version includes:

  1. Added MongoDB to the technologies list
  2. Updated the prerequisites to include MongoDB requirements
  3. Added MongoDB configuration steps in the installation section
  4. Created a dedicated Database section with MongoDB configuration details
  5. Updated the project structure to reflect the MongoDB integration
  6. Clarified that the product models are stored in MongoDB

This comprehensive README now accurately represents your full-stack application with React frontend and Django backend using MongoDB as the database. The document provides all the necessary information for someone to understand, set up, and contribute to your project.
