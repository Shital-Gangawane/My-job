import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { fileURLToPath } from "url";
import { join, dirname } from "path";
import { connectDb } from "./db/db.js";
import adminRouter from "./routes/admin/admin.js";

dotenv.config(); //env config.
connectDb(); //db connection

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(cors());
app.use(express.json());

app.use("/", express.static("build"));

app.get("/", (req, res) => {
  res.send("App running!");
});

app.use("/api", adminRouter);

app.get("/*", (req, res) => {
  res.sendFile(join(__dirname, "./build", "index.html"));
});

app.listen(process.env.PORT, () =>
  console.log(`listening on port ${process.env.PORT}`)
);
