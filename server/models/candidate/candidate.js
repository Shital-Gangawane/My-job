const mongoose = require("mongoose");

const candidateSchema = new mongoose.Schema({
  fullName: {
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
  otherDetails: {
    // You can add other details as needed
  },
  kyc: {
    type: String, // Assuming either 'adhar card' or 'pan card'
  },
});

const Candidate = mongoose.model("Candidate", candidateSchema);

module.exports = Candidate;
