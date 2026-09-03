const mongoose = require('mongoose');
const BidSchema = new mongoose.Schema({
    project: { type: mongoose.Schema.Types.ObjectId, ref: 'Project' },
    freelancer: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    amount: Number,
    proposal: String
});
module.exports = mongoose.model('Bid', BidSchema);