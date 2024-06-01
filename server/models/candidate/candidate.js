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

const awardSchema = new mongoose.Schema({
  title: {
    type: String,
    // required: true,
  },

  year: {
    type: String,
    // required: true,
  },
  description: {
    type: String,
    // required: true,
  },
});

const experienceSchema = new mongoose.Schema({
  title: {
    type: String,
    // required: true,
  },
  startDate: {
    type: String,
    // required: true,
  },
  endDate: {
    type: String,
    // required: true,
  },
  company: {
    type: String,
    // required: true,
  },
  description: {
    type: String,
    // required: true,
  },
});

const jobAlertSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  frequency: {
    type: String,
  },
  minSalary: {
    type: String,
  },
  maxSalary: {
    type: String,
  },
  experience: {
    type: String,
  },
  jobLocation: {
    type: String,
  },
  keyword: {
    type: String,
  },
});
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
  languages: {
    type: Array,
  },
  salaryType: {
    type: String,
  },
  salary: {
    type: String,
  },
  ctc: {
    type: String,
  },
  categories: {
    type: String,
  },

  email: {
    type: String,
  },
  description: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
  photos: [String],

  phoneNumber: {
    type: String,
    required: true,
  },
  alternateNumbers: {
    type: Array,
  },
  jobTitle: {
    type: String,
    default: "",
  },
  following: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Employer",
    },
  ],

  location: {
    latitude: {
      type: String,
    },
    longitude: {
      type: String,
    },
    city: {
      type: String,
      default: "",
    },
    address: {
      type: String,
      default: "",
    },
    country: {
      type: String,
    },
    state: {
      type: String,
      default: "",
    },
    pin: {
      type: Number,
    },
  },

  qualification: {
    type: String,
  },

  specialization: {
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
  following: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Employer",
    },
  ],
  educations: [educationSchema],
  experiences: [experienceSchema],
  awards: [awardSchema],
  jobAlert: [jobAlertSchema],
  portfolio: {
    type: String,
  },
  github: {
    type: String,
  },
  linkedin: {
    type: String,
  },
  industry: {
    type: String,
  },
});

const Candidate = mongoose.model("Candidate", candidateSchema);

module.exports = Candidate;
