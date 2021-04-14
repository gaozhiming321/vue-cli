//commonJs模块化规范
const {
    add,
    sub,
    mul
} = require('./js/mathUtils.js');
console.log(add(30, 20));
console.log(sub(30, 10));
console.log(mul(10, 10));

//es6模块化规范
import {
    name,
    age,
    height
} from './js/info';
console.log(name);
console.log(age);
console.log(height);

//依赖css文件
require('./css/normal.css');

//依赖less文件
require('./css/special.less');


document.writeln("<h2>你好,李焕英</h2>")


//使用vue进行开发
import Vue from 'vue';
// import App from './vue/app';
import App from './vue/App.vue';

new Vue({ 
    el: "#app",
    template: '<App/>',
    components:{
        App
    }
})

document.writeln('<button>按钮2222222222</button>');
document.writeln('<button>按钮3333333</button>');
