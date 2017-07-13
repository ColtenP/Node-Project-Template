const express = require('express');
const webpackConfig = require('./webpack/webpack.dev.conf');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

let app = express();
let compiler = webpack(webpackConfig);

let devMiddleware = webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
    stats: { colors: true }
});

let hotMiddleware = webpackHotMiddleware(compiler, {
    log: () => {}
});

compiler.plugin('compilation', function(compilation) {
    compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
        hotMiddleware.publish({ action: 'reload' })
        cb()
    })
})

app.use(require('connect-history-api-fallback')());
app.use(devMiddleware);
app.use(hotMiddleware);

module.exports = app;
