const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Find freelancers matching specific skills
router.post('/match', async (req, res) => {
    try {
        const { requiredSkills } = req.body; // Array of skills e.g. ["React", "Node.js"]

        const matches = await User.find({
            role: 'freelancer',
            skills: { $in: requiredSkills }
        }).select('-password'); // Don't send passwords back

        res.json(matches);
    } catch (err) {
        res.status(500).send("Server Error");
    }
});

module.exports = router;