/**
 *  
 * 最顶层组件
 * @description 最顶层的组件，但不包含登录、404页面这些组件

 * @author 
 * @date 2017/02/22
 * 
 */
<template>
  <div id="main">
    <BHeader></BHeader>
    <Left></Left>
    <router-view></router-view>
  </div>
</template>

<script>

    import BHeader from 'components/layout/header.vue';
    import Left from 'components/layout/left.vue';
    
    export default{
      name:'index',
      components: {
        BHeader,
        Left
      },
    //   watch: {
    //     '$route' (to, from) {
    //       // 对路由变化作出响应...
    //       this.currentRoute = to
    //     }
    //   },
		  // data () {
    //     return {
    //       currentRoute: {},
    //     }
    //   },
    //   methods: {}
    }

</script>

<style lang="sass">
  
  @import '../../sass/elementTableReset.scss';

  #main {
    width: 100%;
    height: 100%;
  }

</style>
