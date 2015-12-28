var path = require('path');
module.exports = {
    entry: './src/main.js',
    output: {
        filename: './dist/bundle.js'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel'
        }]
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
        alias: {
            "component": path.join(__dirname, "./src/component"),
            "middleware": path.join(__dirname, "./src/middleware"),
            "store": path.join(__dirname, "./src/store")
        }
    },
    devtool: 'source-map'
};
