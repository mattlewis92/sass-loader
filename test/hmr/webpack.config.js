'use strict';

var path = require('path');
var webpack = require('webpack');

var pathToSassLoader = path.resolve(__dirname, '../../index.js');

module.exports = {
    entry: path.resolve(__dirname, './entry.js'),
    output: {
        path: path.resolve(__dirname, '../output'),
        filename: 'bundle.hmr.js'
    },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loader: 'style!css!' + pathToSassLoader
            },
            {
                test: /\.css$/,
                loader: 'style!css'
            }
        ]
    },
    debug: true,
    watch: true,
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};
