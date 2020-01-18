const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const isDevelopment = true;

module.exports = {
    entry: './src/index.js',
    output: {
        //publicPath: '/',
        path: path.join(__dirname, 'dist'),
        filename: 'index.js',
        library: '',
        libraryTarget: 'commonjs'
    },
    /*output: [
        {
            filename: pkg.main,
            format: 'cjs',
        },
        {
            filename: pkg.module,
            format: 'es',
        }
    ],*/
    resolve: {
        modules: [
            'node_modules',
        ],
        alias: {
            i18n: path.resolve(__dirname, "src/i18n/index.js"),
        },
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                loader: 'babel-loader',
                test: /\.js?$/,
                exclude: /(node_modules|bower_components)/
            },
            {
                test: /\.module\.s(a|c)ss$/,
                loader: [
                    isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            sourceMap: isDevelopment
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: isDevelopment
                        }
                    }
                ]
            },
            {
                test: /\.s(a|c)ss$/,
                exclude: /\.module.(s(a|c)ss)$/,
                loader: [
                    isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: isDevelopment
                        }
                    }
                ]
            }
        ]
    },
    devtool: 'cheap-module-eval-source-map'
};
