/**
 * Created by Tejaswaroop on 10/1/16.
 */

import { createServer } from 'http';
import express from 'express';
import snackbar from './routes/analytics/user';


const app = express();

/** *******************************************************************
 * Thought of defining https node server but browsers are not accepting
 * local created certificates. Thats why commenting this part of code for
 * creating http node server api end
 * TODO: Need to procure actual SSL Certificates for this part of code
const options = {
    key: fs.readFileSync('./keys/key.pem'),
    cert: fs.readFileSync('./keys/cert.pem'),
};**********************************************************************/

const env = process.argv[2];
const config = require(`./config.${env}.json`);

app.use('/snackbar', snackbar);

createServer(app).listen(config.port, config.hostname, () => (
    console.log('Started!')
));

module.exports = app;
