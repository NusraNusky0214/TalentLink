const express = require('express');
const router = express.Router();
const Bid = require('../models/Bid'); // Model created in Step 2

// Freelancer submits a bid
router.post('/submit', async (req, res) => {
    try {
        const { projectId, freelancerId, amount, proposal } = req.body;
        const newBid = new Bid({ project: projectId, freelancer: freelancerId, amount, proposal });
        await newBid.save();
        res.json({ msg: "Bid submitted successfully!", newBid });
    } catch (err) {
        res.status(500).send("Server Error");
    }
});

// Client views bids for their project
router.get('/:projectId', async (req, res) => {
    const bids = await Bid.find({ project: req.params.projectId }).populate('freelancer', 'name skills');
    res.json(bids);
});

module.exports = router;