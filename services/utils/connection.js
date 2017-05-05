/**
 * Created by tvankada on 11/2/16.
 */

import mysql from 'mysql';
import configs from './constants';
import fs from 'fs';


export default function connectToDB() {
    const connection = mysql.createConnection({
        host     : configs.host,
        user     : configs.user,
        password : configs.password,
        /*ssl  : {
            ca : fs.readFileSync(__dirname +'/mysql.cert'),
            rejectUnauthorized: false
        }*/
    });
    return connection;
}


