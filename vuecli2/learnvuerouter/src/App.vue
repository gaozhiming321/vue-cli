<template>
  <div id="app">
    <!-- <h2>我是app组件</h2>
    <router-link to="/home" tag="button" replace>首页</router-link>
    <router-link to="/about" replace >关于</router-link> -->

    <!-- tag 决定渲染成什么标签 router-link默认渲染成a标签 -->
    <!-- 占位，放在上面就在上面显示，放在下边，就在下面显示 -->
    <!-- replace 决定能不能点击左上角的返回history.replaceState()，默认是histroy.pushState() -->
    <!--active-class="active" 更改class类名  -->


  <!-- 通过代码修改页面 -->
    <!-- <button @click="homeClick">首页</button>
    <button @click="aboutClick">关于</button> -->



    <router-link to="/home">首页</router-link>
    <router-link to="/about" replace >关于</router-link>
    <router-link :to="'/user/'+userId" replace >用户</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      userId:'lisi'
    }
  },
  methods:{
    homeClick(){
      console.log("1");
      this.$router.push('/home')
      // this.$router.replace('/home')
    },
    aboutClick(){
      console.log("2");
      this.$router.push('/about')
      // this.$router.replace('/about')
    }
  }
}
</script>

<style>
  /* .router-link-active{
    color:red;
  } */
  .active{
    color:red;
  }
</style>
