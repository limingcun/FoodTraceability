/* @description 最顶层的组件，但不包含登录、404页面这些组件
 * @author 何翠香
 * @date 2017/03/01
 * 
 */
<template>
  <div class="chart">
    <div class="chart-data">
      <div class="chart-tit">
        <div class="chart-tit-l">
          <p>{{currentEqu.FacName}}：<span>{{titleList[currentType]}}</span></p>
        </div>
        <div class="chart-tit-r">
          <el-select v-model="currentType" @change="changeEChart" placeholder="请选择">
            <el-option
              v-for="item in options"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
      </div>
      <div class="chart-content">
        <div id="data-show"></div>
      </div>
    </div>
    <div class="chart-table">
      <div class="chart-table-tit">
        <h2>基本传感器</h2>
        <a href="javascript:;">查看区域的基础数据</a>
      </div>
      <div class="chart-table-content">
        <table>
          <tr>
            <th v-for="tit in tableTit">{{tit}}</th>
          </tr>
          <tr v-for="item in tableData">
            <td>{{item.time}}</td>
            <td>{{item.e12}}</td>
            <td>{{item.e1}}</td>
            <td>{{item.e2}}</td>
            <td>{{item.e3}}</td>
            <td>{{item.e4}}</td>
            <td>{{item.e5}}</td>
            <td>{{item.e9}}</td>
            <td>{{item.e10}}</td>
            <td>{{item.e11}}</td>
            <td>{{item.e13}}</td>
            <td>{{item.e14}}</td>
            <td>{{item.e15}}</td>
          </tr>
        </table>
      </div>
      <div class="chart-pagination">
        <el-pagination
          @current-change="nextPage"
          :current-page="pager.current_page"
          :page-size="pager.per_page"
          layout="total, prev, pager, next, jumper"
          :total="pager.total">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name:'Chart',
    props:{
      currentEqu: Object,
      tableTit: Object,
      datalist: Object,
      tableData: Array,
      pager: Object
    },
    data (){
      return {
        currentType: '0',
        // 需要显示的图表值
        options: [
            {
                value: '0',
                label: '风向'
            },{
                value: '1',
                label: '风速'
            }, {
                value: '2',
                label: '雨量'
            }, {
                value: '3',
                label: '气温'
            }, {
                value: '4',
                label: '湿度'
            }, {
                value: '5',
                label: '数字气压'
            },{
                value: '6',
                label: '土温'
            },{
                value: '7',
                label: '土湿'
            }
        ],
        // datalist: {},
        // 画图标所需数据 所有图标的横坐标默认为time
        data_echarts: [
          {
            e12: '风向'
          },
          {
            e1: '风速'
          },
          {
            e2: '雨量'
          },
          {
            e3: '气温'
          },
          {
            e4: '湿度'
          },
          {
            e5: '数字气压'
          },
          {
            e9: '土温1',
            e10: '土温2',
            e11: '土温3'
          },
          {
            e13: '土湿1',
            e14: '土湿2'
          }
        ],
        // 每个图表的名字
        titleList: [
          '风向',
          '风速',
          '雨量',
          '气温',
          '湿度',
          '数字气压',
          '土地气温1,土地气温2,土地气温3',
          '土地湿度1,土地湿度2'
        ],
        // 记录每次echart图表的数据
        echart_option_list: [],
        tableTitle: ['时间', '风向', '风速', '雨量', '气温', '湿度', '数字气压', '土温1', '土温2', '土温3',  '土湿1', '土湿2', '土湿3'],
        // tableData: [],
        // pager: {},
      }
    },
    mounted() {
      // this.getData();
    },
    methods: {
      getData(){
        axios.get('/api/dcurrent', this.dcurrent)
          .then(response => {
            var _this = this;

            // 表格数据
            _this.tableData = response.data.data;


            // 分页数据
            _this.pager.current_page = response.data.current_page;
            _this.pager.from = response.data.from;
            _this.pager.last_page = response.data.last_page;
            _this.pager.next_page_url = response.data.next_page_url;
            _this.pager.per_page = response.data.per_page;
            _this.pager.prev_page_url = response.data.prev_page_url;
            _this.pager.to = response.data.to;
            _this.pager.total = response.data.total;

            response.data.data.forEach(function (value, index, arr){
              for (var k in value) {
                if (!_this.datalist[k]) {
                  _this.datalist[k] = []
                }
                _this.datalist[k].push(value[k])
              }
            })
            _this.init(_this.datalist)
          }, error => {
            console.log('error');
        });
      },
      // 初始化每个图表的设置
      init (dl) {
        var _this = this;
        _this.data_echarts.forEach(function (value, idx, arr) {
          var option = _this.setEChart();
          for (var j in value) {
            var serie = {
              name:'',
              type:'line',
              smooth:true,
              itemStyle: {
                normal: {
                  areaStyle: {color: 'rgba(120,200,244,0.7)'},
                  lineStyle:{width:0}
                }
              },
              markPoint:{
                clickable:true,
              },
              data: []
            }
            option.title.text = value[j];
            option.legend.data.push(value[j]);
            option.xAxis.data = dl.time;
            serie.name = value[j];
            serie.data = dl[j];
            option.series.push(serie);
          }
          _this.echart_option_list.push(option);
        })
        _this.renderEChart(_this.currentType);
      },
      // 设置echart的option
      setEChart () {
        var opt = {
              title: {
                text: '',
                x:1230,
                y:50,
                textStyle:{
                    color:'#7c8185',
                    fontSize:17,
                    fontWeight:'normal'
                }
              },
              grid: {
                x2:50,
                y2:77,
                x:62,
                y:138,
              },
              tooltip: {
                trigger: 'item', // 显示三组数据时 需要加上 axis
                backgroundColor: 'rgba(255,255,255,0)',
                formatter: '<img src="/images/tag2.png" style="position:absolute;top:-73px;left:-41px"><span style="position:absolute;top:-64px;left:-31px">{c0}</span>',
                // position: function([x, y]) {return [x,y]}
              },
              // legend.data
              legend:{
                data:[''],  // data单个，也可以为多个，多个时显示多种数据对比 data:['土地湿度1','土地湿度2'] data:['土温1','土温2','土温3'],
                orient:'vertical',
                x:35,
                y:20,
                textStyle:{
                  color:'#7c8185',
                  fontSize:16
                }
              },
              xAxis: {
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
              },
              // yAxis.name
              yAxis: {
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
              },
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
              series: []
            }
        return opt;
      },
      // 渲染图表
      // selector为当前选项的图表
      renderEChart (selector) {
        var myChart = echarts.init(document.querySelector('#data-show'))
        myChart.setOption(this.echart_option_list[selector]);
      },
      changeEChart () {
        this.renderEChart(this.currentType);
      },
      nextPage (nextpage) {
        this.$emit('nextPage', nextpage);
      }
    }
  }
