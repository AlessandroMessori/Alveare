var config = {
    entry: './src/App.js',
    output: {
        path: 'www/Bundle',
        filename: 'scripts.js',
        publicPath: 'www/Bundle'
    },
    module: {
        loaders: [
            {
                test: /.js?$/
            }
        ]
    }
};

module.exports = config;
