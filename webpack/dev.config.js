const merge = require('webpack-merge');
const baseConfig = require('./base.config.js');

module.exports = merge(baseConfig, {
    output: {
        path: __dirname + '/../dist',
        filename: '[name].js',
    }
});