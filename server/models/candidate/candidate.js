const mongoose = require("mongoose");

const candidateSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  logoImage: {
    type: String,
  },
  showMyProfile: {
    type: Boolean,
    default: true,
  },
  dob: {
    type: String,
  },
  gender: {
    type: String,
  },
  age: {
    type: String,
  },
  experience: {
    type: String,
  },
  language: {
    type: String,
  },
  salaryType: {
    type: String,
  },
  salary: {
    type: String,
  },
  categories: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  photos: [String],

  phoneNumber: {
    type: String,
  },

  location: {
    latitude: {
      type: String,
    },
    longitude: {
      type: String,
    },
  },

  qualification: {
    type: String,
  },

  appliedJobs: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Job",
    },
  ],

  skills: [String],

  resume: {
    type: String,
  },
  kyc: {
    type: String, // Assuming either 'adhar card' or 'pan card'
  },
  isApproved: {
    type: Boolean,
    default: false,
  },
});

const Candidate = mongoose.model("Candidate", candidateSchema);

module.exports = Candidate;
