const express = require('express');
const router = express.Router();
const Review = require('../models/Review');

// Function 5: Add a new review [cite: 83]
router.post('/add', async (req, res) => {
    try {
        const { reviewerId, revieweeId, rating, comment } = req.body;
        const newReview = new Review({
            reviewer: reviewerId,
            reviewee: revieweeId,
            rating,
            comment
        });
        await newReview.save();
        res.status(201).json({ msg: "Review added successfully!", newReview });
    } catch (err) {
        res.status(500).json({ msg: "Server Error", error: err.message });
    }
});

// Function 5: Get reviews for a specific user [cite: 83]
router.get('/:userId', async (req, res) => {
    try {
        const reviews = await Review.find({ reviewee: req.params.userId })
            .populate('reviewer', 'name'); // Shows who wrote the review
        res.json(reviews);
    } catch (err) {
        res.status(500).json({ msg: "Server Error" });
    }
});

module.exports = router;