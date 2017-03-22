const path = require('path');
const env = require('./env.js');
const webpack = require('webpack');
const merge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const projectRoot = path.resolve(__dirname, './');

let config = {

    entry: {
        index: 'jsPath/index.js',
        vendor: [
            'axios',
            'jquery',
            'lodash',
            'velocity-animate',
            'vee-validate',
            'vue',
            'vue-router', 
            'vuex'
        ]
    },
    output: {
        path: projectRoot + '/public/build',
        publicPath: (process.env.NODE_ENV == 'development' ? 'http://localhost:8080/build/' : '/build/'),
        filename: 'js/[name].js',
        chunkFilename: 'js/[id].[name].js'
    },
    module: {
        //加载器配置
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue'
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
            },
            {
                test: /\.json$/,
                loader: 'json'
            },
            {
                test: /iview.src.*?js$/,
                loader: 'babel'
            },
            {
                test: /\.js$/,
                loader: 'babel',
                include: projectRoot,
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader?sourceMap')
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
                loader: 'file-loader'
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?\S*)?$/,
                loader: 'file-loader',
                query: {
                  name: '[name].[ext]?[hash]'
                }
            }
        ]
    },
    // 配置应用层的模块（要被打包的模块）解析
    resolve: {
        // 这样就无需写后缀
        extensions: ['', '.js', '.vue'],
        // 解决当出现 Node.js 模块依赖查找失败的情况
        fallback: [path.join(__dirname, '../node_modules')],
        // 路径别名
        alias: {
            'projectRoot': projectRoot,
            'vue$': 'vue/dist/vue',
            'sass': path.resolve(__dirname, './resources/assets/sass'),
            'jsPath': path.resolve(__dirname, './resources/assets/js'),
            'lang': path.resolve(__dirname, './resources/lang'),
            'components': path.resolve(__dirname, './resources/assets/js/components')
        }
    },
    // 用来配置 loader 模块的解析
    resolveLoader: {
        // 解决当出现 Node.js 模块依赖查找失败的情况
        fallback: [path.join(__dirname, '../node_modules')]
    },

    // vue-loader 配置
    vue: {
        // ... 其他 vue 选项
        loaders: {
            // 用 babel-loader 加载所有没有 "lang" 属性的 <script>
            js: 'babel',
            // 将vue里面的css和sass抽离出来组成一个独立的css文件
            css: ExtractTextPlugin.extract('vue-style-loader', 'css-loader'),
            sass: ExtractTextPlugin.extract('vue-style-loader', 'css-loader!sass-loader')
        }
    },

    // 插件项
    plugins: [
        // 把css抽离成单独的文件
        new ExtractTextPlugin('css/[name].css', { allChunks: true }),
        // 将类库文件进行分开打包,便于缓存
        new webpack.optimize.CommonsChunkPlugin({
          name: 'vendor',
          filename: 'js/vendor-bundle.js'
        }),
        // 定义全局引用
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            'window.$': 'jquery',

            _: 'lodash',
            'window._': 'lodash',

            Velocity: 'velocity-animate',
            'window.Velocity': 'velocity-animate',

            axios: 'axios',
            'window.axios': 'axios',

            Vue: 'vue',
            'window.Vue': 'vue',

            echarts: 'echarts/lib/echarts',
            'window.echarts': 'echarts/lib/echarts'
        })
    ],

    node: {
      fs: "empty"
    }

    
}

if(process.env.NODE_ENV == 'development') {
    config = merge(config, {
        plugins: [
            new webpack.DefinePlugin({
                'process.env.NODE.ENV': "development"
            }),
            new webpack.HotModuleReplacementPlugin()
        ],
        devServer: {
            historyApiFallback: true,
            hot: true,
            inline: true,
            progress: true,
            proxy: {
                '/**': {
                    changeOrigin: true,
                    target: env.app_url,
                    secure: false,
                }
            }
        }
    })
}else {
    config = merge(config, {
        plugins: [
            // minify JS
            new webpack.optimize.UglifyJsPlugin({
              compress: {
                warnings: false
              }
            })
        ]
    })
}

module.exports = config