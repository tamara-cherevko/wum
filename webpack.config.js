const webpack = require("webpack"),
    path = require("path"),
    ExtractTextPlugin = require("extract-text-webpack-plugin"),
    appPath = __dirname,
    frontendPath = path.join(appPath, "resources/frontend"),
    distPath = path.join(appPath, "public/static");

module.exports = {
    cache: true,
    entry: {
        index: path.join(frontendPath, 'app.jsx')
    },
    resolve: {
        root: frontendPath,
        extensions: ['', '.jsx', '.js']
    },
    output: {
        path: distPath,
        filename: '[name].js',
        libraryTarget: 'this',
        library: '[name]'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: [
                    'react-hot',
                    'babel',
                    'eslint'
                ].join('!')
            },

            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract(
                    "style",
                    "css!sass")
            },
            {
                test: /\.(png|jpg|jpeg|svg)$/,
                loader: 'url-loader?limit=8192&name=images/[name].[ext]'
            },
            {
                test: /fonts\/.*\.(eot|ttf|woff|svg|svgz)$/,
                loader: 'file?name=fonts/[name].[ext]'
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("app.css")
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