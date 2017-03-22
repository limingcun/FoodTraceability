<template>
  <div class="companyLog">
    <BTitle :title="title"></BTitle>
  </div>
</template>
<script>

import BTitle from '../../components/basic/title.vue'
import Condition from '../../components/basic/condition.vue'
import TableList from '../../components/basic/tablelist.vue'
import Pagination from '../../components/basic/pagination.vue'

  export default {
    name: 'companyLog',
    data () {
      return {
        title: '日志管理'
      } 
    },
    props: {},
    components: {
      BTitle,
    }
  }
</script>
<style lang="sass" scoped>
  .mb-16 {
    margin-bottom: 16px;
  }
  .companyLog {
    width: 88%;
    margin: 0 auto;
    padding-bottom: 30px;
  }
</style>