<template>
<div>
  <div>我是Cpn组件的标题，哈哈哈</div>
  <div>我是Cpn组件的内容，呵呵呵</div>
  <h2>{{ name }}</h2>
</div>
</template>

<script>
export default {
    name:"Cpn",
    data(){
        return {
            name:'我是Cpn组件的name'
        }
    }
}
</script>

<style>

</style>