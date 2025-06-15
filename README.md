# 📦 Bookstore API – Backend

A fully-featured backend for an online bookstore built with **Node.js**, **Express**, and **MongoDB**.  
Supports user authentication, customer reviews, and order placement.

## 🛠️ Tech Stack

- **Node.js** + **Express.js**
- **MongoDB** + **Mongoose**
- **JWT Authentication**
- **Role-based Access Control**
- **RESTful API Design**

## 🗂️ Project Structure

```bash
backend/
│
├── controllers/   # Route handlers (auth, books, reviews, orders)
├── middleware/    # Auth & admin middlewares
├── models/        # Mongoose schemas (User, Book, Review, Order)
├── routes/        # API routes
├── utils/         # Utilities (e.g., API key generator)
├── .env           # Env variables (MONGO_URI, JWT_SECRET)
└── server.js      # App entry point
```

## 🔐 Auth & API Key Routes

| Method | Endpoint         | Description                |
| ------ | ---------------- | -------------------------- |
| POST   | `/auth/register` | Register a new user        |
| POST   | `/auth/login`    | Login & get JWT token      |
| POST   | `/auth/api-key`  | Generate a new API key     |
| GET    | `/auth/me`       | Get logged-in user profile |

## 📚 Book Routes

| Method | Endpoint     | Access | Description    |
| ------ | ------------ | ------ | -------------- |
| POST   | `/books`     | Admin  | Add a book     |
| GET    | `/books`     | Public | Get all books  |
| GET    | `/books/:id` | Public | Get book by ID |
| PUT    | `/books/:id` | Admin  | Update a book  |
| DELETE | `/books/:id` | Admin  | Delete a book  |

## ✍️ Review Routes

| Method | Endpoint                 | Access    | Description       |
| ------ | ------------------------ | --------- | ----------------- |
| POST   | `/books/:bookId/reviews` | Logged-in | Add a review      |
| GET    | `/books/:bookId/reviews` | Public    | View all reviews  |
| DELETE | `/reviews/:id`           | Owner     | Delete own review |

## 🛒 Order Routes

| Method | Endpoint      | Access    | Description         |
| ------ | ------------- | --------- | ------------------- |
| POST   | `/orders`     | Logged-in | Place an order      |
| GET    | `/orders`     | Logged-in | View own orders     |
| GET    | `/orders/:id` | Logged-in | View specific order |

## 🛠️ Getting Started

## 1️⃣ Clone the Repo

```bash
git clone https://github.com/Sah-Rahul/BookBazaar-REST-API-for-Online-Bookstore.git
cd backend

## Install Dependencies
npm install

##  Create .env File
PORT=4000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key

##  Run the Server
npm run dev

```

## ✅ Future Enhancements

- Payment gateway integration (e.g., Razorpay, Stripe)

- Admin dashboard analytics

- Pagination, sorting, and search

- Email notifications

## 📬 Contact

Feel free to reach out for any queries or feedback!
Made with ❤️ by Rahul Sah.
