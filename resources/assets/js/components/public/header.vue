/**
 * 顶部栏组件
 * @description 顶部栏
 * @author 何翠香
 * @date 2017/2/23 
 * 
 */

 <template>
    <header class="header">
        <div class="logo">
            <img src="/images/logo.png" alt="">
        </div>
        <div class="header-right">
            <div class="search">
                <el-input v-model="input" placeholder="搜索"></el-input>
                <img src="/images/search2.png" alt="">
            </div>
            <ul class="tip-nav">
                <li>
                    <img src="/images/set2.png" alt="">
                    <router-link to="/set">设置</router-link>
                </li>
                <li>
                    <img src="/images/help2.png" alt="">
                    <a href="#">帮助</a>
                </li>
                <li>
                    <img src="/images/delete2.png" alt="">
                    <a href="#">退出</a>
                </li>
            </ul>
</template>
        </div>
    </header>

<style lang="sass" scoped>
    .header{
        width: 1920px;
        height: 90px;
        .logo,.header-right{
            float:left;
        }
        .logo{
            width:280px;
            height:90px;
            background:#4e5f71;
            img{
                margin-left:51px;
                margin-top:15px;
            }
        }
        .header-right{
            width:1640px;
            height:90px;
            background:#d5dce2;
            .search,.tip-nav{
                float:left
            }
            .search{
                width:411px;
                height:40px;
                margin:27px 719px 0 89px;
                position: relative;
                input{
                    border:3px solid red
                }
                
                img{
                    position: absolute;
                    top: 6px;
                    right: 8px;
                }
            }
            .tip-nav{
                width:318px;
                margin-top:20px;
                li{
                    float:left;
                    margin-right:25px;
                    img{vertical-align: middle;}
                    a{
                        color:#333c45;
                    }
                }
                li:last-child{margin-right:0;}
            }
        }
    }

</style>

<script>

    export default {
        name:'MyHeader',
        props:{
            
        },
        data (){
            return {
                
            }
        },
        computed: {},
        methods:{
            
        }

    }
</script>