'use strict';
var debug = require('debug');
var error = debug('contactModel:error');
var log = debug('contactModel:log');

var mongoose = require('mongoose');
require('mongoose-type-url'); // for url types

var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;


var Subscription = new Schema({
    endpoint: {
        type: String,
        required: 'endpoint is required'
    },
    keys: {
        p256dh: {type: String},
        auth: {type: String}
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Subscriptions', Subscription);