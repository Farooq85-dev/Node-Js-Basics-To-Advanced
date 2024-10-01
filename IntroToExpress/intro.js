// Express JS
// Fast, unopinionated, minimalist web framework for Node.js
// Un-oppionated means not well structured. You can follow every person architecture to build server via express js.

// Run this cooamnd to install Express Js npm install express
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3500;

//Get Request
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`---- Server is Runing at ${PORT}`);
});
