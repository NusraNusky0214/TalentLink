const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../models/User'); // We defined this schema earlier

// Register Route
router.post('/register', async (req, res) => {
    try {
        const { name, email, password, role, skills } = req.body;

        // Check if user already exists
        let user = await User.findOne({ email });
        if (user) return res.status(400).json({ msg: "User already exists" });

        // Hash the password for security
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        user = new User({ name, email, password: hashedPassword, role, skills });
        await user.save();

        res.status(201).json({ msg: "User registered successfully!" });
    } catch (err) {
        res.status(500).send("Server Error");
    }
});

module.exports = router;