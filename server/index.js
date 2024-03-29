import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { fileURLToPath } from "url";
import path, { join, dirname } from "path";
import { connectDb } from "./db/db.js";
import adminRouter from "./routes/admin/admin.js";

dotenv.config(); //env config.
connectDb(); //db connection

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(cors());
app.use(express.json());

app.use("/", express.static(path.join(__dirname, "build")));

// app.use("/api", adminRouter);

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

const port = process.env.PORT;
app.listen(port, () => console.log(`listening on port ${port}`));
