// Otp Model
const mongoose = require("mongoose");

const otpSchema = new mongoose.Schema({
  profileId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Profile",
  },
  otp: {
    type: Number,
    required: true,
  },
}, { timestamps: true });

const Otp = mongoose.model("Otp", otpSchema);

module.exports = Otp;
