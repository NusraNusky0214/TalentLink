const mongoose = require('mongoose');

const PortfolioSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    title: { type: String, required: true },
    description: String,
    link: String,
    experienceYears: Number
});

module.exports = mongoose.model('Portfolio', PortfolioSchema);