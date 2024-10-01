// MongoDb
//MongoDB is a source-available, cross-platform, document-oriented database program. Classified as a NoSQL database product, MongoDB utilizes JSON-like documents with optional schemas. MongoDB is developed by MongoDB Inc. and current versions are licensed under the Server Side Public License

// How to connect to mongodb.
// Create an account.
// Take the connection string.
// Install Mongoose and make a connectio connect

// Mongoose
// Mongoose is a JavaScript object-oriented programming library that creates a connection between MongoDB and the Node.js JavaScript runtime environment. It provides a straightforward, schema-based solution to model application data
const express = require("express");
const connectDB = require("./Db/index");
const app = express();

//Create Succesfully
connectDB();

app.listen(3000, () => {
  console.log("Server is runing");
});
