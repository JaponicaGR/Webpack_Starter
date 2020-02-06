const path = require('path');
const merge = require("webpack-merge");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');



// module.exports = (mode) => {
//
//     if (mode === 'production') {
//         return 1;
//     }
//
//     // development mode
//     return 0
//
// };




module.exports = {
    devtool: 'inline-source-map',
    devServer: {
        writeToDisk: true
    },
    entry: {
        app: './src/index.js',
        print: './src/print.js'
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: "Webpack App 2",
            template: './src/index.html',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: 'html-loader',
                options: {
                    interpolate: true,
                },
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'assets'
                        },
                    }
                ],
            }
        ]
    }
};