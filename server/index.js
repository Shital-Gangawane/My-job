// index.js

const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const path = require("path");
const { connectDb } = require("./db/db.js");
const { checkDbConnection } = require("./middlewares/db/checkDbConnection.js");
const adminRouter = require("./routes/admin/admin.routes.js");
const candidateRouter = require("./routes/candidate/candidate.routes.js");
const employerRouter = require("./routes/employer/employer.routes.js");
require("./models/admin/admin.js");

const app = express();

app.use(cors());
app.use(express.json());

// Serve static files from the build directory
app.use("/", express.static(path.join(__dirname, "build")));

// Middleware to check database connection
app.use(checkDbConnection);

// API routes
app.use("/api", adminRouter);
app.use("/api", candidateRouter);
app.use("/api", employerRouter);

// Serve the main HTML file for any other routes
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

const PORT = process.env.PORT || 8000;

connectDb()
  .then(() => {
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
  })
  .catch((error) => {
    console.error("Error starting server:", error);
    process.exit(1);
  });
