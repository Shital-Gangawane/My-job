const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const { fileURLToPath } = require("url");
const path = require("path");
const { connectDb } = require("./db/db.js");
const adminRouter = require("./routes/admin/admin.routes.js");
const candidateRouter = require("./routes/candidate/candidate.routes.js");

connectDb(); // db connection with error handling

const app = express();
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

app.use(cors());
app.use(express.json());

// Serve static files from the build directory
app.use("/", express.static(path.join(__dirname, "build")));

// API routes
app.use("/api", adminRouter);
app.use("/api", candidateRouter);

// Serve the main HTML file for any other routes
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});
console.log("PORT:", process.env.PORT);

const PORT = process.env.PORT || 8000; // Default to port 3000 if PORT environment variable is not defined
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
