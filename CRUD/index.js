const express = require("express");
const cors = require("cors");
const router = require("./Routes/index");
const connectDB = require("./Db/index");
const app = express();
// Install nodemon for continous runing and set a development and production script in package.json

app.use(cors());
app.use(express.json({ limit: "15kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use("/api/v1/", router);

//Create Succesfully
connectDB();

app.listen(3000, () => {
  console.log("---- Server is runing ----");
});
