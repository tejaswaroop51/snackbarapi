/**
 * Created by Tejaswaroop on 10/1/16.
 */

module.exports = {

    hostname : "localhost",
    port: "4000",
    host     : '10.155.209.67',
    user     : 'root',
    password : 'snackers',
    clientToken : "A142BEA700631F47F71A2BAB",
    retailer: "amazon",
    retailerCredentials: {
        "email": "ciscowarriorssnackbar@gmail.com",
        "password": "cisco123"
    },
    billingAddress: {
        "first_name": "Divya",
        "last_name": "Anathanarayanan",
        "address_line1": "5258 Larchwood Drive",
        "address_line2": "",
        "zip_code": "95118",
        "city": "San Jose",
        "state": "CA",
        "country": "US",
        "phone_number": "7742534353"
    },
    shippingAddress: {
        "first_name": "Divya",
        "last_name": "Ananthanarayanan",
        "address_line1": "3550 Cisco Way",
        "address_line2": "",
        "zip_code": "95134",
        "city": "San Jose",
        "state": "CA",
        "country": "US",
        "phone_number": "7742534353"
    },
    paymentMethod: {
        "name_on_card": "Ben Bitdiddle",
        "number": "5555555555554444",
        "security_code": "123",
        "expiration_month": 1,
        "expiration_year": 2020,
        "use_gift": false
    },
    shippingMethod: "cheapest"
};
