/**
 *  
 * 最顶层组件
 * @description 最顶层的组件，但不包含登录、404页面这些组件
 * @author 苏锐佳
 * @date 2017/02/22
 * 
 */
<template>

    <div id="app">
        <router-view></router-view>
    </div>

</template>

<script>
    export default {
        name:'App'
    }
</script>

<style></style>

