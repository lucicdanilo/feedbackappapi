const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
  design: Number,
  content: Number,
  text: String,
  feedbackDate: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model("CVFeedback", PostSchema);
