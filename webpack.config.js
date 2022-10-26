const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const path = require('path');

module.exports = {
    entry: {
        main: './src/js/render-catalog.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist'
    },
    devServer: {
        overlay: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.(?:|gif|png|jpg|jpeg|svg)$/i,
                loader: "file-loader",
                options: {
                    name: 'img/[name].[ext]'
                }
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css",
        }),
        new HTMLWebpackPlugin({
            template: './src/catalog.html',
            filename: 'index.html'
        }),
        new CleanWebpackPlugin()
    ],
}