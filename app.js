const express = require("express");
const app = express();

//Routes
app.post("/projectFeedback", (req, res) => {
  res.send("Feedback for project!");
});

app.post("/websiteFeedback", (req, res) => {
  res.send("Feedback for website!");
});

app.post("/cvFeedback", (req, res) => {
  res.send("Feedback for CV");
});

app.listen(3000);
