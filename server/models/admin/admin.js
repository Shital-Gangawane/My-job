import mongoose, { Schema } from "mongoose";

const adminSchema = new mongoose.Schema({
  name: {
    type: String,
    default: "",
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  cityAssigned: {
    type: Array,
    default: [],
  },
  skillAssigned: {
    type: Array,
    default: [],
  },
  categoryAssigned: {
    type: Array,
    default: [],
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  isSuperAdmin: {
    type: Boolean,
    default: false,
  },
  isApproved: {
    type: Boolean,
    default: false,
  },
  postedJobs: [
    {
      type: Schema.Types.ObjectId,
      ref: "Job",
    },
  ],
});

const Admin = mongoose.model("Admin", adminSchema);

export default Admin;
