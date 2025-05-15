const mongoose = require('mongoose');

const FeedbackSchema = new mongoose.Schema({
  text: { type: String, required: true },
  sentiment: { type: String },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Feedback', FeedbackSchema);
