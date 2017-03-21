/**
 * 详细页搜索组件
 * @author 舒丹彤
 * @date 2017/02/28
 * 
 /

 <template>
   <div class="detail-search">
     <input v-model="input" placeholder="搜索">
     <img src="/images/search2.png">
   </div>
 </template>

 <script>
    export default{
        name:'DetailSearch',
        data(){
            return{
              input:''
            }
        }
    }
 </script>

 <style lang="sass" scoped>
    @import '../../../sass/function';
    @import '/element-ui/lib/theme-default/index.css';
    
    .detail-search{
      width:386px;
      height:38px;
      border:1px solid #9fa6b0;
       ::-webkit-input-placeholder{
          color:#b3b7bb;
        }
      img{
        display:inline-block;
        vertical-align:middle;
      }
    }
    input{
      width:340px;
      height:38px;
      border:none;
      background:none;
      padding-left:10px;
    }
    .el-input__inner::-webkit-input-placeholder {
      color: red;
    }
	.el-select:hover .el-input__inner {
      border-color:red
    }
 </style>