const fs = require('fs');
const path = require('path');

// Exit the application if the config directory is not present.
if(!fs.existsSync(path.join(__dirname, 'config'))) {
    return;
}

// Export all the available configs for use in the application.
module.exports = {
    logger: require('./config/logger'),
    env: require('./config/env'),
    http: require('./config/http')
}
