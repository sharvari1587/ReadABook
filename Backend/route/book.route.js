import express from "express";
import { getBook, addBook } from "../controller/book.controller.js";

const router = express.Router();

// GET request to fetch all books
router.get("/", getBook);

// POST request to add a new book
router.post("/add", addBook);

export default router;
