const mongoose = require("mongoose");
const { adminSchema } = require("../models/admin/admin.js");

module.exports.connectDb = async () => {
  await mongoose
    .connect(
      `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.ulebre1.mongodb.net/jobportal?retryWrites=true&w=majority&appName=Cluster0`
    )
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log(err));
};
