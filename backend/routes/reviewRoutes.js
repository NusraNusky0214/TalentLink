// backend/routes/reviews.js
const express = require("express");
const router = express.Router();
const Review = require("../models/Review");

router.post("/add", async (req, res) => {
  try {
    const review = new Review(req.body);
    await review.save();
    res.status(201).json({ message: "Review added successfully", review });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;