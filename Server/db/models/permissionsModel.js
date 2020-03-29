'use strict';
var debug = require('debug');

var mongoose = require('mongoose');
require('mongoose-type-url'); // for url types

var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;


var Permissions = new Schema({
    email: {
        type: String,
        required: 'email is required'
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

module.exports = mongoose.model('Permissions', Permissions);