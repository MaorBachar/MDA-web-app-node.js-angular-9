'use strict';
var messageHandler = require('../handlers/messageHandler');
var jwt = require('jsonwebtoken');


function createMessage(req, res) {
    console.log(req.body)
    var messageDetails = {
        sms_message: req.body.text,
        message_date: req.body.messagedate
    };
    messageHandler.postMessage(messageDetails, function (err, newMessage) {
        if (err) {   
            return err;
        }
        res.send(newMessage);
    });
}

// function subscribe(req, res, cb) {
//     const subscribeObj = req.body;
//     jwt.verify(req.token, 'secretMdaKey', (err, authData) => {
//         if (err) {
//             res.sendStatus(403);
//         } else {
//             messageHandler.subscribe(subscribeObj, function (newSubscriber) {
//                 res.send(newSubscriber);
//             })
//         }
//     });
// }


function getAllMessages(req, res) {
    jwt.verify(req.token, 'secretMdaKey', (err, authData) => {
        if (err) {
            res.sendStatus(403);
        } else {
            messageHandler.getAllMessages(function (results) {
                res.send(results);
            })
        }
    })
}



module.exports = {
    createMessage,
    getAllMessages,
    // subscribe,
}