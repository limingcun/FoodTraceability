/**
 * 详细页顶部栏组件
 * @description 详细页顶部栏
 * @author 舒丹彤
 * @date 2017/02/27
 * 
 /

 <template>
   <div class="drop-down">

       <div class="select">
           <span>区域选择:</span>
         <template>
           <el-select v-model="value"  placeholder="站点">
            <el-option
              v-for="item in options"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </template>
       </div>

       <div class="btn">
           <span class="response">传感器:</span>
           <a href="javascript:void(0)" @click="goTo()">MINI</a>
           <template>
           <el-button v-for="tab in btns">{{tab.name}}</el-button>
           </template>
       </div>
      
      <!-- 图表 -->
      <div class="charts">
          <!-- 标题 -->
            <div class="charts-title">
                        <em>监测站948北京上庄站</em>
                        <p class="monitor-title">{{titleList[0].one}}</p>
            </div>
            <!-- 图表一 -->
            <div class="chartOne">
                <div id="chart-one" class="chartstyle"></div>
            </div>
            <!-- 标题 -->
            <div class="charts-title">
                        <em>{{data_echarts[0].title}}</em>
                        <p class="monitor-title">{{titleList[0].two}}</p>
            </div>
            <!-- 图表二-->
            <div class="chartOne">
                <div id="chart-two" class="chartstyle"></div>
            </div>
            <!-- 标题 -->
            <div class="charts-title">
                        <em>{{data_echarts[0].title}}</em>
                        <p class="monitor-title">{{titleList[0].three}}</p>
            </div>
            <!-- 图表三 -->
            <div class="chartOne">
                <div id="chart-three" class="chartstyle"></div>
            </div>
            <!-- 标题 -->
            <div class="charts-title">
                        <em>{{data_echarts[0].title}}</em>
                        <p class="monitor-title">{{titleList[0].four}}</p>
            </div>
            <!-- 图表四 -->
            <div class="chartOne">
                <div id="chart-four" class="chartstyle"></div>
            </div>

            <!-- 标题 -->
            <div class="charts-title">
                        <em>{{data_echarts[0].title}}</em>
                        <p class="monitor-title">{{titleList[0].five}}</p>
            </div>
            <!-- 图表五 -->
            <div class="chartOne">
                <div id="chart-five" class="chartstyle"></div>
            </div>

            <!-- 标题 -->
            <div class="charts-title">
                        <em>{{data_echarts[0].title}}</em>
                        <p class="monitor-title">{{titleList[0].six}}</p>
            </div>
            <!-- 图表六 -->
            <div class="chartOne">
                <div id="chart-six" class="chartstyle"></div>
            </div>
            <!-- 标题 -->
            <div class="charts-title">
                        <em>{{data_echarts[0].title}}</em>
                        <p class="monitor-title">{{titleList[0].seven}}</p>
            </div>
            <!-- 图表七 -->
            <div class="chartOne">
                <div id="chart-seven" class="chartstyle"></div>
            </div>
            <!-- 标题 -->
            <div class="charts-title">
                        <em>{{data_echarts[0].title}}</em>
                        <p class="monitor-title">{{titleList[0].eight}}</p>
            </div>
            <!-- 图表八 -->
            <div id="dd">
                <div class="chartOne">
                <div id="chart-eight" class="chartstyle"></div>
            </div>
            </div>
            
      </div>
   </div>
 </template>

 <script>
    export default{
        name:'DropDown',
        data(){
            return{
                table_list:[{}],
                btns:[{
                   name:'风向',
                },{
                   name:'风速' 
                 },{
                   name:'雨量' 
                 },{
                   name:'气温' 
                 },{
                   name:'湿度' 
                 },{
                   name:'数字气压' 
                 },{
                   name:'土地温度'
                 },{
                   name:'土地湿度'
                 }],
                // 画图标所需数据
                data_echarts: [
                    {
                        title: '监控站948北京上庄站',
                        e12: '风向',
                        e1: '风速',
                        e2: '雨量',
                        e3: '气温',
                        e4: '湿度',
                        e5: '数字气压',
                        e9: '土温1',
                        e10: '土温2',
                        e11: '土温3',
                        e13: '土湿1',
                        e14: '土湿2'
                    },
                ],
                //所需变量
                value:'',
                myChart:null,
                titleList: [
                    {
                        place: '北京',
                        one: '风向',
                        two:'风速',
                        three:'雨量',
                        four:'气温',
                        five:'湿度',
                        six:'数字气压',
                        seven:'土地气温1,土地气温2,土地气温3',
                        eight:'土地湿度1,土地湿度2',
                    }

                ],
                 options: [{
                      value: '选项1',
                      label: '北京'
                    }, {
                      value: '选项2',
                      label: '上海'
                    }, {
                      value: '选项3',
                      label: '广州'
                    }, {
                      value: '选项4',
                      label: '天津'
                    }, {
                      value: '选项5',
                      label: '武汉'
                    }],
                //单组数据
                option_one:{
                  //标题
                  title:{
                    text:'',
                    x:1230,
                    y:50,
                    textStyle:{
                            color:'#7c8185',
                            fontSize:17,
                            fontWeight:'normal'
                        }
                  },
                  // 直角坐标系内绘制图网格
                  grid: {
                      x2:50,
                      y2:77,
                      x:62,
                      y:138,
                  },
                  // 提示框
                  tooltip : {
                      // 触发类型
                      trigger: 'item',
                      backgroundColor: 'rgba(255,255,255,0)',
                      formatter: '<img src="/images/tag2.png" style="position:absolute;top:-73px;left:-41px"><span style="position:absolute;top:-64px;left:-31px">{c0}</span>',
                      // position: function([x, y]) {return [x,y]}
                  },
                  // 图例
                  legend:{
                      data:[''],
                      // 图例显示方式
                      orient:'vertical',
                      x:35,
                      y:20,
                      textStyle:{
                          color:'#7c8185',
                          fontSize:16
                      }

                  },
                  // 横坐标
                  xAxis : [
                      {
                          name: '%',
                          type : 'category',
                          boundaryGap : false,
                          data: [],
                          nameTextStyle:{
                              color:'#d65b1f',
                              fontSize:20
                          },
                          axisLabel:{
                              show: true,
                              textStyle: {
                                  color: '#7d8b94',
                                  fontWeight:'bolder'
                              },
                              formatter:function(str){
                                return str.replace(' ','\n')
                              }
                          },
                          axisLine:{
                              lineStyle:{
                                  width:0,
                              }
                          },
                          axisTick:{
                              show:false
                          },
                          splitLine:{
                              show:false,
                              
                          },
                          
                      }
                  ],
                  // 纵坐标
                  yAxis :[
                      {
                          name: '℃',
                          type : 'value',
                          nameTextStyle:{
                              color:'#d65b1f', 
                              fontSize:20                           
                          },
                          // 坐标轴文本标签
                          axisLabel:{
                              show: true,
                              textStyle: {
                                  color: '#7d8b94',
                                  fontWeight:'bolder'
                              }
                          },
                          // 坐标轴线
                          axisLine:{
                              lineStyle:{
                                  width:0,
                              }
                          },
                          // 坐标轴分割线
                          axisTick:{
                              show:false
                          },
                          splitLine:{
                              lineStyle:{
                                  color:['#f6f6f6'],
                              }
                          }

                      }  
                  ],
                   dataZoom: [
                        {
                            show: true,
                            realtime: true,
                            start: 65,
                            end: 85
                        },
                        {
                            type: 'inside',
                            realtime: true,
                            start: 65,
                            end: 85
                        }
                    ],
                  series :[
                        {
                            name:'',
                            type:'line',
                            smooth:true,
                            // 折线图线条
                            itemStyle: {
                                normal: {
                                    areaStyle: {color: 'rgba(120,200,244,0.7)'},
                                    lineStyle:{width:0}
                                }
                            },
                            // 系列中数据标注内容
                            
                            // symbol:'none',
                            markPoint:{
                                clickable:true,

                            },
                            
                            data: []
                        }

                    ],
                   //
                },
                // 显示三组数据
                option_three: {
                    // 标题
                    title : {
                        text: '',
                        x:1230,
                        y:50,
                        textStyle:{
                            color:'#7c8185',
                            fontSize:17,
                            fontWeight:'normal'
                        }
                    },
                    // 直角坐标系内绘制图网格
                    grid: {
                        x2:50,
                        y2:77,
                        x:62,
                        y:138,
                    },
                    // 提示框
                    tooltip : {
                        // 触发类型
                        trigger: 'item,axis',
                        backgroundColor: 'rgba(255,255,255,0)',
                        formatter: '<img src="/images/tag2.png" style="position:absolute;top:-73px;left:-41px"><span style="position:absolute;top:-64px;left:-31px">{c0}</span>',
                        // position: function([x, y]) {return [x,y]}
                    },
                    // 图例
                    legend:{
                        data:['土温1','土温2','土温3'],
                        // 图例显示方式
                        orient:'vertical',
                        x:35,
                        y:20,
                        textStyle:{
                            color:'#7c8185',
                            fontSize:16
                        }

                    },
                    // 横坐标
                    xAxis : [
                        {
                            name: '%',
                            type : 'category',
                            boundaryGap : false,
                            data: [],
                            // data : ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20'],
                            nameTextStyle:{
                                color:'#d65b1f',
                                fontSize:20
                            },
                            axisLabel:{
                                show: true,
                                textStyle: {
                                    color: '#7d8b94',
                                    fontWeight:'bolder'
                                },
                                formatter:function(str){
                                return str.replace(' ','\n')
                              }
                            },
                            axisLine:{
                                lineStyle:{
                                    width:0,
                                }
                            },
                            axisTick:{
                                show:false
                            },
                            splitLine:{
                                show:false,
                                
                            }
                        }
                    ],
                    // 纵坐标
                    yAxis :[
                        {
                            name: '℃',
                            type : 'value',
                            nameTextStyle:{
                                color:'#d65b1f', 
                                fontSize:20                           
                            },
                            // 坐标轴文本标签
                            axisLabel:{
                                show: true,
                                textStyle: {
                                    color: '#7d8b94',
                                    fontWeight:'bolder'
                                }
                            },
                            // 坐标轴线
                            axisLine:{
                                lineStyle:{
                                    width:0,
                                }
                            },
                            // 坐标轴分割线
                            axisTick:{
                                show:false
                            },
                            splitLine:{
                                lineStyle:{
                                    color:['#f6f6f6'],
                                }
                            }

                        }  
                    ],
                     dataZoom: [
                        {
                            show: true,
                            realtime: true,
                            start: 65,
                            end: 85
                        },
                        {
                            type: 'inside',
                            realtime: true,
                            start: 65,
                            end: 85
                        }
                    ],
                    series :[
                        {
                            name:'土温1',
                            type:'line',
                            smooth:true,
                            // 折线图线条
                            itemStyle: {
                                normal: {
                                    areaStyle: {color: 'rgba(120,200,244,0.7)'},
                                    lineStyle:{width:0}
                                }
                            },
                            // 系列中数据标注内容
                            
                            // symbol:'none',
                            markPoint:{
                                clickable:true,

                            },
                            
                            data: []
                        },
                        {
                            name:'土温2',
                            type:'line',
                            smooth:true,
                            // 折线图线条
                            itemStyle: {
                                normal: {
                                    areaStyle: {color: 'rgba(120,200,244,0.7)'},
                                    lineStyle:{width:0}
                                }
                            },
                            // 系列中数据标注内容
                            
                            // symbol:'none',
                            markPoint:{
                                clickable:true,

                            },
                            
                            data: []
                        },{
                            name:'土温3',
                            type:'line',
                            smooth:true,
                            // 折线图线条
                            itemStyle: {
                                normal: {
                                    areaStyle: {color: 'rgba(120,200,244,0.7)'},
                                    lineStyle:{width:0}
                                }
                            },
                            // 系列中数据标注内容
                            
                            // symbol:'none',
                            markPoint:{
                                clickable:true,

                            },
                            
                            data: []
                        }

                    ]
                   
                },
                // 显示两组数据
                option_second: {
                    // 标题
                    title : {
                        text: '',
                        x:1230,
                        y:50,
                        textStyle:{
                            color:'#7c8185',
                            fontSize:17,
                            fontWeight:'normal'
                        }
                    },
                    // 直角坐标系内绘制图网格
                    grid: {
                        x2:50,
                        y2:77,
                        x:62,
                        y:138,
                    },
                    // 提示框
                    tooltip : {
                        // 触发类型
                        trigger: 'item',
                        backgroundColor: 'rgba(255,255,255,0)',
                        formatter: '<img src="/images/tag2.png" style="position:absolute;top:-73px;left:-41px"><span style="position:absolute;top:-64px;left:-31px">{c0}</span>',
                        // position: function([x, y]) {return [x,y]}
                    },
                    // 图例
                    legend:{
                        data:['土地湿度1','土地湿度2'],
                        // 图例显示方式
                        orient:'vertical',
                        x:35,
                        y:20,
                        textStyle:{
                            color:'#7c8185',
                            fontSize:16
                        }

                    },
                    // 横坐标
                    xAxis : [
                        {
                            name: '%',
                            type : 'category',
                            boundaryGap : false,
                            data: [],
                            nameTextStyle:{
                                color:'#d65b1f',
                                fontSize:20
                            },
                            axisLabel:{
                                show: true,
                                textStyle: {
                                    color: '#7d8b94',
                                    fontWeight:'bolder'
                                },
                                formatter:function(str){
                                  return str.replace(' ','\n')
                                }
                            },
                            axisLine:{
                                lineStyle:{
                                    width:0,
                                }
                            },
                            axisTick:{
                                show:false
                            },
                            splitLine:{
                                show:false,
                                
                            }
                        }
                    ],
                    // 纵坐标
                    yAxis :[
                        {
                            name: '℃',
                            type : 'value',
                            nameTextStyle:{
                                color:'#d65b1f', 
                                fontSize:20                           
                            },
                            // 坐标轴文本标签
                            axisLabel:{
                                show: true,
                                textStyle: {
                                    color: '#7d8b94',
                                    fontWeight:'bolder'
                                }
                            },
                            // 坐标轴线
                            axisLine:{
                                lineStyle:{
                                    width:0,
                                }
                            },
                            // 坐标轴分割线
                            axisTick:{
                                show:false
                            },
                            splitLine:{
                                lineStyle:{
                                    color:['#f6f6f6'],
                                }
                            }
                        }  
                    ],
                    dataZoom: [
                        {
                            show: true,
                            realtime: true,
                            start: 65,
                            end: 85
                        },
                        {
                            type: 'inside',
                            realtime: true,
                            start: 65,
                            end: 85
                        }
                    ],
                    series :[
                        {
                            name:'土地湿度1',
                            type:'line',
                            smooth:true,
                            // 折线图线条
                            itemStyle: {
                                normal: {
                                    areaStyle: {color: 'rgba(120,200,244,0.7)'},
                                    lineStyle:{width:0}
                                }
                            },
                            // 系列中数据标注内容
                            // symbol:'none',
                            markPoint:{
                                clickable:true,

                            }, 
                            data: []
                        },
                        {
                            name:'土地湿度2',
                            type:'line',
                            smooth:true,
                            // 折线图线条
                            itemStyle: {
                                normal: {
                                    areaStyle: {color: 'rgba(120,200,244,0.7)'},
                                    lineStyle:{width:0}
                                }
                            },
                            // 系列中数据标注内容
                            // symbol:'none',
                            markPoint:{
                                clickable:true,

                            }, 
                            data: []
                        }

                    ]
                   
                },
                
            }
        },
       mounted() {
            this.getTable();
        },
      methods: {
            goTo() {
              // var anchor = this.$el.querySelector('#chart-seven')
              // document.body.scrollTop=anchor.offsetTop
              // console.log(document.body.scrollTop)
      },
      getTable(){
                // 获取表格数据
            axios.get('/api/dcurrent', this.dcurrent)
                .then(response => {
                    this.$set(this,'table_list',response.data.data);
                    this.getOnedata('e12','风向','chart-one');
                    this.getOnedata('e1','风速','chart-two');
                    this.getOnedata('e2','雨量','chart-three');
                    this.getOnedata('e3','气温','chart-four');
                    this.getOnedata('e4','湿度','chart-five');
                    this.getOnedata('e5','数字气压','chart-six');
                    this.getTwodata();
                    this.getThreedata();
                }, error => {
                    console.log('error');
            });
      },
      //三个参数
      getTheTableCola(cola,colb,colc) {
          let series_time = []
          let series_optionf = []
          let series_options = []
          let series_optiont = []
          let series = [];
          var a=cola;
          var b=colb;
          var c=colc;
          for(let item of this.table_list) {
              var time = item.time;
              var colf = item[a];
              var cols = item[b];
              var colt = item[c];
              series_time.push(time)
              series_optionf.push(colf)
              series_options.push(cols)
              series_optiont.push(colt)
          }                
          series.push(series_time)
          series.push(series_optionf)
          series.push(series_options)
          series.push(series_optiont)
          return series
      },
      getOnedata(el1,list,selecotr){
          this.option_one.title.text = this.data_echarts[0].title;
          // 默认开始加载的数据
          this.option_one.xAxis[0].data = this.getTheTableCola(el1)[0];
          this.option_one.series[0].data = this.getTheTableCola(el1)[1];
          var arr=[list];
          this.option_one.legend.data=this.option_one.series[0].name=arr;
          // console.log(abb)
          // 基于准备好的dom，初始化echarts实例
          this.myChart = echarts.init(document.getElementById(selecotr));
          // 绘制图表
          this.myChart.setOption(this.option_one); 
      },
      // 土温的图表数据
      getTwodata(){
        this.option_three.title.text = this.data_echarts[0].title;
        this.option_three.xAxis[0].data = this.getTheTableCola('time')[0];
        this.ser = this.getTheTableCola('e9','e10','e11');
        this.option_three.series[0].data = this.ser[1];
        this.option_three.series[1].data = this.ser[2];
        this.option_three.series[2].data = this.ser[3];
        this.myChart = echarts.init(document.getElementById('chart-seven'));
        this.myChart.setOption(this.option_three);
        },
      //土湿的图表数据
      getThreedata(){
        this.option_second.title.text = this.data_echarts[0].title;
        this.option_second.xAxis[0].data = this.getTheTableCola('time')[0];
        this.ser = this.getTheTableCola('e13','e14');
        this.option_second.series[0].data = this.ser[1];
        this.option_second.series[1].data= this.ser[2];
        this.myChart = echarts.init(document.getElementById('chart-eight'));
        this.myChart.setOption(this.option_second);
        },
      },
      
    }
 </script>

 <style lang="sass" scoped>
    @import '../../../sass/function';
    $width:1450px;
    $marginLeft:25px;
    .drop-down{
        width:$width;
        height:115px;
        border-bottom:1px solid #838A94;
        margin-left:$marginLeft;
        padding-top:24px;
        color:#88919C;
    }
    .btn{
        margin-top:16px;
    }
    .response{
        display:inline-block;
        padding-right:15px;
    }
    .el-select{
      width:175px;
      border:1px solid #9fa4ab;
      color:#88919C;
    }

    .el-button{
      width:121px;
      background:none;
      border:1px solid #a2b7c8;
      color:#88919C;
      border-radius:0px;
    }
    .el-button:focus,.el-button:hover{
      color:#435e6c;
      background:#a2b7c8;
      border:transparent;
    }
    .charts{
      width:$width;
      marginLeft:$marginLeft;
      position:absolute;
      top:239px;

    }
    .charts-title{
      margin-top:40px;
    }
    .chartOne{
                width:1452px;
                height:549px;
                background:#fff;
                position:relative;
                .chartstyle{
                    width:1415px;
                    height:551px;
                    margin-top:28px;
                    position:absolute;
                    right:0px;
                    top:-24px
                }
            }
   
 </style>