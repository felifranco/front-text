const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public'),
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"]
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },

        ]
    },
    plugins: [
        new Dotenv()
    ],
    devServer: {
        contentBase: path.resolve(__dirname, "./public"),
        watchContentBase: true,
        open: true,
        host: '0.0.0.0',
        disableHostCheck: true,
        port: 3000,
    }
};