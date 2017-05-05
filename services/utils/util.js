/**
 * Created by Tejaswaroop on 10/1/16.
 */

import request from 'request';
import zlib from 'zlib';

const gunzipJSON = (response, callback) => {
    const gunzip = zlib.createGunzip();
    let json = '';
    gunzip.on('data', (data) => {
        json += data.toString();
    });
    gunzip.on('end', () => {
        callback(false, JSON.parse(json));
    });
    gunzip.on('error', (err) => {
        callback(true, err);
    });
    response.pipe(gunzip);
};
const getData = (url, callback) => {
    const headers = { 'Accept-Encoding': 'gzip' };
    const response = request(url, headers);
    gunzipJSON(response, callback);
};

export default getData;
