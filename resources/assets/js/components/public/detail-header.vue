/**
 * 详细页顶部栏组件
 * @description 详细页顶部栏
 * @author 舒丹彤
 * @date 2017/02/27
 * 
 /

 <template>
 	<header class="detail-header">
 		<div class="logo">
 			<img src="/images/logo.png" alt="">
 		</div>
 		<div class="top_bar">
 			<ul>
 				<li>
 					<a href="javascript:void(0)"><img src="/images/set2.png">设置</a>
 				</li>
 				<li>
 					<a href="javascript:void(0)"><img src="/images/help2.png">帮助</a>
 				</li>
 				<li>
 					<a href="javascript:void(0)"><img src="/images/delete2.png">退出</a>
 				</li>
 			</ul>
 		</div>
 	</header>
 </template>

 <script>
 	export default{
 		name:'DetailHeader',
 	}
 </script>

 <style lang="sass" scoped>
 	@import '../../../sass/function';
	.detail-header{
		width:1920px;
		height:90px;
		background:#d6dde3;
		position:relative;
		.top_bar{
			display:inline-block;
			position:absolute;
			right:44px;
			margin-top:20px;
			padding-right:44px;
			ul li{
				float:left;
				margin-left:24px;
				a{
					color:#45505d;
					img{
					display:inline-block;
					vertical-align:middle;
					margin-right:5px;
				}
				}
				
			}
		}
	}
	.logo{
		width:177px;
		height:53px;
		padding-left:50px;
		display:inline-block;
		padding-top:18px;
	}

 </style>