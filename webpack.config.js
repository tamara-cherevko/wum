const webpack = require('webpack'),
    path = require('path'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    appPath = __dirname,
    frontendPath = path.join(appPath, 'resources/frontend'),
    distPath = path.join(appPath, 'public/static');

module.exports = {
    cache: true,
    entry: {
        polyfills: path.join(frontendPath, 'polyfills.ts'),
        app: path.join(frontendPath, 'app.ts'),
        vendor: path.join(frontendPath, 'vendor.ts')
    },
    resolve: {
        root: frontendPath,
        extensions: ['', '.ts', '.js']
    },
    output: {
        path: distPath,
        filename: '[name].js',
        libraryTarget: 'this',
        library: '[name]'
    },
    module: {
        loaders: [{
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract('style', 'css!sass')
        }, {
            test: /\.ts$/,
            loaders: ['awesome-typescript-loader', 'angular2-template-loader']
        }, {
            test: /\.html$/,
            loader: 'html'
        }, {
            test: /\.(png|jpg|jpeg|svg)$/,
            loader: 'url-loader?limit=8192&name=images/[name].[ext]'
        }, {
            test: /fonts\/.*\.(eot|ttf|woff|svg|svgz)$/,
            loader: 'file?name=fonts/[name].[ext]'
        }]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor', 'polyfills']
        })
    ],
    devServer: {
        noInfo: false,
        contentBase: distPath,
        stats: {
            chunks: false,
            chunkModules: false,
            timings: true
        }

    }
};