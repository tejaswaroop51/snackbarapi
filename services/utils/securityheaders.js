/**
 * Created by Tejaswaroop on 10/1/16.
 */

import bodyParser from 'body-parser';
import helmet from 'helmet';
import session from 'express-session';
import hpp from 'hpp';
import cors from 'cors';
import logger from '../logger';


export default function setSecurityHeaders(module) {
    module.use((req, res, next) => {
        logger.info('Time: ', Date.now());
        next();
    });
    module.use(bodyParser.json()); // support json encoded bodies
    module.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
    module.use(session({
        secret: '070e528113d96bcec82e2ee724b0c540c3dcbd0b633c5a6805edc67d6690fe1d',  // TODO: need to change this soon
        resave: false,
        saveUninitialized: true,
    }));

    // Enabling CORS
    const corsHeaders = {
        origin: '*',
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        preflightContinue: true,
    };
    module.use(cors(corsHeaders));

    // Adding additional security over SSL
    module.use(hpp());
    module.use(helmet.noCache());
    module.use(helmet.contentSecurityPolicy({
        // Specify directives as normal.
        directives: {
            defaultSrc: ['self'],
            scriptSrc: ['self', 'unsafe-inline'],
            styleSrc: ['self'],
            imgSrc: ['self'],
            reportUri: '',
            objectSrc: [], // An empty array allows nothing through
        },

        // Set to true if you only want browsers to report errors, not block them
        reportOnly: false,

        // Set to true if you want to blindly set all headers: Content-Security-Policy,
        // X-WebKit-CSP, and X-Content-Security-Policy.
        setAllHeaders: false,

        // Set to true if you want to disable CSP on Android where it can be buggy.
        disableAndroid: false,

        // Set to false if you want to completely disable any user-agent sniffing.
        // This may make the headers less compatible but it will be much faster.
        // This defaults to `true`.
        browserSniff: true,
    }));
    module.use(helmet.xssFilter());
    module.use(helmet.xssFilter({ setOnOldIE: true }));
    module.use(helmet.frameguard({ action: 'deny' }));
    /** ************************************************************
     * Unable to force this as I am not using https protocol
     * for api end
     * TODO: Need to enable this once I use https end for additional
     * security
    module.use(helmet.hsts({
        maxAge: 7776000000000000000000000,
        includeSubdomains: true,
        force: true,
    }));
    *****************************************************************/
    module.use(helmet.referrerPolicy());
    module.use(helmet.hidePoweredBy());
    module.use(helmet.ieNoOpen());
    module.use(helmet.noSniff());
    module.use(helmet.dnsPrefetchControl());
}
