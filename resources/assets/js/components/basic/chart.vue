* @description 最顶层的组件，但不包含登录、404页面这些组件
 * @author 何翠香
 * @date 2017/03/01
 * 
 */
<template>
   
        <div class="char-right">
            <div class="monitor-detail">
                <div class="inner-title">
                    <div class="monitor">
                        <em>监测站</em>
                        <span>{{list[0].place}}</span>
                        <span class="monitor-title">{{list[0].type}}</span>
                        <el-select v-model="value" @change="selectOption" placeholder="请选择" class="monitor_choice">
                            <el-option
                              v-for="item in options"
                              :label="item.label"
                              :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                </div>
                <div class="legend">
                    <div id="data-show"></div>
                </div> 
            </div> 

            <div class="basic-sensor">
                <div class="inner-title">
                    <div class="sensor">
                    <em id="befe">基本传感器</em>
                    </div>
                    <div class="monitor-title"><a href="#">查看基本数据</a></div>
                </div>
                <table class="table-inner">
                    <thead>
                        <tr>
                            <th name="time">时间</th>
                            <th name="wind_direction">风向</th>
                            <th name="wind_speed">风速</th>
                            <th name="rain_amount">雨量</th>
                            <th name="temp">气温</th>
                            <th name="humidity">湿度</th>
                            <th name="digital_pressure">数字气压</th>
                            <th name="temp_first">土温1</th>
                            <th name="temp_second">土温2</th>
                            <th name="temp_third">土温3</th>
                            <th name="wet_first">土湿1</th>
                            <th name="wet_second">土湿2</th>
                        </tr>
                    </thead>
                    
                    <tbody>
                        <tr v-for="item in table_list">
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
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colspan="12">
                                <div class="block">
                                    <el-pagination layout="prev, pager, next" :page-count="pages.total" :current-page="pages.current_page">
                                    </el-pagination>
                                </div>
                            </td>
                        </tr>
                    </tfoot>
                </table>

            </div> 
        </div>
