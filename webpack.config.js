const ExtractTextPlugin = require("extract-text-webpack-plugin");
const config = {
    entry: "./www/src/main.js",
    output: {
        path: "./www/dist/",
        filename: "scripts.js",
        publicPath: "./www/dist/",
    },
    devServer: {
        contentBase: './www',
        inline: true,
        hot: true
    },
    module: {
        preLoaders: [
            {
                test: /\.js?$/,
                loaders: ["eslint"],
                exclude: /node_modules/,
            }
        ],
        loaders: [
            {
                test: /.js?$/,
                loader: "babel-loader",
                exclude: /node_modules[\/\\](?!admin-config)/,
                query: {
                    presets: ["es2015"]
                }
            },
            {
                test: /\.scss$/,
                loaders: ["style", "css", "sass"]
            }
        ],
        plugins: [
            new ExtractTextPlugin("./www/dist/styles.css", {
                allChunks: true
            })
        ]
    }
};

module.exports = config;
