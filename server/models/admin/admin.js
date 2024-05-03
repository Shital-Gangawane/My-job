const mongoose = require("mongoose");

// Create a separate connection
const conn = mongoose.createConnection(process.env.MONGODB_URL);

// Define your schema
const adminSchema = new mongoose.Schema({
  name: {
    type: String,
    default: "",
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  roleType: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  designation: {
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
      type: mongoose.Schema.Types.ObjectId,
      ref: "Job",
    },
  ],
});

// Create model using the connection instance
const Admin = conn.model("Admin", adminSchema);

module.exports = {
  conn, // Export the connection instance
  Admin, // Export the model
};
