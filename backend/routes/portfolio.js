const express = require('express');
const router = express.Router();
const Portfolio = require('../models/Portfolio');

// Create or Update Portfolio
router.post('/add', async (req, res) => {
    try {
        const { userId, title, description, link, experienceYears } = req.body;
        
        let portfolio = await Portfolio.findOneAndUpdate(
            { user: userId },
            { title, description, link, experienceYears },
            { new: true, upsert: true }
        );

        res.json({ msg: "Portfolio updated successfully", portfolio });
    } catch (err) {
        res.status(500).send("Server Error");
    }
});

module.exports = router;