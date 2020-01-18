const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');

const devMode = process.env.NODE_ENV !== 'production';

const CSSModuleLoader = {
    loader: 'css-loader',
    options: {
        modules: true,
        importLoaders: 2,
        sourceMap: false,
    }
}
const CSSLoader = {
    loader: 'css-loader',
    options: {
        modules: "global",
        importLoaders: 2,
        sourceMap: false,
    }
}

const PostCSSLoader = {
    loader: 'postcss-loader',
    options: {
        ident: 'postcss',
        sourceMap: false,
        plugins: () => [
            autoprefixer({
                browsers: ['>1%', 'last 4 versions', 'Firefox ESR', 'not ie < 9']
            })
        ]
    }
}

const styleLoader = devMode ? 'style-loader' : MiniCssExtractPlugin.loader;

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
                test: /\.(sa|sc|c)ss$/,
                exclude: /\.module\.(sa|sc|c)ss$/,
                use: [styleLoader, CSSLoader, PostCSSLoader, "sass-loader"]
            },
            {
                test: /\.module\.(sa|sc|c)ss$/,
                use: [styleLoader, CSSModuleLoader, PostCSSLoader, "sass-loader"]
            }
        ]
    },
    devtool: 'cheap-module-eval-source-map'
};
