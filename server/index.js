import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDb } from "./db/db.js";
import adminRouter from "./routes/admin/admin.js";

dotenv.config(); //env config.
connectDb(); //db connection

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("App running!");
});

app.use("/api", adminRouter);

app.listen(process.env.PORT, () =>
  console.log(`listening on port ${process.env.PORT}`)
);
