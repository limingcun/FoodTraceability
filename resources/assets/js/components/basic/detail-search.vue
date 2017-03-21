/**
 * 详细页搜索组件
 * @author 舒丹彤
 * @date 2017/02/28
 * 
 /

 <template>
   <div class="detail-search">
     <el-input v-model="input" placeholder="搜索"></el-input>
     <img src="/images/search1.png">
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
      width:428px;
      height:38px;
      border:1px solid #006596;
      
       ::-webkit-input-placeholder{
          color:#9AB5D0;
        }
      img{
        display:inline-block;
        vertical-align:middle;
      }
    }
    .el-input{
      width:378px;
      border:none;
      background:none;
    }
    .el-input__inner::-webkit-input-placeholder {
      color: red;
    }
	.el-select:hover .el-input__inner {
      border-color:red
    }
 </style>