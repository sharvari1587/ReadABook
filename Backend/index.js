import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import path from "path";

import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";

const app = express();

app.use(cors());
app.use(express.json());

dotenv.config();

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

// connect to mongoDB
try {
    mongoose.connect(URI);
    console.log("Connected to mongoDB");
} catch (error) {
    console.log("Error: ", error);
}

// defining routes
app.use("/book", bookRoute);
app.use("/user", userRoute);


//deployment
if (process.env.NODE_ENV === "production") {
    const dirpath = path.resolve(); // Define dirpath with path.resolve()
    app.use(express.static(path.join(dirpath, "Frontend", "dist"))); // Correct static file directory

    app.get("*", (req, res) => {
        res.sendFile(path.resolve(dirpath, "Frontend", "dist", "index.html")); // Correct path to index.html
    });
}


app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});








// {
//     "name": "bookstore",
//     "version": "1.0.0",
//     "description": "mern project",
//     "main": "index.js",
//     "type": "module",
//     "scripts": {
//         "test": "echo \"Error: no test specified\" && exit 1",
//         "start": "nodemon index.js"
//     },
//     "repository": {
//         "type": "git",
//         "url": "git+https://github.com/akhil2k-lc/bookStoreApp.git"
//     },
//     "author": "Akhil",
//     "license": "ISC",
//     "bugs": {
//         "url": "https://github.com/akhil2k-lc/bookStoreApp/issues"
//     },
//     "homepage": "https://github.com/akhil2k-lc/bookStoreApp#readme",
//     "dependencies": {
//         "bcryptjs": "^2.4.3",
//         "cors": "^2.8.5",
//         "dotenv": "^16.4.5",
//         "express": "^4.18.3",
//         "mongoose": "^8.2.2",
//         "nodemon": "^3.1.0"
//     }
// }
