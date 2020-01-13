const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
  design: Number,
  performance: Number,
  content: Number,
  text: String,
  feedbackDate: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model("WebsiteFeedback", PostSchema);
