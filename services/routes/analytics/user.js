/**
 * Created by Tejaswaroop on 10/1/16.
 */

import express from 'express';
import logger from '../../logger';
import security from '../../utils/securityheaders';
import connectToDB  from '../../utils/connection';
import configs from '../../utils/constants';


const User = new express.Router();

security(User);  // Adding security params


/**
 * Accepts User information as input
 * Input Type: Json
 * {
 *      "name": "",
 *      "paypalInfo" : "",
 *      "email" : "",
 *      "phone" : "",
 *      "isInCharge" : "",
 * }
 * * **/



User.post('/adduser', (req, res) => {
    const connection = connectToDB();
    connection.connect((err) => {
        if(!err) {
            connection.query('USE snackbar');
            let userParams = "'"+req.body.name+"', '"+req.body.paypalInfo+"', '"+req.body.email+"', '"+req.body.phone+"', '"+req.body.isInCharge+"'";
            console.log("Database is connected ...");
            connection.query("CALL AddUser(" + userParams + ")", function(err, results, fields) {
                if (err) {
                    res.json({ error: "failToSaveUser"});
                } else {
                    res.json({ results });
                }
            });
        }
    });
    
});

/**
 * Accepts User information as input
 * Input Type: Json
 * {
 *      "userId":",
 *      "name": "",
 *      "paypalInfo" : "",
 *      "email" : "",
 *      "phone" : "",
 *      "isInCharge" : "",
 * }
 * * **/

User.post('/edituser', (req, res) => {
    const connection = connectToDB();
    connection.connect((err) => {
        if(!err) {
            connection.query('USE snackbar');
            let userParams = "'"+req.body.userId+"', '"+req.body.name+"', '"+req.body.paypalInfo+"', '"+req.body.email+"', '"+req.body.phone+"', '"+req.body.isInCharge+"'";
            console.log("Database is connected ...");
            connection.query("CALL EditUser(" + userParams + ")", function(err, results, fields) {
                if (err) {
                    console.log(err);
                    res.json({ error: "failToSaveUser"});
                } else {
                    res.json({ results });
                }
            });
        }
    });

});

/**
 * Returns User information as output
 * * **/

User.post('/getusers', (req, res) => {
    const connection = connectToDB();
    connection.connect((err) => {
        if(!err) {
            connection.query('USE snackbar');
            console.log("Database is connected ...");
            connection.query("CALL LoadAllUsers()", function(err, results, fields) {
                if (err) {
                    console.log(err);
                    res.json({ error: "failTogetFromServer"});
                } else {
                    res.json({ users: results[0] });
                }
            });
        }
    });

});

/**
 * Accepts UserId information as input
 * Input Type: Json
 * {
 *      "userId":"",
 * }
 * * **/

User.post('/deleteuser', (req, res) => {
    const connection = connectToDB();
    connection.connect((err) => {
        if(!err) {
            connection.query('USE snackbar');
            let userParams = "'"+req.body.userId+"'";
            console.log("Database is connected ...");
            connection.query("CALL DeleteUser(" + userParams + ")", function(err, results, fields) {
                if (err) {
                    console.log(err);
                    res.json({ error: "failToSaveUser"});
                } else {
                    res.json({ results });
                }
            });
        }
    });

});

module.exports = User;
