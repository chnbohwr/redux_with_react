var path = require('path');
module.exports = {
    context: __dirname + "/src",
    entry: './main.js',
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
            "component": path.join(__dirname, "./src/component")
        }
    },
    devtool: 'source-map'
};
