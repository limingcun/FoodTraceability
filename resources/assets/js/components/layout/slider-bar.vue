/**
 * 侧边栏
 * @description 侧边栏
 * @author 
 * @date 2017/3/14
 * 
 * 
 */
<template>        
  <div class="slider-bar">
    <dl>
      <dt>
        <i :class="['icon', 'icon-' + sliderList.name]"></i>
        <span>{{sliderList.title}}</span>
      </dt>
      <dd v-for="(item,key) in sliderList.list" :class="{cur: key == 0}" :name="item.name">
        <router-link :to="item.to">{{item.title}}</router-link>
      </dd>
    </dl>
  </div>
</template>


<script>

// sliderList: {
//           name: 'sensor',
//           title: '传感器管理',
//           list: [
//             {
//               name: 'sensorType',
//               to: '/sensor/sensorType',
//               title: '传感器类型'
//             },
//             {
//               name: 'sensorSet',
//               to: '/sensor/sensorSet',
//               title: '设置管理'
//             }
//           ]
//         }

  export default {
    name:'sliderbar',
    props:{
      sliderList: Object
    },
    methods:{},
    watch: {
      '$route' (to, from) {
        // Object {name: "sensorSet", meta: Object, path: "/sensor/sensorSet", hash: "", query: Object…}
        $('dd').removeClass('cur');
        $('dd[name='+ to.name +']').addClass('cur');
      }
    }
  }

</script>

<style lang="sass" scoped>
  
  .icon-home{
    background-image: url(/images/icon_home.png);
  }
  .icon-company {
    background-image: url(/images/icon_company.png);
  }
  .icon-sensor {
    background-image: url(/images/icon_sensor.png);
  }

  .slider-bar{
    width: 280px;
    background-color: #023C62;
    dl {
      height: 100%;
      dt,dd {
        height: 72px;
        line-height: 72px;
        padding-left: 30px;
      }
      dt {
        color: #fff;
        background-color: #3999CC;
        font-size: 14px;
        .icon {
          display: inline-block;
          width: 26px;
          height: 26px;
          background-repeat: no-repeat;
          background-position: center center;
          vertical-align: middle;
        }
      }
      dd {
        padding-left: 56px;
        font-size: 12px;
        a {
          display: block;
          color: #27AFD5;
        }
      }
      dd.cur{
        a {
          color: #fff;
        }
      }
    }
  }

</style>
