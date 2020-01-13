const express = require("express");
const app = express();
const mongoose = require("mongoose");
const ProjectFeedback = require("./models/ProjectFeedback");
const WebsiteFeedback = require("./models/WebsiteFeedback");
const CVFeedback = require("./models/CVFeedback");
const bodyParser = require("body-parser");
require("dotenv/config");

app.use(bodyParser.json());

//Routes
app.post("/projectFeedback", (req, res) => {
  const feedback = new ProjectFeedback({
    project: req.body.project,
    design: req.body.design,
    performance: req.body.performance,
    content: req.body.content,
    text: req.body.text
  });
  feedback
    .save()
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.json({ message: err });
    });
});

app.post("/websiteFeedback", (req, res) => {
  const feedback = new WebsiteFeedback({
    design: req.body.design,
    performance: req.body.performance,
    content: req.body.content,
    text: req.body.text
  });
  feedback
    .save()
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.json({ message: err });
    });
});

app.post("/cvFeedback", (req, res) => {
  const feedback = new CVFeedback({
    design: req.body.design,
    content: req.body.content,
    text: req.body.text
  });
  feedback
    .save()
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.json({ message: err });
    });
});

// Connectiong to DB
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to DB!");
  }
);

app.listen(3000);
