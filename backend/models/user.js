const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    workosId: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    firstName: {
        type: String,
        required: false,
    },
    lastName: {
        type: String,
        required: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    // Todo: Build out Orders/Cart functionality
})

module.exports = mongoose.model('User', userSchema)