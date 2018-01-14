const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (env, argv) => {
    const isProduction = env === 'production';
    const cssExtract = new ExtractTextPlugin('styles.css');
    return {
        entry: './src/app.js',
        output: {
            path: path.join(__dirname, 'public'),
            filename: 'bundle.js',
        },
        module: {
            rules: [{
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            }, {
                test: /\.s?css$/,
                use: cssExtract.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: {sourceMap: true},
                        }, {
                            loader: 'sass-loader',
                            options: {sourceMap: true},
                        },
                    ],
                }),
            }],
        },
        plugins: [cssExtract],
        devtool: isProduction ? 'source-map' : 'inline-source-map',
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            historyApiFallback: true,
        },
    };
};
