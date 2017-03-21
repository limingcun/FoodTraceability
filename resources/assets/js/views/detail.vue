<template>
	<div class="detail">
		<detail-header></detail-header>
		<drop-down></drop-down>
		<detail-search class="detail-search"></detail-search>
		<detail-table class="detail-table"></detail-table>
		
	</div>
</template>

<script>
	import DetailHeader from '../components/public/detail-header.vue';
	import DropDown from '../components/basic/drop-down.vue';
	import DetailSearch from '../components/public/detail-search.vue';
	import DetailTable from '../components/basic/detail-table.vue';
    export default {
        name:'detail',
        props:{
            
        },
        data (){
            return {
                
            }  
        },
        components:{
        	DetailHeader,
        	DropDown,
        	DetailSearch,
        	DetailTable
        }
     
    }
</script>

<style lang="sass">
	.detail{
		position: relative;
		background:#EEF3F7;
		height:6000px;
	}
	.detail-table{
		position: absolute;
		top: 237px;
		right: 24px;
	}
	.detail-search{
		position:absolute;
		top:175px;
		right:24px;
	}
</style>