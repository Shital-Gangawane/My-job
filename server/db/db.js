import mongoose from "mongoose";

export const connectDb = async () => {
  await mongoose
    .connect(process.env.MONGO_URL)
    .then((res) => console.log("connected to db"))
    .catch((err) => console.log(err.message));
};
