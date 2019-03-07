const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        main: ['./src/index.js']
    },
    mode: 'development',
    output: {
        filename: '[name]-bundle.js',
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/'
    },
    devServer: {
        historyApiFallback: true,
        contentBase: 'dist',
        overlay: true
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: [
                    { loader: 'babel-loader' }
                ],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' }]
            }, {
                test:/\.(s*)css$/,
                use: ['style-loader','css-loader','sass-loader' ]
            }, {
                test: /\.html$/,
                use: [
                    { loader: 'html-loader' }
                ]
            },{
                test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
                loader: "file-loader"
            }

        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html"
        })
    ]
}