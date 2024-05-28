const mongoose = require("mongoose");

const educationSchema = new mongoose.Schema({
  degree: {
    type: String,
    // required: true,
  },
  institute: {
    type: String,
    // required: true,
  },
  year: {
    type: String,
    // required: true,
  },
  specialization: {
    type: String,
    // required: true,
  },
});

const Education = mongoose.model("Education", educationSchema);

module.exports = Education;
