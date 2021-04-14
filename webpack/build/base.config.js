//导出一个node的全局path 环境
const path = require('path');
//导出webpack
const webpack = require('webpack');
//自动导入html
const HtmlWebpackPlugin = require('html-webpack-plugin');
//压缩js文件
// const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: "./src/main.js", //入口
    output: { //出口
        // 绝对路径
        path: path.resolve(__dirname, '../dist'),
        filename: "bundle.js", //文件名字
        // publicPath:'dist/'
    },

    module: {
        // 规则
        rules: [
            {
                test: /\.css$/,
                // css-loader只负责css文件加载
                // style-loader负责样式添加到dom
                // 使用多个loader时，是从右向左
                use: ['style-loader', 'css-loader']
            },
            {
                test:/\.less$/,
                use:[{
                   loader:'style-loader' 
                },{
                    loader:'css-loader'
                },{
                    loader:'less-loader'
                }]
            },
            {
                test:/\.(png|jpg|gif|jpeg)$/,
                use:[
                    {
                        loader:'url-loader',
                        options:{
                            //当加载图片小于limit的时候，h会将图片编译成base64
                            //当加载图片大于limit的时候,会使用file-loader模块
                            limit:8192,
                            name:'img/[name].[hash:8].[ext]'
                        }
                    }
                ]
            },
            {
                test:'/\.js$/',
                // exclude:排除
                //include:包含
                exclude:/(node_modules|bower_components)/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:['es2015']
                    }
                }
            },
            {
                test:/\.vue$/,
                use:['vue-loader']
            }
        ]
    },
    resolve:{
        //alias 别名
        alias:{
           'vue$':'vue/dist/vue.esm.js' 
        },
        //extensions 扩展名
        extensions:['.js','.css','.vue']
    },
    plugins:[
       new webpack.BannerPlugin('最终版权归gaozhiming所有'),
       new HtmlWebpackPlugin({
           template:'index.html'
       }),
    //    new UglifyjsWebpackPlugin()
    ],
    // devServer:{//本地服务
    //     contentBase:'./dist',//本地服务器所加载的页面所在的目录
    //     inline:true  //实时刷新
    // }
}



// npm init配置webpack.config.js生成package.json文件