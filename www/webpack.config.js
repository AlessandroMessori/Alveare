var config = {
    entry: './src/main.js',
    output: {
        path: './dist/',
        filename: 'scripts.js',
        publicPath: '.dist/'
    },
    module: {
        preLoaders: [
            {
                test: /\.js?$/,
                loaders: ['eslint'],
                exclude: /node_modules/,
            }
        ],
        loaders: [
            {
                test: /.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules[\/\\](?!admin-config)/,
                query: {
                    presets: ['es2015']
                }
            }
        ]
    }
};

module.exports = config;
