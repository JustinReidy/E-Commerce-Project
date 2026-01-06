const express = require('express')
const router = express.Router({ mergeParams: true })
const Review = require('../models/review')


// Get one item reviews
router.get('/', async (req, res) => {
    const item = req.params.id
    try {
        const reviews = await Review.find({item: item})
        res.send(reviews)
    } catch (err) {
        res.status(500).json({ message: err.message})
    }
})
// Get one review
router.get('/:id', async (req, res) => {
    try{
        const review = await Review.findById(req.params.id)
        res.send(review)
    } catch (err) {
        res.status(500).json({ message: err.message})
    }
    //  const review = await Review.findById
})

// Create a review
router.post('/', async (req, res) => {
    const {reviewerName, reviewScore, reviewText} = req.body
    const item = req.params.id

    const review = new Review({
        reviewerName: reviewerName,
        reviewScore: reviewScore,
        reviewText: reviewText, 
        item: item
    })

    try {
        const newReview = await review.save()
        res.status(201).json(newReview)
    } catch {
        res.status(400).json({ message: err.message })
    }
})

// Modify a review
router.patch('/:id', getReview, async (req, res) => {
    for(const field in req.body) {
        res.review[field] = req.body[field]
    }

    try {
        const updatedReview = await res.review.save()
        res.json(updatedReview)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

// Delete a review
router.delete('/:id', getReview, async (req, res) => {
    try {
        await res.review.deleteOne()
        res.json("Deleted Review")
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

async function getReview(req, res, next) {
    let review
    try {
        review = await Review.findById(req.params.id)
        if (review == null) {
            return res.status(404).json({message: 'Cannot find review'})
        }
    } catch (err) {
        return res.status(500).json({message: err.message})
    }

    res.review = review
    next()
}

module.exports = router