</script>

<style lang="sass" scoped>
  .chart{
    .chart-data {
      width: 88%;
      margin:0 auto;
      padding-top: 50px;
      .chart-tit {
        width: 100%;
        height: 55px;
        border-bottom: 1px solid #9FA5A5;
        .chart-tit-l{
          float: left;
          line-height: 35px;
          p {
            font-weight: normal;
            color: #5B626C;
            span {
              color: #A8B4C0;
            }
          }
        }
        .chart-tit-r{
          float: right;
        }
      }
      .chart-content {
        width: 100%;
        min-width: 985px;
        height: 572px;
        #data-show{
          width: 100%;
          height: 100%;
        }
      }
    }
    .chart-table {
      width: 88%;
      margin:0 auto;
      padding-top: 50px;
      .chart-table-tit {
        line-height: 35px;
        border-bottom: 1px solid #9FA5A5;
        h2 {
          font-weight: normal;
          color: #5B626C;
        }
        a {
          color: #A8B4C0;
        }
      }
      .chart-table-content {
        width: 100%;
        padding-top:48px;
        table {
          width: 100%;
          th,td{
            height:64px;
            line-height:63px;
            text-align:center;
          }
          th,td{
            border:1px solid #9fa5a5;
          }
          td{
            color:#3b454e
          }
          th{
            color:#fff;
            background:#405161;
          }
        }
      }
      .chart-pagination {
        width: 80%;
        padding: 40px 0;
        margin: 0 auto;
      }
    }
  }
  .el-pagination {
    width: 300px;
    margin: 0 auto;
  }

</style>