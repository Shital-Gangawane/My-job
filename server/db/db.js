// const mongoose = require("mongoose");
// const url = process.env.MONGODB_URL;
// module.exports.connectDb = async () => {
//   await mongoose
//     .connect(url)
//     .then(() => console.log("MongoDB connected"))
//     .catch((err) => console.log(err));
// };

// db.js

const mongoose = require("mongoose");

let isConnected = false;

module.exports.connectDb = async () => {
  if (isConnected) {
    console.log("Database is already connected.");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URL);
    isConnected = true;
    console.log("MongoDB connected");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
};

module.exports.isConnected = () => isConnected;
