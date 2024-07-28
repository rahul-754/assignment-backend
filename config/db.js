// backend/config/db.js
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const uri = process.env.MONGO_URL;
console.log(uri)
//const uri = "mongodb+srv://rahulkumar69953175:Rahul@empdb.thyt2vw.mongodb.net/"
console.log(uri)
if (!uri) {
  console.error('MongoDB URI is not set. Please check your environment variables.');
  process.exit(1);
}

const connectDB = async () => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Failed to connect to MongoDB', error);
    process.exit(1);
  }
};

module.exports = connectDB;
