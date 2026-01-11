const User = require('../models/user')

async function requireAuth(req, res, next) {
    if (!req.session.userId) {
        return res.status(401).json({
            message: 'Authentication required.',
            loginUrl: '/auth/login'
        })
    }

    try {
        req.user = await User.findById(req.session.userId)

        if (!req.user) {
            req.session = null
            return res.status(401).json({ message: 'User not found'})
        }

        next()
    } catch(err) {
        console.log(`Auth middleware error: ${err}`)
        res.status(500).json({ message: err.message })
    }
}

async function attachUser(req, res, next) {
    if (req.session.userId) {
        try {
            req.user = await User.findById(req.session.userId)
        } catch(err) {
            console.error(`Attach user error: ${err}`)
        }
    }
    next()
}