<template>
  <div class="condition clearfix">
    <div class="select-box mr-10" v-for="(state,k1) in stateSelect">
      <el-select v-model="state.val" :placeholder="state.name">
        <el-option
          v-for="item in state.list"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </div>
    <div class="search-box">
      <el-input
        placeholder="搜索"
        icon="search"
        v-model.trim="query"
        :on-icon-click="search"
        @keyup.enter="search">
      </el-input>
    </div>
    <el-button type="primary" class="btn" @click="add">新增</el-button>
  </div>
</template>
<script>

  export default {
    name: 'condition',
    props: {
      stateSelect: Array
    },
    data () {
      return {
        query: ''
      }
    },
    methods: {
      add () {
        this.$emit('add')
      },
      search () {
        console.log(1);
        this.$emit('search', this.query);
      }
    }
  }

</script>
<style lang="sass">
  ::-webkit-input-placeholder { /* WebKit browsers */  
    color: #01CDD8;
  }
  :-moz-placeholder { /* Mozilla Firefox 4 to 18 */  
    color: #01CDD8;
  }
  ::-moz-placeholder { /* Mozilla Firefox 19+ */  
    color: #01CDD8;
  } 
  :-ms-input-placeholder { /* Internet Explorer 10+ */  
    color: #01CDD8;
  }
  .condition {
    height: 40px;
    .select-box {
      float: left;
      position: relative;
      .el-select {
        width: 175px;
        height: 40px;
        i {
          color: #00CED8;
        }
        input {
          color: #00CED8;
          background-color: #01365E;
          border-color: #00CED8;
          height: 40px;
          line-height: 40px;
        }
      }
      .el-select:hover .el-input__inner {
        border-color: #02ffff;
      }
      .el-select .el-input__inner:focus {
        border-color: #02ffff;
      }
    }
    .search-box {
      position: relative;
      float: left;
      .el-input {
        .el-icon-search:before {
          content: '';
        }
        .el-input__icon.is-clickable:hover+.el-input__inner {
          border-color: #02ffff;
        }
        input {
          width: 27%;
          min-width: 263px;
          height: 40px;
          line-height: 40px;
          border: 1px solid #01CDD8;
          background-color: #003964;
          color: #01CDD8;
          padding-left: 15px;
        }
        i {
          position: absolute;
          top: 50%;
          right: 15px;
          display: block;
          width: 30px;
          height: 30px;
          margin-top: -15px;
          background: url(/images/search.png) no-repeat center center;
        }
      }
    }
    .btn {
      float: right;
      width: 106px;
      height: 40px;
      background-color: #2EC0E9;
    }
  }
  /*.condition {
    height: 40px;
    .select-box {
      float: left;
      position: relative;
      select {
        width: 175px;
        height: 40px;
        line-height: 40px;
        border: 1px solid #00CED8;
        background-color: #01365E;
        color: #00CED8;
        padding-left: 20px;
      }
      select::-ms-expand { display: none; }
      i {
        position: absolute;
        top: 50%;
        right: 10px;
        display: block;
        width: 0;
        height: 0;
        margin-top: -5px;
        border: 10px solid #00CED8;
        border-color: #00ced8 transparent transparent transparent;
      }
    }
    .search-box {
      position: relative;
      float: left;
      input {
        width: 27%;
        min-width: 263px;
        height: 40px;
        line-height: 40px;
        border: 1px solid #01CDD8;
        background-color: #003964;
        color: #01CDD8;
        padding-left: 15px;
      }
      i {
        position: absolute;
        top: 50%;
        right: 15px;
        display: block;
        width: 30px;
        height: 30px;
        margin-top: -15px;
        background: url(/images/search.png) no-repeat center center;
      }
    }
    .btn {
      float: right;
      width: 106px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      color: #fff;
      background-color: #2EC0E9;
      cursor: pointer;
    }
  }*/
</style>