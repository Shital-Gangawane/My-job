const express = require("express");
require("dotenv").config();
const cors = require("cors");
const { fileURLToPath } = require("url");
const path = require("path");
const { connectDb } = require("./db/db.js");
const adminRouter = require("./routes/admin/admin.routes.js");
const candidateRouter = require("./routes/candidate/candidate.routes.js");
const employerRouter = require("./routes/employer/employer.routes.js");

connectDb(); //db connection

const app = express();

app.use(cors());
app.use(express.json());

// Serve static files from the build directory
app.use("/", express.static(path.join(__dirname, "build")));

// API routes
app.use("/api", adminRouter);
app.use("/api", candidateRouter);
app.use("/api", employerRouter);

// Serve the main HTML file for any other routes
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

console.log("PORT:", process.env.PORT);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
