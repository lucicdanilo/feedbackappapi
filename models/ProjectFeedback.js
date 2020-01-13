const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
  project: String,
  design: Number,
  performance: Number,
  content: Number,
  text: String,
  feedbackDate: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model("ProjectFeedback", PostSchema);
