/**
 * 详细页表格组件
 * @description 详细页表格栏
 * @author 舒丹彤
 * @date 2017/02/28
 * 
 /

 <template>
   <div class="detail-table">
      <table class="table-inner">
      <thead>
        <tr>
          <th name="time">地区</th>
          <th name="sample-dot">温度</th>
          <th name="data">风速</th>
          <th name="value">风向</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in table_list">
          <td>{{item.time}}</td>
          <td>{{item.e3}}</td>
          <td>{{item.e1}}</td>
          <td>{{item.e12}}</td>
        </tr>

      </tbody>
      </table>
      
   </div>
 </template>

 <script>
    export default{
        name:'DetailTable',
        
        data(){
            return{
                 table_list:[{
                    'el1':'',
                    'el2':'',
                    'el3':'',
                    'el4':''
                 }],
                 tdDate:[
                    {
                      time:'1:2017-7-25 17:15',
                      dot:'北京上庄站',
                      data:'温度',
                      value:'25°C'
                    },{
                      time:'1:2017-7-25 17:15',
                      dot:'北京上庄站',
                      data:'温度',
                      value:'25°C'
                    },{
                      time:'1:2017-7-25 17:15',
                      dot:'北京上庄站',
                      data:'温度',
                      value:'25°C'
                    },{
                      time:'1:2017-7-25 17:15',
                      dot:'北京上庄站',
                      data:'温度',
                      value:'25°C'
                    },{
                      time:'1:2017-7-25 17:15',
                      dot:'北京上庄站',
                      data:'温度',
                      value:'25°C'
                    },{
                      time:'1:2017-7-25 17:15',
                      dot:'北京上庄站',
                      data:'温度',
                      value:'25°C'
                    },{
                      time:'1:2017-7-25 17:15',
                      dot:'北京上庄站',
                      data:'温度',
                      value:'25°C'
                    },{
                      time:'1:2017-7-25 17:15',
                      dot:'北京上庄站',
                      data:'温度',
                      value:'25°C'
                    },{
                      time:'1:2017-7-25 17:15',
                      dot:'北京上庄站',
                      data:'温度',
                      value:'25°C'
                    },{
                      time:'1:2017-7-25 17:15',
                      dot:'北京上庄站',
                      data:'温度',
                      value:'25°C'
                    },{
                      time:'1:2017-7-25 17:15',
                      dot:'北京上庄站',
                      data:'温度',
                      value:'25°C'
                    },{
                      time:'1:2017-7-25 17:15',
                      dot:'北京上庄站',
                      data:'温度',
                      value:'25°C'
                    }
                 ]
            }
        },
        mounted(){
          this.getTable();
        },
        methods:{
          //  scrollHanle(evt) {
          //   console.log(evt)
          // },
          getTable(){
                // 获取表格数据
            axios.get('/api/dcurrent', this.dcurrent)
                .then(response => {
                  console.log(response.data.data)
                    this.$set(this,'table_list',response.data.data);
                }, error => {
                    console.log('error');
            });
      },
        },
        components:{
          VuePerfectScrollbar
        },
    }
 </script>

 <style lang="sass" scoped>
    @import '../../../sass/function';
    
    .scroll-area {
      margin: auto;
      width: 365px;
      height: 300px;
    }
  
    .detail-table{
      width:386px;
      border:1px solid #9fa4a8;
      overflow-y: auto;
      margin-top: 18px;
    }
    
    .table-inner{
      width:100%;
      th[name="time"] {
        width: 16%;
    }
      th[name="sample-dot"] {
          width: 9%;
      }
      th[name="data"] {
          width: 8.5%;
      }
      th[name="value"] {
          width: 8.5%;
      }
      th{
        color:#525b62;
        font-weight:normal;
        background:#eef3f7;
        fontSize:14px;
        border-right:1px solid #9fa4a8;
        border-bottom:1px solid #9fa4a8;
        height:40px;
      }
      th:hover{
        background:#c4e2f4;
      }
      td{
        height:47px;
        text-align:center;
        background:#eef3f7;
        color:#8c939c;
      }
    }
    .el-table--border-th{
      border-right:1px solid #0e6889;
    }
    .el-table--border-td{
      border-right:none;
    }
    .el-table td, .el-table th.is-leaf{
      border-bottom:none;
    }
    .el-table th{
      background:red;
    }
 </style>