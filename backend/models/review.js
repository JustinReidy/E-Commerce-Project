const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema({
    // Reviewer Name
    reviewerName: {
        type: String,
        required: true,
        default: "Anonymous" //May remove?
    },
    // Review Score
    reviewScore: {
        type: Number,
        required: true,
        default: 0 // Make madatory on web ui form
    },
    // Review Text
    reviewText: {
        type: String,
    },
    // Item Number
    item: {
        type: mongoose.Schema.ObjectId,
        ref: 'Item',
        required: true
    }
    // Order Number (To validate that the review is legitamate?)
})

module.exports = mongoose.model('Review', reviewSchema)