const config = require('package-config');
const logger = new (require('package-logger'))('Database');
const MySQL2 = require('mysql2/promise');


try {
    const connection = MySQL2.createConnection(config.database);

    module.exports = connection;
} catch(e) {
    logger.error('Could not establish database connection.');
    logger.error('Check your server, and database configuration and try again');
    throw e;
    process.exit();
}
