var config = {
    entry: './src/main.js',
    preLoaders: [
        {
            test: /\.js?$/,
            loaders: ['eslint']
        }
    ],
    output: {
        path: './dist/',
        filename: 'scripts.js',
        publicPath: '.dist/'
    }
};

module.exports = config;
