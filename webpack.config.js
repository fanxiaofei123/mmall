/*
* @Author: fxf
* @Date:   2017-12-10 17:19:23
* @Last Modified by:   fxf
* @Last Modified time: 2017-12-10 22:52:55
*/
var webpack           = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var config = {
     entry:{
        'common' : ['./src/page/common/index.js'],
        'index' : ['./src/page/index/index.js'],
        'login' : ['./src/page/login/index.js']
     } ,
     output: {
         path: './dist',
         filename: 'js/[name].js'
     },
     externals : {
        'jquery' : 'window.jQuery'
     },
     module: {
        loaders : [
            {
                test : /\.css$/, loader : ExtractTextPlugin.extract("style-loader","css-loader")
            }
        ]
     },
     plugins:[
        new webpack.optimize.CommonsChunkPlugin({
            name : 'common',//通用模块
            filename : 'js/base.js'
        }),
        new ExtractTextPlugin('css/[name].css')
     ]
 };

 module.exports = config;