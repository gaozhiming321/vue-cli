<template>
  <div>
      <h2>我是用户信息</h2>
      <p>我是内容信息，哈哈哈</p>
      <!-- <div> {{ userId }} </div> -->
      <div> {{ $route.params.userId }} </div>
  </div>
</template>

<script>
export default {
    name:"User",
    computed:{
        userId(){
            // $router 获取的是new 出来的那个大的那个对象
            // $route 获取处于活跃的路由对象
            return this.$route.params.userId
        }
    }
}
</script>

<style>

</style>