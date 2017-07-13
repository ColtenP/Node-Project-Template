const logger = new (require('package-logger'))('API');

module.exports = async function(req, res, next) {
    let start = Date.now();
    res.on('finish', () => {
        let executionTime = Date.now() - start;
        logger.info(`${req.path} - ${executionTime}ms - ` +
            (res._header ? res.statusCode : undefined) +
            ` - ${req.method}`);
    })

    next();
}
