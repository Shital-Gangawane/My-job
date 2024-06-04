// index.js

const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const helmet = require("helmet");
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
app.use(express.json());
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        imgSrc: [
          "'self'",
          "data:",
          "http://localhost:8000",
          "https://app.projob.co.in",
        ],
        scriptSrc: [
          "'self'",
          "http://localhost:8000",
          "https://app.projob.co.in",
        ],
        styleSrc: [
          "'self'",
          "'unsafe-inline'",
          "http://localhost:8000",
          "https://app.projob.co.in",
          "https://fonts.googleapis.com/",
          "https://cdnjs.cloudflare.com",
        ],
        connectSrc: [
          "'self'",
          "http://localhost:8000",
          "https://app.projob.co.in",
        ],
        // fontSrc:[

        // ]
        // Example: Adding additional sources if required by crypto or other libraries
        // scriptSrc: ["'self'", "https://trusted.cdn.com", "'unsafe-inline'"],
      },
    },
    crossOriginResourcePolicy: { policy: "cross-origin" },
  })
);

// Serve static files from the build directory
app.use("/", express.static(path.join(__dirname, "build")));

// Serve static files from the 'uploads' directory
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

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
