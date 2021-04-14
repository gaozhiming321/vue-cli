
const webpackMerge = require('webpack-merge');
const baseConfig = require('./base.config');

module.exports = webpackMerge(baseConfig,{
    devServer:{//本地服务
        contentBase:'./dist',//本地服务器所加载的页面所在的目录
        inline:true  //实时刷新
    }
})





