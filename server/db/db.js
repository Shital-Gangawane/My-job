const mongoose = require("mongoose");

module.exports.connectDb = async () => {
  await mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log(err));
};
