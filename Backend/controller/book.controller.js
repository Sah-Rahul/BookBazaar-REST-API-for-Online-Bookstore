import Book from "../model/book.model.js";

export const addBook = async (req, res) => {
  try {
    if (req.user.role !== "admin") {
      return res.status(403).json({
        message: "Only admin can add books",
      });
    }

    const newBook = await Book.create(req.body);

    res.status(201).json({
      success: true,
      message: "Book added successfully",
      book: newBook,
    });
  } catch (err) {
    console.log("User from token:", req.user);
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

export const getAllBooks = async (req, res) => {
  try {
    const filters = req.query; 
    const books = await Book.find(filters);
    res.status(200).json({ success: true, books });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

export const getBookById = async (req, res) => {
  try {
    const findBook = await Book.findById(req.params.id);
    // console.log(findBook)

    if (!findBook) {
      return res.status(404).json({
        success: false,
        message: "Book not found!",
      });
    }

    res.status(200).json({
      success: true,
      book: findBook,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateBook = async (req, res) => {
  try {
    if (req.user.role !== "admin")
      return res.status(403).json({
        success: false,
        message: "Only admin can update books",
      });
    const updateBook = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updateBook)
      return res.json({
        success: false,
        message: "Book not found",
      });
    res.status(200).json({
      success: true,
      message: "book updated ",
      updateBook,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

export const deleteBook = async (req, res) => {
  try {
    if (req.user.role !== "admin")
      return res.status(403).json({
        success: false,
        message: "Only admin can delete books",
      });
    const deleteBook = await Book.findByIdAndDelete(req.params.id);
    if (!deleteBook)
      return res.status(404).json({
        success: false,
        message: "Book not found",
      });
    res.status(200).json({
      success: true,
      message: "Book  deleted ",
      deleteBook,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
