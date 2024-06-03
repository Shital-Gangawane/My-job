const multer = require("multer");
const fs = require("fs");
const crypto = require("crypto");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const dir = "uploads/docs/";
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    cb(null, dir); // Ensure this directory exists
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = `${Date.now()}-${crypto
      .randomBytes(6)
      .toString("hex")}-${file.originalname}`;
    cb(null, uniqueSuffix);
  },
});

module.exports.upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    const allowedTypes = ["application/pdf", "image/jpeg", "image/png"];
    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Invalid file type"));
    }
  },
  limits: { fileSize: 5 * 1024 * 1024 }, // Limit file size to 5MB
});
