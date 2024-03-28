import mongoose from "mongoose";

export const connectDb = async () => {
  const mongoURI = process.env.MONGO_URL;
  await mongoose
    .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log("MongoDB connected");
    })
    .catch((err) => console.error("Error connecting to MongoDB:", err));
};
