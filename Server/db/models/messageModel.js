'use strict';
var debug = require('debug');
var error = debug('contactModel:error');
var log = debug('contactModel:log');

var mongoose = require('mongoose');
require('mongoose-type-url'); // for url types

var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;



var Message = new Schema({
    sms_message: {
        type: String,
        required: 'sms_message is required'
    },
    message_date: {
        type: String,
        required: 'sms_date is required'
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Messages', Message);