</template>
<style lang="sass" scoped>
    .char-right{
        width:1623px;
        position: absolute;
        left:280px;
        top:90px;
        .monitor-detail{
            float:left;
            height:670px;
            width:1453px;
            font-size:17px;
            margin:75px 0 44px 87px;
            .inner-title{
                width:100%;
                height:65px;
                border-bottom:1px solid #9fa5a5;
                .monitor{
                    width:100%;            
                    color: #495058;
                    .monitor-title{
                        color:#838d99;
                        margin-left:20px;
                    }
                    .monitor_choice{
                        float:right
                    }
                }
                
            }
            .legend{
                width:1452px;
                height:551px;
                background:#fff;
                #data-show{
                    width:1452px;
                    height:551px;
                    margin-top:28px;
                }
            }
        }
        .basic-sensor{
            width:1453px;
            height:828px;
            float:right;
            margin-right:83px;
            .inner-title{
                width:100%;
                height:65px;
                border-bottom:1px solid #9fa5a5;
                .sensor{
                    width:100%;
                    em{
                        color:#414755;
                    }
                }
                .monitor-title{
                    width:100%;                       
                    line-height:40px;
                    a{
                        color: #7b848b;
                    }
                }
            }
            .table-inner{
                width:100%;
                margin-top:48px;
                th[name="time"] {
                    width: 13%;
                }
                th[name="wind_direction"] {
                    width: 7%;
                }
                th[name="wind_speed"] {
                    width: 7%;
                }
                th[name="rain_amount"] {
                    width: 7%;
                }
                th[name="temp"] {
                    width: 7%;
                }
                th[name="humidity"] {
                    width: 7%;
                }
                th[name="digital_pressure"] {
                    width: 9.6%;
                }
                th[name="temp_first"] {
                    width: 8.5%;
                }
                th[name="temp_second"] {
                    width: 8.5%;
                }
                th[name="temp_third"] {
                    width: 8.5%;
                }
                th[name="wet_first"] {
                    width: 8.5%;
                }
                th[name="wet_second"] {
                    width: 8.5%;
                }
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
    }
</style>
<script>
    export default {
        name:'Chart',
        props:{
            
        },
        data (){
            return {
                // 存储表格数据
                table_list: [
                    {
                        'time': '',
                        'e1': '',
                        'e2': '',
                        'e3': '',
                        'e4': '',
                        'e5': '',
                        'e9': '',
                        'e10': '',
                        'e11': '',
                        'e12': '',
                        'e13': '',
                        'e14': '',
                        
                    }
                ],
                list: [
                    {
                        place: '北京',
                        type: '空气温度，相对温度'
                    }

                ],
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
                options: [{
                    value: 'e12',
                    label: '风向'
                },{
                    value: 'e1',
                    label: '风速'
                }, {
                    value: 'e2',
                    label: '雨量'
                }, {
                    value: 'e3',
                    label: '气温'
                }, {
                    value: 'e4',
                    label: '湿度'
                }, {
                    value: 'e5',
                    label: '数字气压'
                },{
                    value: 'temp',
                    label: '土温'
                },{
                    value: 'hum',
                    label: '土湿'
                }],
                value: '',
                myChart: null,
                // 单组数据
                option_one: {
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
                                formatter: function (str) {                                   
                                    return str.replace(' ', '\n')
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

                    ]
                   
                },
                // 显示两组数据
                option_three: {
                    // 标题
                    title : {
                        text: '监控站948北京上庄站',
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
                        },
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
                        },{
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

                    ]
                   
                },
                // 显示两组组数据
                option_second: {
                    // 标题
                    title : {
                        text: '监控站948北京上庄站',
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
                                formatter: function (str) {                                   
                                    return str.replace(' ', '\n')
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
                        },
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

                    ]
                   
                },
                table_listp: [
                    {
                        'e1': '',
                        'e2': '',
                        'e3': '',
                        'e4': '',
                        'e5': '',
                        'e9': '',
                        'e10': '',
                        'e11': '',
                        'e12': '',
                        'e13': '',
                        'e14': '',
                        'e15': '', 
                    }
                ],
                pages:{
                    'current-page':'',
                    'total':''
                }
            }
        },
        computed: {},
        components: {
            // MonitorStation,
            // BasicSensor,
        },
        mounted() {
            this.getTable();
        },
        methods: {
            /**
             获取表格数据的方法
            */             
            getTable(){
                
                axios.get('/api/dcurrent', this.dcurrent)
                    .then(response => {
                        this.$set(this,'table_list',response.data.data);
                        // 默认显示
                        this.getFirstTable()
                    }, error => {
                        console.log('error');
                });
                // 获取分页的数据
                axios.get('/api/dcurrent', this.dcurrent)
                    .then(response => {
                        // console.log(response.data.data);
                        this.$set(this,'pages',response.data);
                        console.log(response.data)
                    }, error => {
                        console.log('error');
                });    
            },

            /**
             页面开始加载默认显示数据方法
            */
            getFirstTable(){
                let title = this.data_echarts[0].title;
                let data_legend = this.options[0].label
                let leg_data=[]
                leg_data.push(data_legend)
                let series_x=[]
                this.ser = this.getTableCol('e12')
                this.series_x = this.ser[0];
                this.series_y = this.ser[1];
                this.option_one.title.text = title
                this.option_one.legend.data = leg_data
                this.option_one.series[0].name = data_legend
                this.option_one.xAxis[0].data = this.series_x
                this.option_one.series[0].data = this.series_y
                // 基于准备好的dom，初始化echarts实例
                this.myChart = echarts.init(document.getElementById('data-show'));
                // 绘制图表
                this.myChart.setOption(this.option_one); 
            },

            /**
             图例显示数据调用的方法
            */
            getTableCol(cola,colb,colc) {
                let series_time = []
                let series_optionf = []
                let series_options = []
                let series_optiont = []
                let series = [];
                let val=[]
                if(cola=='e12'){
                     val='风向'  
                }else if(cola=='e1'){
                     val='风速'
                }else if(cola=='e2'){
                     val='雨量'
                }else if(cola=='e3'){
                     val='气温'
                }else if(cola=='e4'){
                     val='湿度'
                }else if(cola=='e5'){
                     val='数字气压'
                }else if(cola=='e13'&&colb=='e14'){
                    val=['土湿1','土湿2']
                }else if(cola=='e9'&&colb=='e10'&&colc=='e11'){
                    val=['土温1','土温2','土温3']
                }
                let a=cola;
                let b=colb;
                let c=colc;
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
                series.push(series_time,series_optionf,series_options,series_optiont,val)
                return series

            },


            /**
             点击图例下拉菜单，显示不同图例
            */
            selectOption (val) {
                let leg_data=[]
                let echartsId=echarts.init(document.getElementById('data-show'))
                if (val=='temp') {
                    this.ser = this.getTableCol('e9','e10','e11');
                    this.series_x = this.ser[0]
                    this.option_three.xAxis[0].data = this.series_x;
                    for(var i=0;i<this.ser.length-2;i++){
                        this.leg_datai = this.ser[4][i]
                        leg_data.push(this.leg_datai)
                        this.option_three.legend.data[i] = leg_data[i]
                        this.option_three.series[i].name = leg_data[i]
                        this.option_three.series[i].data = this.ser[i];
                    }
                    this.myChart = echartsId;
                    this.myChart.setOption(this.option_three);
                }
                else if (val=='hum') {
                    this.ser = this.getTableCol('e13','e14');
                    this.series_x = this.ser[0]
                    this.option_second.xAxis[0].data = this.series_x;
                    for(var i=0;i<this.ser.length-3;i++){
                        this.leg_datai = this.ser[4][i]
                        leg_data.push(this.leg_datai)
                        this.option_second.legend.data[i] = leg_data[i]
                        this.option_second.series[i].name = leg_data[i]
                        this.option_second.series[i].data = this.ser[i];
                    }
                    this.myChart = echartsId;
                    this.myChart.setOption(this.option_second);
                } else{
                    this.ser = this.getTableCol(val)
                    this.series_x = this.getTableCol(val)[0];
                    this.series_y = this.getTableCol(val)[1];
                    this.leg_data = this.getTableCol(val)[4];
                    leg_data.push(this.leg_data)
                    this.option_one.legend.data = leg_data
                    this.option_one.series[0].name = this.leg_data
                    this.option_one.xAxis[0].data = this.series_x;
                    this.option_one.series[0].data = this.series_y;
                    // 点击切换绘制图表
                    this.myChart = echartsId;
                    this.myChart.setOption(this.option_one); 
                }
                
            }
        },

    }
</script>
</script>