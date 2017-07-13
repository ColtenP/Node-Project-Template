const config = require('package-config');
const logger = new (require('package-logger'))('Server');
const express = require('express');

if(!config.http) {
    logger.error('There are no configuration files to read.')
    logger.error('Please refer to the config README, and then restart.');
    process.exit();
    return;
}

let app = express();

app.use('/api', require('package-api'));
app.use('/', require('package-client'));

app.listen(config.http.port, config.http.hostname, () => {
    logger.info(`Listening on ${config.http.hostname}:${config.http.port}`);
});
