const mongoose = require("mongoose");

const networkSchema = new mongoose.Schema(
  {
    network: { type: String, required: false },
    url: { type: String, required: false },
  },
  {
    timestamps: true, // adds createdAt and updatedAt timestamps
  }
);

const Network = mongoose.model("Network", networkSchema);

module.exports = Network;
