const config = require('package-config');
const logger = new (require('package-logger'))('API');
const express = require('express');

const app = express();

app.use(require('./middleware/logger'));

// Register your routes and/or middleware here
// app.use('/users', require('./routes/users.js'))
// The route module you require must export an instance
// of an express router, middleware must be async functions

module.exports = app;
