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
    experienceRequired: {
      type: String,
      required: true,
    },
    salaryRange: {
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
  },
  { timestamps: true } // Enables automatic timestamps
);

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;
