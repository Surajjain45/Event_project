// models/Audience.js
const mongoose = require('mongoose');

const audienceSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: Number,
  checkin: Boolean,
  eventID: String,
  qrCodeUrl: String,
//   name: { type: String, required: true },
//   email: { type: String, required: true },
//   phone: { type: String, required: true },
  // Add other audience-related fields as needed
});

const Audience = mongoose.model('Audience', audienceSchema);

module.exports = Audience;
