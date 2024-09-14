import Book from "../model/book.model.js";

// Function to get all books
export const getBook = async (req, res) => {
    try {
        const books = await Book.find();
        res.status(200).json(books);
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json({ message: "Error fetching books" });
    }
};

// Function to add a new book
export const addBook = async (req, res) => {
    try {
        const { name, category, title, price, image } = req.body;

        // Validate input data
        if (!name || !category || !title || !price || !image) {
            return res.status(400).json({ message: "All fields are required" });
        }

        // Create a new book
        const newBook = new Book({
            name,
            category,
            title,
            price,
            image
        });

        // Save the new book to the database
        const savedBook = await newBook.save();
        res.status(201).json({ success: true, book: savedBook });
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json({ message: "Error adding book" });
    }
};
