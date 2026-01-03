const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema({
    imageUrl: {
        type: String,
        required: true,
    },
    imageAlt: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    colors: {
        type: Array,
        required: true,
    },
    sizes: {
        type: Array,
        required: true,
    },
    price: {
        type: Number,
    },
    description: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        default: 5.0
    },
    reviewCount: {
        type: Number,
        default: 0
    },
    dateAdded: {
        type: Date,
        required: true,
        default: Date.now
    }
})

module.exports = mongoose.model('Item', itemSchema)