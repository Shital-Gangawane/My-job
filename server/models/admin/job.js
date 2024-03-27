import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  location: {
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
  isRemoteOrHybrid: {
    type: Boolean,
    default: false,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Admin",
  },
});

const Job = mongoose.model("Job", jobSchema);

export default Job;
