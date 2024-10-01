const mongoose = require("mongoose");
const dotenv = require("dotenv");

// Dotenv Configs
dotenv.config({
  path: "./.env",
});

const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}`);
    console.log("---- MONGODB connected SUCCESSFULLY ----");
  } catch (error) {
    console.log("---- MONGODB connection FAILED ----", error);
    process.exit(1);
  }
};

module.exports = connectDB;
