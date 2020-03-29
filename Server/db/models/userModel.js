'use strict';
var debug = require('debug');
var error = debug('contactModel:error');
var log = debug('contactModel:log');

var mongoose = require('mongoose');
require('mongoose-type-url'); // for url types

var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;


var User = new Schema({
    email: {
        type: String,
        required: 'email is required'
    },
    name: {
        type: String,
        required: 'name is required'
    },
    password: {
        type: String,
        required: 'password is required'
    },
    admin: {
        type: Boolean,
        required: 'is admin is required',
        default: false
    },
    isApproved: {
        type: Boolean,
        required: 'is approved is required',
        default: false

    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Users', User);