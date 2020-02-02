const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: "main.bundle.js",
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
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
                            publicPath: 'assets',
                            outputPath: 'images'
                        },
                    }
                ],
            }
        ]
    },
    mode: 'development'
};