const Sentiment = require('sentiment');
const Feedback = require('../models/Feedback');

const sentiment = new Sentiment();

const analyzeFeedback = async (req, res) => {
  const { text } = req.body;

  if (!text) {
    return res.status(400).json({ error: "Feedback text is required." });
  }

  const result = sentiment.analyze(text);
  let label = "Neutral";
  if (result.score > 0) label = "Positive";
  else if (result.score < 0) label = "Negative";

  const feedback = new Feedback({ text, sentiment: label });
  await feedback.save();

  res.status(200).json({ sentiment: label, text });
};

module.exports = { analyzeFeedback };
