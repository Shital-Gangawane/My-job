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
    },
    minExperience: {
      type: String,
    },
    maxExperience: {
      type: String,
    },
    minSalary: {
      type: String,
    },
    maxSalary: {
      type: String,
    },
    careerLevel: {
      type: String,
    },
    deadlinedate: {
      type: String,
    },
    externalUrl: {
      type: String,
    },
    gender: {
      type: String,
    },
    jobApplyType: {
      type: String,
    },
    jobType: {
      type: String,
    },
    qualificationRequired: {
      type: String,
    },
    salaryType: {
      type: String,
    },
    selectedCategory: {
      type: String,
    },
    salaryType: {
      type: String,
    },
    selectedCategory: {
      type: String,
    },
    workMode: {
      type: String,
    },
    isRemote: {
      type: Boolean,
      default: false,
    },
    keySkills: {
      type: String,
    },
    company: {
      type: String,
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
