import express from "express";

import { isAuthenticated } from "../middleware/auth.middleware.js";

import { addBook, deleteBook, getAllBooks, getBookById, updateBook } from "../controller/book.controller.js";
const router = express.Router();

router.post('/books', isAuthenticated, addBook);
router.get("/get-all/books", getAllBooks);
router.get("/books/:id", getBookById);
router.put("/books/:id", isAuthenticated, updateBook);
router.delete("/books/:id", isAuthenticated, deleteBook);


export default router;