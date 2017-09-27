var webpack = require('webpack');
const path = require('path')

const plugins = [
    new webpack.EnvironmentPlugin([
        'NODE_ENV'
    ])
]

module.exports = {
    entry: {
        main: path.resolve(__dirname, '../src/FileUpload.js')
    },

    resolve: {
        extensions: ['.js']
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: "babel-loader",
                query: {
                    presets: ['react','es2015']
                }
            }
        ]
    },

    externals: [{
        'react': {
            root: 'React',
            commonjs2: 'react',
            commonjs: 'react',
            amd: 'react'
        }
    }],

    plugins: plugins
}
