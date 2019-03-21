/**
 * Model: Mentor
 */
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

// Mentor Schema.
const mentorSchema = new mongoose.Schema({
    sale_gross: Number,
    earnings: Number,
    currency: String,
    memberSince: Date,
    customerEmail: String,
    event_time: {
        type: Date,
        default: Date.now
    },
});


// Export the model.
module.exports = mongoose.model('Mentor', mentorSchema);