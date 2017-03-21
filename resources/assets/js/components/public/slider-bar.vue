/**
 * 侧边栏组件
 * @description 手机端的侧边栏
 * @author 何翠香
 * @date 2017/2/24
 * 
 * 
 */
<template>        
    <div class="slider-bar">
        <ul class="main-nav">
            <li @click="getNav()">
                <img src="/images/satellite.png" class="nav-img">
                <span>{{constItem[0].FacName}}</span>
                <img src="/images/arrow.png" class="arrow">
            </li>
            <transition name="slide-fade">
                <ul class="minor-nav" v-if="minorShow">
                    <li>1234北京上庄站</li>
                    <li>4567辽宁沈阳站</li>
                    <li>4321广州天河站</li>
                    <li>7654广州白云站</li>
                </ul>
            </transition>
            <li>
                <img src="/images/home.png" class="nav-img">
                <span>基础传感器</span>
                <img src="/images/arrow.png" class="arrow">
            </li>
            <ul class="minor-nav">
                <li>风速</li>
                <li>风向</li>
                <li>雨量</li>
                <li>气温</li>
                <li>湿度</li>
                <li>数字气压</li>
                <li>土温1</li>
                <li>土温2</li>
                <li>土温3</li>
                <li>土湿1</li>
                <li>土湿2</li>
                <li>土湿3</li>
            </ul>
        </ul> 

    </div>   
</template>
<style lang="sass" scoped>
    
    .slider-bar{
        width: 280px;
        height: 1766px;
        background:#4e5f71;
        float:left;
        .main-nav{
            height: 100%;
            li{
                width: 100%;
                height: 72px;
                text-indent: 62px;
                line-height:72px;
                border-bottom:1px solid #324355;
                background: #4e5f71;
                color:#fff;
                position: relative;
                .nav-img{
                    position: absolute;
                    top:22px;
                    left:24px;
                }
                .arrow{
                    position: absolute;
                    top:26px;
                    right:22px;
                }
            }
            li:first-child{background:#2ec0e7}
            .minor-nav{
                width:100%;
                li:first-child{background:#4e5f71}
            }
            .slide-fade-enter-active {
                transition: all .3s linear;
            }
            .slide-fade-leave-active {
                transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
            }
            .slide-fade-enter,.slide-fade-leave-to{
                height:288px;
                opacity: 0;
            }
            
        }
    }
    
   
</style>

<script>

    export default {
        name:'SliderBar',
        props:{

            // 显示或隐藏侧边栏的标志
            show: {
                type: Boolean,
                required: true,
                default: true
            },
        },
        data (){
            return {
                // 用于记住展开那个子菜单的下标
                subNavbarIndex: -1,
                minorShow: true,
                constItem:[
                    {
                        'FacName':''
                    }
                ]

            }  
        },

         mounted () {
           this.getdata();
            
        },
        computed: {},
        methods:{

            // 显示隐藏下拉菜单
            getNav: function(){
                this.minorShow=!this.minorShow;
            },
    
            // 获取侧边栏数据
            getdata(){
                 axios.get('/api/equ').then(response=>{
                    // console.log(response.data);
                    this.$set(this,'constItem',response.data);
                },(response)=>{

                })
            },
           
        },
       
    }
    
</script>

