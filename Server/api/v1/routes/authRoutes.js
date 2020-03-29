/**
 * This module routes any URL path that starts with: '.../api/v1/'
 */

'use strict';

const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');


router.route('/login')
    .post(authController.login);

router.route('/register')
    .post(authController.register);
module.exports = router;