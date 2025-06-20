# Book Review Platform

A full-stack MERN (MongoDB, Express.js, React.js, Node.js) application for users to review and discover books.

---

## Table of Contents

* [Features](#features)
* [Technologies Used](#technologies-used)
* [Getting Started](#getting-started)
    * [Prerequisites](#prerequisites)
    * [Installation](#installation)
    * [Running the Application](#running-the-application)
* [Credentials (for testing/development)](#credentials-for-testingdevelopment)
* [API Endpoints](#api-endpoints)
* [Folder Structure](#folder-structure)
* [Contributing](#contributing)
* [License](#license)

---

## Features

* User authentication (registration, login, logout)
* Browse a list of books
* View individual book details
* Submit and edit book reviews
* Search for books
* User profiles (optional, can be expanded upon)

---

## Technologies Used

**Frontend:**

* **React.js**
* **React Router DOM**
* **Axios**
* (Add any other specific React libraries like Redux, Material-UI, Tailwind CSS, etc., if you're using them)

**Backend:**

* **Node.js**
* **Express.js**
* **MongoDB**
* **Mongoose** (ODM for MongoDB)
* **JWT** (JSON Web Tokens) for authentication
* **Bcryptjs** (for password hashing)
* (Add any other specific Node.js libraries you're using)

---

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

* **Node.js** (LTS version recommended)
* **npm** (comes with Node.js)
* **MongoDB** (local installation or a cloud service like MongoDB Atlas)

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/Biswadip125/Book_Review_Platform
    cd Book_Review_Platform
    ```

2.  **Install Frontend Dependencies:**

    ```bash
    cd frontend
    npm install
    ```

3.  **Install Backend Dependencies:**

    ```bash
    cd ../backend # Navigate back to the root if you were in frontend, then into backend
    npm install
    ```

4.  **Create `.env` files:**

    In the `backend` directory, create a file named `.env` and add the following:

    ```
    PORT=3000 # Or any other port you prefer
    MONGO_URI=mongodb+srv://biswadipchowdury114:SUY1Fs4EqlGQjEC8@cluster0.bqs3wwi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
    JWT_SECRET=aidaohraonwofhaonfoawdo
    ```


### Running the Application

This project requires both the frontend and backend servers to be running concurrently.

1.  **Start the Backend Server:**

    Open your terminal or command prompt, navigate to the `backend` directory:

    ```bash
    cd backend
    npm run dev
    ```

    The backend server should now be running, typically on `http://localhost:3000` (or the port you configured in your `.env`).

2.  **Start the Frontend Development Server:**

    Open a **new** terminal or command prompt window, navigate to the `frontend` directory:

    ```bash
    cd frontend
    npm run dev
    ```

    The frontend development server should now be running, typically opening your browser to `http://localhost:5173` (or whatever port Vite/Create React App assigns).

You should now be able to access the book review platform in your web browser.

---

## Credentials (for testing/development)

To quickly test the login functionality during development, you can use the following example credentials. **Remember to change these or remove them in a production environment.**

| Role        | Username                  | Password      |
| :---------- | :--------------------- | :------------ |
| Admin       | Biswadip125            | Biswadip@125  |




---

## API Endpoints

(This section is optional but highly recommended for clarity)

Here are some of the key API endpoints available in the backend:

**Authentication:**

* `POST /user/registerr`: Register a new user
* `POST /user/login`: Log in a user


**Books:**

* `GET /books`: Get all books
* `GET /books/:id`: Get a single book by ID
* `POST /books`: Add a new book (requires authentication)


**Reviews:**

* `GET /reviews/:bookId`: Get all reviews for a specific book
* `POST /review`: Submit a review for a book (requires authentication)


---

## Folder Structure

book-review-platform/
├── backend/
│   ├── config/             # Database connection, JWT config
│   ├── controllers/        # Business logic for routes
│   ├── models/             # Mongoose schemas
│   ├── routes/             # API routes
│   ├── middleware/         # Authentication middleware, error handling
│   ├── .env.example
│   ├── server.js           # Main backend server file
│   └── package.json
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/     # Reusable React components
│   │   ├── pages/          # React pages/views
│   │   ├── services/       # API calls (e.g., Axios instances)
│   │   ├── contexts/       # React Context API (if used)
│   │   ├── App.js          # Main React component
│   │   ├── index.js        # React entry point
│   │   └── index.css       # Global styles
│   ├── .env.example
│   └── package.json
└── README.md


---

## Contributing

Contributions are welcome! If you'd like to contribute, please follow these steps:

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/your-feature-name`).
3.  Make your changes.
4.  Commit your changes (`git commit -am 'Add new feature'`).
5.  Push to the branch (`git push origin feature/your-feature-name`).
6.  Create a new Pull Request.

---

## License

This project is licensed under the MIT License - see the `LICENSE` file for details.
