/**
 * This module routes any URL path that starts with: '.../api/'
 */

'use strict';


const express = require('express');
const router = express.Router();
const messagesRoutes = require('../v1/routes/messageRoutes')
const authRoutes = require('../v1/routes/authRoutes');
router.use('/v1',messagesRoutes);
router.use('/v1',authRoutes);
module.exports = router;