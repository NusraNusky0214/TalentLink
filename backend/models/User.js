const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['freelancer', 'client'], default: 'freelancer' },
    skills: [String], // Important for Function 3: Skill-based matching
    bio: String
});

module.exports = mongoose.model('User', UserSchema);