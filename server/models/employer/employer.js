const mongoose = require("mongoose");

const employerSchema = new mongoose.Schema({
  postJobCredits: {
    type: Number,
    default: 1,
  },
  purchasedPackages: [
    {
      package: { type: mongoose.Schema.Types.ObjectId, ref: "Package" },
      purchasedOn: { type: Date, default: Date.now },
      isActive: { type: Boolean, default: true },
    },
  ],
  companyName: {
    type: String,
  },
  employerName: {
    type: String,
  },
  foundedDate: {
    type: String,
  },
  companySize: {
    type: String,
  },
  categories: {
    type: Array,
  },
  introVideoUrl: {
    type: String,
  },
  logoImage: {
    type: String,
  },
  coverImage: {
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
  country: {
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
  address: {
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
  members: {
    type: Array,
  },

  socialNetworks: {
    type: Array,
  },
  shortlistedCandidates: [
    {
      candidate: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Candidate",
      },
      status: {
        type: String,
        default: "Shortlisted", // default status when a candidate is added
      },
      note: {
        type: String,
        default: "",
      },
    },
  ],
});

const Employer = mongoose.model("Employer", employerSchema);

module.exports = Employer;
