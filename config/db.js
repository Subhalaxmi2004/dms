
const mongoose = require("mongoose");
const dotenv = require('dotenv');
const colors = require("colors");
dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to MongoDB'.bgGreen.white);
    console.log(process.env.MONGO_URL);
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

module.exports = connectDB;
