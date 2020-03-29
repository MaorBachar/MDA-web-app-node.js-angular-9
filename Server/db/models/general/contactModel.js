'use strict';

var debug = require('debug');
var error = debug('contactModel:error');
var log = debug('contactModel:log');

var mongoose = require('mongoose');
require('mongoose-type-url'); // for url types

var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;


var Contact = new Schema(
{
    user: {
        type: ObjectId,
        ref: 'User',
        required: 'user is required'
    },

    full_name: {
        type: String,
        required: 'full_name is required'
    },
    email: {
        type: String,
        required: 'email is required'
    },
    body: {
        type: String,
        required: 'body is required'
    }
},
{ 
    timestamps: true
});



Contact.set('toJSON', {
    transform: function(doc, ret, options) {
        return ret;
    }
});

module.exports = mongoose.model('Contact_Us', Contact);