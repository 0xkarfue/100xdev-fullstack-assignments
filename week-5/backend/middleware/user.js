//  start writing from here
const express = require('express')
const User = require('../db/index.js')
const jwt = require('jsonwebtoken')

function authMiddleware(req, res, next) {
    const token = req.cookie.token;
    try {
        if (!token) {
            return res.send('login first')
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.user = decoded
        next()
    } catch (error) {
        console.log("error", error)
        res.send(error)
    }
}

module.exports = authMiddleware;