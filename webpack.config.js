const ExtractTextPlugin = require("extract-text-webpack-plugin");
const config = {
    entry: "./www/src/main.js",
    output: {
        path: "./www/dist/",
        filename: "scripts.js",
        publicPath: "./dist/",
    },
    devServer: {
        contentBase: './www/',
        inline: true,
        hot: true
    },
    module: {
        preLoaders: [
            {
                test: /\.js?$/,
                loaders: ["eslint"],
                exclude: /Ionic/,
            }
        ],
        loaders: [
            {//SCRIPTS
                test: /.js?$/,
                loader: "babel-loader",
                exclude: /node_modules[\/\\](?!admin-config)/,
                query: {
                    presets: ["es2015"]
                }
            },
            {//STYLES
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('css!sass')
            },
            {//VIEWS
                test: /\.html/,
                loader: 'html-loader'
            },
            {//IMAGES
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: 'file?name=images/[name].[ext]'
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("styles.css")
    ]
};

module.exports = config;
