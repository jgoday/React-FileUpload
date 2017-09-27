const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const baseConfig = require('./base.config.js');

module.exports = merge(baseConfig, {
    output: {
        path: __dirname +'/../dist',
        filename: '[name].min.js',
        library: 'library',
        libraryTarget: 'umd'
    },

    plugins: [
        new UglifyJsPlugin({
            sourceMap: false,
            compress: true,
        })
    ]
});