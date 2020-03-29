'use strict';

var debug = require('debug');
var error = debug('reportModel:error');
var log = debug('reportModel:log');

var mongoose = require('mongoose');
require('mongoose-type-url'); // for url types

var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;


var Report = new Schema(
{
    reporter : {
        type: ObjectId,
        ref: 'User',
        required: 'reporter is required'
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



Report.set('toJSON', {
    transform: function(doc, ret, options) {
        return ret;
    }
});

module.exports = mongoose.model('Report', Report);