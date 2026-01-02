const express = require('express')
const router = express.Router()
const Item = require('../models/item')

// Getting all Items
router.get('/', async (req, res) => {
    try {
        const items = await Item.find()
        res.send(items)
    } catch (err) {
        res.status(500).json({ message: err.message})
    }
})

// Getting one Item
router.get('/:id', getItem, (req, res) => {
    res.send(res.item.name)
})

// Creating one Item
router.post('/', async (req, res) => {
    const {imageUrl, imageAlt, name, colors, sizes, price, description} = req.body
    console.log(sizes)
    const item = new Item({
        imageUrl: imageUrl,
        imageAlt: imageAlt,
        name: name,
        colors: colors,
        sizes: sizes,
        price: price,
        description: description,
    })

    try {
        const newItem = await item.save()
        res.status(201).json(newItem)
    } catch (err) {
        res.status(400).json({message: err.message})
    }
})

// Updating one Item
router.patch('/:id', getItem, async (req, res) => {
    // only update fields listed in the req.body
    for(const field in req.body) {
        res.item[field] = req.body[field]
    }
    
    try {
        const updatedItem = await res.item.save()
        res.json(updatedItem)
    } catch (err) {
        res.status(400).json({message: err.message})
    }
})

// Deleting one Item
router.delete('/:id', getItem, async (req, res) => {
    try {
        await res.item.deleteOne()
        res.json("Deleted Item")
    } catch (err) {
        res.status(500).json({message: err.message})
    }

})

async function getItem(req, res, next) {
    let item
    try {
        item = await Item.findById(req.params.id)
        console.log(item)
        if (item == null) {
            return res.status(404).json({message: 'Cannot find Item'})
        }
    } catch(err) {
        return res.status(500).json({message: err.message})
    }

    console.log(item)

    res.item = item
    next()
}

module.exports = router