<template>
  <div class="pagination">
    <div class="pagination-opt">
      <el-checkbox @click="selectAll"></el-checkbox>
      <el-button type="primary" class="btn" @click="delSelect">删除</el-button>
    </div>
    <div class="pagination-pager">
      <el-pagination
        class="pages-box"
        @current-change="handleCurrentChange"
        :current-page="paginationPager.current_page"
        :page-size="paginationPager.per_page"
        layout="prev, pager, next"
        :total="paginationPager.total">
      </el-pagination>
      <el-input class="inp-page" 
        v-model="jumpPage"></el-input>
      <el-button type="primary" class="btn" @click="jumpTo">go</el-button>
    </div>
  </div>
</template>
<script>

  import { mapGetters } from 'vuex'

  export default {
    name: 'pagination',
    computed: mapGetters({
      paginationPager: 'tablePager'
    }),
    data () {
      return {
        jumpPage: ' '
      }
    },
    methods: {
      handleCurrentChange(val) {
        // console.log(`当前页: ${val}`);
        this.$emit('handleCurrentChange', val);
      },
      // 页面跳转
      jumpTo () {
        this.paginationPager.current_page = parseInt(this.jumpPage);
      },
      // 选择全部
      selectAll () {

      },
      // 删除选中的
      delSelect () {
        this.$emit('delSelect');
      }
    }
  }

</script>
<style lang="sass">
  .pagination {
    width: 100%;
    height: 62px;
    line-height: 62px;
    background-color: #1A688E;
    .pagination-opt{
      float: left;
      padding-left: 40px;
      .btn {
        width: 80px;
        height: 32px;
        background-color: #2EC0E9;
        margin-left: 14px;
      }
    }
    .pagination-pager{
      float: right;
      padding-right: 10px;
      padding-top: 12px;
      .pages-box {
        float: left;
        height: 38px;
        margin-right: 23px;
        button {
          width: 38px;
          height: 38px;
          background-color: #1A6C92;
          color: #09B9EB;
          border: 1px solid #2EC0E7;
        }
        .el-pager {
          height: 38px;
          li {
            width: 38px;
            height: 38px;
            line-height: 38px;
            color: #09B9EB;
            background-color: #1A6C92;
            border: 1px solid #2EC0E7;
          }
          li.active {
            background-color: #0099CB;
            color: #fff;
          }
        }
      }
      .inp-page {
        float: left;
        width: 38px;
        height: 38px;
        margin-right: 11px;
        text-align: center;
        margin-top: 2px;
        .el-input__inner {
          border: 1px solid #2EC0E9;
          background-color: #1A668A;
          color: #0ABAEC;
        }
      }
      .btn{
        float: left;
        width: 38px;
        height: 38px;
        background-color: #2EC0E7;
        padding: 0;
        margin-top: 2px;
      }
    }
  }
  /*.pagination {
    width: 100%;
    height: 62px;
    line-height: 62px;
    background-color: #1A688E;
    .pagination-opt{
      float: left;
      padding-left: 40px;
      input {
        position: relative;
        float: left;
        border: 0;
        background-color: #62CDED;
        border-radius: 1px;
        width: 16px;
        height: 16px;
        margin-top: 23px;
        color: #fff;
      }
      input[type=checkbox]:checked::after{
        content:'√';
        position: absolute;
        width: 16px;
        height: 16px;
        line-height: 16px;
        text-align: center;
        top: 50%;
        left: 50%;
        margin-left: -8px;
        margin-top: -8px;
      }
      .btn {
        display: inline-block;
        width: 80px;
        height: 32px;
        color: #fff;
        text-align: center;
        line-height: 32px;
        background-color: #2EC0E9;
        margin-left: 14px;
        cursor: pointer;
      }
    }
    .pagination-pager{
      float: right;
      padding-right: 10px;
      padding-top: 12px;
      ul {
        float: left;
        height: 38px;
        background-color: #1A6C92;
        margin-right: 23px;
        li {
          float: left;
          width: 38px;
          height: 38px;
          border: 1px solid #2EC0E7;
          color: #09B9EB;
          text-align: center;
          line-height: 38px;
          cursor: pointer;
          font-size: 14px;
          margin-left: -1px;
        }
        li.prev {
          margin-left: 0;
          border-top-left-radius: 3px;
          border-bottom-left-radius: 3px;
        }
        li.next {
          border-top-right-radius: 3px;
          border-bottom-right-radius: 3px;
        }
        li.cur {
          background-color: #0099CB;
          color: #fff;
        }
      }
      input {
        float: left;
        width: 38px;
        height: 38px;
        border: 1px solid #2EC0E9;
        background-color: #1A668A;
        margin-right: 11px;
        text-align: center;
        color: #0ABAEC;
      }
      .btn{
        float: left;
        display: inline-block;
        width: 38px;
        height: 38px;
        background-color: #2EC0E7;
        color: #fff;
        cursor: pointer;
        text-align: center;
        line-height: 38px;
      }
    }
  }*/
</style>