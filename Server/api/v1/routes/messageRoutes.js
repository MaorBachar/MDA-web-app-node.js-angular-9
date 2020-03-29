/**
 * This module routes any URL path that starts with: '.../api/v1/'
 */

'use strict';

const express = require('express');
const router = express.Router();
const messageController = require('../controllers/messageController');

function verifyToken(req, res, next) {
    const bearerHeader = req.headers['authorization'];
    if (bearerHeader !== undefined) {
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        req.token = bearerToken;
        next();
    } else {
        res.sendStatus(404);
    }
}

router.route('/message')
    .post(messageController.createMessage);
router.route('/messages')
    .get(verifyToken,messageController.getAllMessages);
router.route('lastMessage')
    .get();

module.exports = router; 