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
  name: {
    type: String,
  },
  designation: {
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
  followers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Candidate",
    },
  ],
  aboutCompany: {
    type: String,
  },
  industries: {
    type: [String],
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  email: {
    type: String,
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
  applications: [
    {
      candidate: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Candidate",
      },
      job: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Job",
      },
      status: {
        type: String,
        default: "Pending", // default status when a candidate is added
      },
      note: {
        type: String,
        default: "",
      },
    },
  ],
  shortlistedCandidates: [
    {
      candidate: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Candidate",
      },
      job: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Job",
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
