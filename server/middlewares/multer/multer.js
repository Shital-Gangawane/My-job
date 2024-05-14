const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // make sure this directory exists
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const ext = path.extname(file.originalname); // Extract file extension
    cb(null, file.fieldname + "-" + uniqueSuffix + ext); // filename with extension
  },
});

const upload = multer({ storage: storage });

// Use .fields for multiple fields
module.exports.cpUpload = upload.fields([
  { name: "logoImage", maxCount: 1 },
  { name: "coverImage", maxCount: 1 },
]);
