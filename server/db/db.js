const mongoose = require("mongoose");

module.exports.connectDb = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.ulebre1.mongodb.net/jobportal?retryWrites=true&w=majority&appName=Cluster0`
    );
    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
  }
};
