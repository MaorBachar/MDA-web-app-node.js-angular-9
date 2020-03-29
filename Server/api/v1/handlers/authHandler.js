'use strict';

const mongoose = require('mongoose'),
    UserModel = require('../../../db/models/userModel'),
    PermissionsModel = require('../../../db/models/permissionsModel');
const jwt = require('jsonwebtoken');

function login(userDetails, cb) {
    UserModel.findOne({
        email: userDetails.email
    }, (err, user) => {
        if (err) {
            return cb(err);
        }
        if (user) {
            if (user.password === userDetails.password) {
                PermissionsModel.findOne({
                    email: userDetails.email,
                    isApproved: true
                }, (err, userPermissions) => {
                    if (err) {
                        return err;
                    }
                    if (userPermissions) {
                        jwt.sign({user}, 'secretMdaKey',{ expiresIn: '30d' }, (err, token) => {
                            return cb(null, {token,userPermissions});
                        });
                    } else {
                        return cb({message: 'מנהל עדיין לא אישר את גישתך למערכת'})
                    }
                })
            } else {
                return cb({
                    message: 'הסיסמה לא נכונה'})
            }
        } else {
            return cb({
                message: 'לא נמצא משתמש רשום' });
        }

    })
}


function register(userDetails, cb) {
    UserModel.findOne({
        email: userDetails.email
    }, (err, userExist) => {
        if (!userExist) {
            var newUser = new UserModel(userDetails);
            newUser.save(function (err, user) {
                if (err) {
                    return cb(err);
                }
                return cb(null, user)
            })
        } else {
            return cb({
                message: 'כתובת אימייל קיימת במערכת'
            });

        }
    });

}

module.exports = {
    login,
    register
}