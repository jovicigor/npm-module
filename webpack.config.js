const { resolve, join } = require('path')
const pkg = require('./package.json')

const config = {
    mode: "production",
    devtool: 'eval',
    entry: resolve(__dirname, 'src/index.ts'),
    output: {
        path: resolve(__dirname, 'dist'),
        filename: 'index.js',
        libraryTarget: "umd",
        library: pkg.libraryConfig.name
    },
    resolve: {
        extensions: ['.ts']
    },
    module: {
        rules: [
            { test: /\.ts$/, loader: 'ts-loader', exclude: /node_modules/ },
        ]
    }
}

module.exports = config