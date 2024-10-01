const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();

//Middleware is like a middle-man between two parties. Middlewares act as bridge b/w request and response.

//There are threee types of Middlewares
// 1) Inbuilt
app.use(express.json({ limit: "16kb" }));

// 2) Custom
app.use((req, res, next) => {
  console.log("Middleware is calling");
  next();
});

// 3) Third Party
app.use(cookieParser());

app.get("/", (req, res) => {
  console.log("Hello Farooq");
});

app.listen(3000, () => {
  console.log("Server is Runing...");
});
