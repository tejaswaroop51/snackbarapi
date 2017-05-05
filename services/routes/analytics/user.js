/**
 * Created by Tejaswaroop on 10/1/16.
 */

import express from 'express';
import logger from '../../logger';
import security from '../../utils/securityheaders';
import connectToDB  from '../../utils/connection';
import configs from '../../utils/constants';
import request from 'request';


const User = new express.Router();

security(User);  // Adding security params

const headers = { 'Content-Type': 'application/json' };


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
            console.log(userParams);
            console.log("Database is connected ...");
            connection.query("CALL AddUser(" + userParams + ")", function(err, results, fields) {
                if (err) {
                    res.json({ error: "failToSaveUser"});
                    connection.destroy();
                    console.log("Database connection is safely closed ...");
                } else {
                    res.json({ results });
                    connection.destroy();
                    console.log("Database connection is safely closed ...");
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
                    connection.destroy();
                    console.log("Database connection is safely closed ...");
                } else {
                    res.json({ results });
                    connection.destroy();
                    console.log("Database connection is safely closed ...");
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
                    res.json({ error: "failTogetDataFromServer"});
                    connection.destroy();
                    console.log("Database connection is safely closed ...");
                } else {
                    res.json({ users: results[0] });
                    connection.destroy();
                    console.log("Database connection is safely closed ...");
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
                    connection.destroy();
                    console.log("Database connection is safely closed ...");
                } else {
                    res.json({ results });
                    connection.destroy();
                    console.log("Database connection is safely closed ...");
                }
            });
        }
    });

});

/**
 * Returns cart information as output
 * * **/

User.post('/cartinfo', (req, res) => {
    const connection = connectToDB();
    connection.connect((err) => {
        if(!err) {
            connection.query('USE snackbar');
            console.log("Database is connected ...");
            connection.query("CALL GetCartInfo()", function(err, results, fields) {
                if (err) {
                    console.log(err);
                    res.json({ error: "failTogetDataFromServer"});
                } else {
                    res.json({ cartInfo: results[0] });
                }
            });
        }
    });

});

/**
 * Returns order frequency information as output
 * * **/

User.post('/getOrderFrequency', (req, res) => {
    const connection = connectToDB();
    connection.connect((err) => {
        if(!err) {
            connection.query('USE snackbar');
            console.log("Database is connected ...");
            connection.query("CALL GetOrderFrequency()", function(err, results, fields) {
                if (err) {
                    console.log(err);
                    res.json({ error: "failTogetDataFromServer"});
                    connection.destroy();
                    console.log("Database connection is safely closed ...");
                } else {
                    res.json({ orderFrequency: results[0] });
                    connection.destroy();
                    console.log("Database connection is safely closed ...");
                }
            });
        }
    });

});

/**
 * Accepts orderFrequency information as input
 * Input Type: Json
 * {
 *      "orderFrequency":INTEGER_TYPE,
 * }
 * * **/

User.post('/updateOrderFrequency', (req, res) => {
    const connection = connectToDB();
    connection.connect((err) => {
        if(!err) {
            connection.query('USE snackbar');
            let userParams = "'"+req.body.orderFrequency+"'";
            console.log("Database is connected ...");
            connection.query("CALL UpdateOrderFrequency(" + userParams + ")", function(err, results, fields) {
                if (err) {
                    console.log(err);
                    res.json({ error: "failToSaveUser"});
                    connection.destroy();
                    console.log("Database connection is safely closed ...");
                } else {
                    res.json({ results });
                    connection.destroy();
                    console.log("Database connection is safely closed ...");
                }
            });
        }
    });

});

/**
 * Accepts productId, quantity information as input
 * Input Type: Json
 * {
 *      "productId":STRING,
 *      "quantity":INTEGER
 * }
 * * **/

User.post('/updateQuantity', (req, res) => {
    const connection = connectToDB();
    connection.connect((err) => {
        if(!err) {
            connection.query('USE snackbar');
            let userParams = "'"+req.body.productId+"', '"+req.body.quantity+"'";
            console.log("Database is connected ...");
            connection.query("CALL UpdateQuantityForItem(" + userParams + ")", function(err, results, fields) {
                if (err) {
                    console.log(err);
                    res.json({ error: "failToSaveUser"});
                    connection.destroy();
                    console.log("Database connection is safely closed ...");
                } else {
                    res.json({ results });
                    connection.destroy();
                    console.log("Database connection is safely closed ...");
                }
            });
        }
    });

});

/**
 * Accepts productId, quantity information as input
 * Input Type: Json
 * {
 *      "requestId":STRING,
 *      "status":STRING
 * }
 * * **/

User.post('/updateOrderInfo', (req, res) => {
    const connection = connectToDB();
    connection.connect((err) => {
        if(!err) {
            connection.query('USE snackbar');
            let userParams = "'"+req.body.requestId+"', '"+req.body.status+"'";
            console.log("Database is connected ...");
            connection.query("CALL UpdateOrderInfo(" + userParams + ")", function(err, results, fields) {
                if (err) {
                    console.log(err);
                    res.json({ error: "failToSaveUser"});
                    connection.destroy();
                    console.log("Database connection is safely closed ...");
                } else {
                    res.json({ results });
                    connection.destroy();
                    console.log("Database connection is safely closed ...");
                }
            });
        }
    });

});


/**
 * Returns orders info information as output
 * * **/

User.post('/getOrderInfo', (req, res) => {
    const connection = connectToDB();
    connection.connect((err) => {
        if(!err) {
            connection.query('USE snackbar');
            console.log("Database is connected ...");
            connection.query("CALL GetOrderInfo()", function(err, results, fields) {
                if (err) {
                    console.log(err);
                    res.json({ error: "failTogetDataFromServer"});
                    connection.destroy();
                    console.log("Database connection is safely closed ...");
                } else {
                    res.json({ orders: results[0] });
                    connection.destroy();
                    console.log("Database connection is safely closed ...");
                }
            });
        }
    });

});

/**
 * Submit Order
 * * **/

User.post('/submitOrder', (req, res) => {
    request({
        uri: "http://"+configs.hostname+":"+configs.port+"/snackbar/cartinfo",
        method: "POST",
        timeout: 10000,
        followRedirect: true,
        maxRedirects: 10,
        headers: headers
    }, function(error, response, cartInfo) {
        if(!error) {
            let productInfo = {};
            let products= JSON.parse(cartInfo)['cartInfo'];
            productInfo.client_token = configs.clientToken;
            productInfo.retailer = configs.retailer;
            productInfo.products = products;
            productInfo.retailer_credentials = configs.retailerCredentials;
            productInfo.billing_address = configs.billingAddress;
            productInfo.shipping_address = configs.shippingAddress;
            productInfo.payment_method = configs.paymentMethod;
            productInfo.shipping_method = configs.shippingMethod;
            console.log(JSON.stringify(productInfo));
            request({
                uri: "https://api.zinc.io/v0/order",
                method: "POST",
                timeout: 10000,
                followRedirect: true,
                maxRedirects: 10,
                form: JSON.stringify(productInfo),
                headers: headers
            },  function(error, response, orderStatus) {
                if(!error) {
                    setTimeout(() => {
                        request({
                            uri: "https://api.zinc.io/v0/order/"+JSON.parse(orderStatus).request_id,
                            method: "GET",
                            timeout: 10000,
                            followRedirect: true,
                            maxRedirects: 10,
                            headers: headers
                        },  function(error, response, status) {
                            if(!error) {
                               console.log(status)
                            }
                        });
                    }, 240000);


                }
            });


        }
    });

});




module.exports = User;
