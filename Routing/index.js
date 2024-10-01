const express = require("express");
const router = require("./Routes/index");
const app = express();

app.use(router("/"));

app.get("/", (req, res) => {
  console.log("Hello Farooq");
});

app.listen(3000, () => {
  console.log("Server is Runing...");
});
