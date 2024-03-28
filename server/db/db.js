import mongoose from "mongoose";

export const connectDb = async () => {
  await mongoose
    .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log("MongoDB connected");
    })
    .catch((err) => console.error("Error connecting to MongoDB:", err));
};
