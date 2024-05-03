const mongoose = require("mongoose");
const url = process.env.MONGODB_URL;
module.exports.connectDb = async () => {
  await mongoose
    .connect(url)
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log(err));
};
