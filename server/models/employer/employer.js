const mongoose = require("mongoose");

const employerSchema = new mongoose.Schema({
  companyName: {
    type: String,
  },
  logoImage: {
    type: String,
  },
  aboutCompany: {
    type: String,
  },
  industries: {
    type: [String],
  },
  phoneNumber: {
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
  website: {
    type: String,
  },
  companyAddress: {
    corporateAddress: {
      type: String,
    },
    socialNetworkURL: {
      type: String,
    },
  },
  companyKYC: {
    certificateOfIncorporation: {
      type: String,
    },
    udyogAadharCertificate: {
      type: String,
    },
    companyPANCard: {
      type: String,
    },
    GSTDocument: {
      type: String,
    },
    officePicture: {
      type: String,
    },
    visitingCards: {
      type: String,
    },
    hrProofOfIdentity: {
      type: String,
    },
  },
  isApproved: {
    type: Boolean,
    default: false,
  },
  postedJobs: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Job",
    },
  ],
});

const Employer = mongoose.model("Employer", employerSchema);

module.exports = Employer;
