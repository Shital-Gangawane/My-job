const mongoose = require("mongoose");

const memberSchema = new mongoose.Schema(
  {
    name: { type: String, required: false },
    designation: { type: String, required: false },
    experience: { type: String, required: false },
    profileImage: { type: String, required: false },
    fbUrl: { type: String, required: false },
    twitterUrl: { type: String, required: false },
    googleUrl: { type: String, required: false },
    linkedinUrl: { type: String, required: false },
    dribbleUrl: { type: String, required: false },
    description: { type: String, required: false },
  },
  {
    timestamps: true, // adds createdAt and updatedAt timestamps
  }
);

const Member = mongoose.model("Member", memberSchema);

module.exports = Member;
