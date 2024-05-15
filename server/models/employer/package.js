const mongoose = require("mongoose");

const packageSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  postJobCredits: { type: Number, required: true }, // Number of job postings allowed
  featuredJobCredits: { type: Number }, // Number of job postings allowed
  candidatePool: { type: Number }, // Number of job postings allowed
  jobDisplayDuration: { type: Number },
  duration: { type: Number, required: true }, // Validity duration in days
  description: String,
});

const Package = mongoose.model("Package", packageSchema);
module.exports = Package;
