/**
 *  
 * 最顶层组件
 * @description 最顶层的组件，但不包含登录、404页面这些组件

 * @author 何翠香
 * @date 2017/02/22
 * 
 */
<template>

    <div id="main">
		<my-header></my-header>
    	<!-- 侧边栏 -->
		<slider-bar
            :show="show"
            :navbars="navbars"
            @hide="show = !show"
        >
        </slider-bar>
        
        <router-view></router-view>

    </div>
</template>

<style lang="sass" scoped>
    @import "../../sass/function";

    #main {
    	width: 100%;
        background:#eef3f7;
        
        position:relative;
        #ff{
            height:200px;
            background:red
        }
        
        
    }
  
</style>

<script>

	
	import {mapState} from 'vuex';
    import {mapMutations} from 'vuex';
    import MyHeader from '../components/public/header.vue';
    import SliderBar from '../components/public/slider-bar.vue';
    import set from '../components/basic/set.vue';
    export default{
        name:'Index',
		data () {
            return {
                
                
            }
        },
        components: {
            MyHeader,
            SliderBar,
            
        },
        methods: {
           

            
            
           
        }
        
    }

</script>
