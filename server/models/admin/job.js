const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
  {
    jobTitle: {
      type: String,
      required: true,
    },
    jobDescription: {
      type: String,
      required: true,
    },
    jobLocation: {
      type: String,
      required: true,
    },
    minExperience: {
      type: String,
      required: true,
    },
    maxExperience: {
      type: String,
      required: true,
    },
    minSalary: {
      type: String,
      required: true,
    },
    maxSalary: {
      type: String,
      required: true,
    },
    isRemote: {
      type: Boolean,
      default: false,
    },
    keySkills: {
      type: String,
      required: true,
    },
    company: {
      type: String,
      required: true,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Admin",
    },
    createdByEmp: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Employer",
    },
    applications: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Candidate",
      },
    ],
    shortlisted: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Candidate",
      },
    ],
  },
  { timestamps: true } // Enables automatic timestamps
);

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;
