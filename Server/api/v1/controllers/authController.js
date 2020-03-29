'use strict';
var authHandler = require('../handlers/authHandler');

function login(req, res, cb) {
    var userDetails = {
        email: req.body.email,
        password: req.body.password
    }
    authHandler.login(userDetails, function (err, auth) {
        if(err){
            return cb(err);
        }
        res.send(auth);
    });
}

function register(req, res, cb){
    var userDetails = {
        email: req.body.email,
        name: req.body.name,
        password: req.body.password
    }
    authHandler.register(userDetails,function(err,user) {
        if(err){
            return cb(err);
        }
        res.send({user});
    });
}


module.exports = {
    login,
    register
}