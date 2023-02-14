const path = require('path');

module.exports = {
    entry: path.join(__dirname, 'src/person.ts'),
    output: {
        filename: 'module.js',
        path: path.resolve (__dirname, 'public')
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'ts-loader',
            },
        ]
    },
    devtool: 'eval',
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
};