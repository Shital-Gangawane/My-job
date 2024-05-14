const mongoose = require("mongoose");

const candidateSchema = new mongoose.Schema({
  fullName: {
    type: String,
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
  contactInformation: {
    mobileNumber: {
      type: String,
    },

    currentLocation: String,
  },
  education: {
    qualification: String,
    // You can add more fields related to education here
  },
  skills: [String],
  experience: {
    // You can define the structure for experience details here
  },
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
