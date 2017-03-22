<template>
  <div class="company">
    <SliderBar class="sliderbar" :sliderList="sliderList"></SliderBar>
    <div class="contain">
      <router-view></router-view>
    </div>
    <BDialog class="center"></BDialog>
  </div>
</template>
<script>

  import BHeader from '../../components/layout/header.vue';
  import SliderBar from '../../components/layout/slider-bar.vue';
  import BDialog from '../../components/basic/dialog.vue';

  export default {
    name: 'company',
    components: {
      SliderBar,
      BDialog
    },
    data () {
      return {
        sliderList: {
          name: 'company',
          title: '公司管理',
          list: [
            {
              name: 'company-info',
              to: '/company/company-info',
              title: '公司信息管理'
            },
            {
              name: 'company-user',
              to: '/company/company-user',
              title: '用户管理'
            },
            {
              name: 'company-log',
              to: '/company/company-log',
              title: '日志管理'
            }
          ]
        }
      }
    },
    methods: {}
  }
</script>
<style lang="sass" scoped>
  .company {
    position: relative;
    height: calc(100% - 90px);
    .sliderbar {
      float: left;
      height: 100%;
    }
    .contain {
      width: calc(100% - 280px);
      height: 100%;
      background-color: #00426D;
      margin-left: 280px;
    }
    .center {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: none;
    }
  }
</style>