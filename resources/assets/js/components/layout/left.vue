/**
 * 公共组件
 * @description 左边组件
 * @author 
 * @date 2017/3/22
 * 
 * 
 */
<template>
  <div class="left">
    <router-link to="test">Go to Cest</router-link>
  </div>
</template>

<script>
  export default {
    name:'left'
  }
</script>

<style lang="sass" scoped>
  .left {
    width:200px;
    height:92%;
    background-color: #293038;
  }
</style>
