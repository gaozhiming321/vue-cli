import Vue from 'vue'
import Router from 'vue-router'

// import Home from '../components/Home'
// import About from '../components/About'
// import User from '../components/User'

//路由懒加载
const Home = () => import('../components/Home.vue');
const About = () => import('../components/About.vue');
const User = () => import('../components/User.vue');

//通过vue.use(插件) 安装插件
Vue.use(Router)

export default new Router({
  //配置路由和组件之间的应用关系
  routes: [
    {
      path:"/",
      // redirect重定向
      redirect:'/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/about',
      component: About
    },
    {
      path:'/user/:userId',
      component:User
    }
  ],
  // 更改histroy模式
  mode:'history',
  // 统一更改类名
  linkActiveClass:'active'
})

