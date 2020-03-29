'use strict';

const mongoose = require('mongoose'),
    MessageModel = require('../../../db/models/messageModel');
const moment = require('moment');


function postMessage(messageDetails, cb) {
    if (messageDetails && messageDetails.sms_message && messageDetails.message_date) {
        
        var newMessage = new MessageModel(messageDetails);
        var currentTimeStamp = moment().unix();
        if (newMessage.message_date + 600 > currentTimeStamp) {
            newMessage.message_date = moment.unix(newMessage.message_date/1000).format("DD/MM/YYYY HH:mm");
            newMessage.save(function (err,newMessage) {                
                cb(null, 
                    
                    {"payload": {
                        "success": "true",
                        "task": "send",
                        newMessage,
                    }
                }
                );
            })
        }
    } else {
        return cb({
            message: 'sms_message required, message_date required'
        });
    }
}

function getAllMessages(cb) {
    MessageModel.find({}).limit(50).sort({createdAt: -1 }).exec( function (err, messages) {
        if (err) {
            return cb(err);
        }
        cb(messages);
    });
}




module.exports = {
    postMessage,
    getAllMessages,
};