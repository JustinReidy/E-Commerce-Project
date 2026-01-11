const express = require('express')
const router = express.Router()
const { WorkOS } = require('@workos-inc/node')
const User = require('../models/user')

const workos = new WorkOS(process.env.WORKOS_API_KEY)

// Login 
router.get('/login', (req, res) => {
    const authorizationUrl = workos.userManagement.getAuthorizationUrl({
        provider: 'authkit',
        redirectUri: process.env.WORKOS_REDIRECT_URI,
        clientId: process.env.WORKOS_CLIENT_ID
    })

    res.redirect(authorizationUrl)
})
// Callback
router.get('/callback', async (req, res) => {
    const { code } = req.query
    if (!code) {
        return res.redirect(`${process.env.FRONTEND_URL}?error=no_code`)
    }

    try {
        const { user, accessToken, refreshToken } = await workos.userManagement.authenticateWithCode({
            code,
            clientId: process.env.WORKOS_CLIENT_ID
        })
        
        let dbUser = await User.findOne({ workosId: user.id })

        if (!dbUser) {
            dbUser = await User.create({
                workosId: user.id,
                email: user.email,
                firstName: user.firstName,
                lastName: user.lastName
            })
        }

        // Store session
        req.session.userId = dbUser._id
        req.session.workosId = user.id
        req.session.accessToken = accessToken
        req.session.refreshToken = refreshToken

        // redirect to frontend
        res.redirect(process.env.FRONTEND_URL)
    } catch(err) {
        console.error(`Auth callback error: ${err}`)
        res.redirect(`${process.env.FRONTEND_URL}?error=auth_failed`)
    }
})
// Logout

router.get('/logout', async (req, res) => {
    const { workosSessionId } = req.session

    if (workosSessionId) {
        try {
            await workos.userManagement.revokeSession({
                sessionId: workosSessionId
            })
        } catch(err) {
            console.error(`Logout error: ${err}`)
        }
    }

    req.session = null
    res.redirect(process.env.FRONTEND_URL)
})

// Get current user
router.get('/me', async (req, res) => {
    console.log(req.session)
    if (!req.session.userId) {
        return res.status(401).json({ message: 'Not authenticated'})
    }

    try {
        const user = await User.findById(req.session.userId)

        if (!user) {
            req.session = null
            return res.status(401).json({ message: 'User not found'})
        }

        res.json({ user })
    } catch(err) {
        console.error(`Get user error: ${err}`)
        res.status(500).json({ message: err.message })
    }
})

module.exports = router