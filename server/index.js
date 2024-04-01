import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { fileURLToPath } from "url";
import path, { dirname } from "path";
import { connectDb } from "./db/db.js";
import adminRouter from "./routes/admin/admin.js";

dotenv.config(); // env config.
connectDb(); // db connection with error handling

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(cors());
app.use(express.json());

// Serve static files from the build directory
app.use("/", express.static(path.join(__dirname, "build")));

// API routes
app.use("/api", adminRouter);

// Serve the main HTML file for any other routes
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});
console.log("PORT:", process.env.PORT);

const PORT = process.env.PORT; // Default to port 3000 if PORT environment variable is not defined
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
