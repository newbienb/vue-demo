var path = require('path')
var webpack = require('webpack')
const vuxLoader = require('vux-loader')
process.env.NODE_ENV === 'dev'
const webpackConfig = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist/',
        filename: 'build.js'
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                'vue-style-loader',
                'css-loader'
            ],
        }, {test: /\.less$/, loader: 'vue-style-loader!css-loader!less-loader'}, {
            test: /\.vue$/,
            loader: 'vue-loader',
            options: {
                loaders: {}
                // other vue-loader options go here
            }
        }, {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }, {
            test: /\.(png|jpg|gif|svg)$/,
            loader: 'file-loader',
            options: {
                name: '[name].[ext]?[hash]'
            }
        }, {
            test: /\.(js|vue)$/,
            loader: 'eslint-loader',
            enforce: 'pre',
            include: [path.resolve('src')],
            options: {
                formatter: require('eslint-friendly-formatter')
            }
        }]
    },
    resolve: {
        alias: {
            '@': path.resolve('src')
            // 'vue$': 'vue/dist/vue.esm.js'
        },
        extensions: ['*', '.js', '.vue', '.json']
    },
    externals: {
        // 指定别名
        'vue': 'Vue',
        'vuex': 'Vuex',
        'vue-router': 'VueRouter',
        'fastclick': 'FastClick',
        'vue-resource': 'VueResource',
        'vee-validate': 'VeeValidate',
        'vuex-i18n': 'vuexI18n'
    },
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
        noInfo: true,
        proxy: {
            '/api': {
                target: 'http://localhost:9000',
                pathRewrite: { '^/api': ''},
                changeOrigin: true,
                secure: false,
            },
        }
    },
    performance: {
        hints: false
    },
    devtool: '#eval-source-map'
}

module.exports = vuxLoader.merge(webpackConfig, {
    plugins: ['vux-ui', 'progress-bar', 'duplicate-style', {
        name: 'less-theme',
        path: 'src/vux/style/theme.less'
    }]
})

if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = '#source-map'
    // http://vue-loader.vuejs.org/en/workflow/production.html
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: false
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
    ])
}
