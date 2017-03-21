<template>
	<div>
		<p>系统设置</p>
		<div class="skin-switch">
			<input type="checkbox"><span>浅色</span>
			<input type="checkbox"><span>深色</span>
		</div>
		<button @click="setClassa()">保存</button>

	</div>
</template>

<script>

	import { mapState } from 'vuex';
    export default {
        name:'set',
        props:{
            
        },
        data (){
            return {
                
            }  
        },
     //    computed: {
	    //     ...mapState([
	    //       // 是否显示新增class
	    //       "setClass"
	    //     ]),
	    // },
     //    methods:{
     //       	setClassa () {
		   //    store.commit('setClass')
		   //  },
     //    }

    }
</script>