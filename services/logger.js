/**
 * Created by Tejaswaroop on 10/1/16.
 */

import logger from 'winston';

logger.setLevels({
    debug: 0,
    info: 1,
    silly: 2,
    warn: 3,
    error: 4,
});
logger.addColors({
    debug: 'green',
    info: 'cyan',
    silly: 'magenta',
    warn: 'yellow',
    error: 'red',
});

logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, { level: 'debug', colorize: true, json: false });

module.exports = logger;
