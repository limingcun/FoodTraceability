<template>
  <div class="sensorType">
    <BTitle :title="title"></BTitle>
    <Condition class="mt-30 mb-30" 
      :stateSelect="stateSelect"
      v-on:add="addSensor"
      v-on:search="handleSearch">
    </Condition>
    <div class="tablelist">
        <!-- :default-sort = "{prop: 'name'}" select  select-all-->
      <el-table
        border
        :data="tableStructure"
        @selection-change="handleSelectionChange"
        @cell-click="singleData"
        style="width: 100%">
        <el-table-column
          align="center"
          :resizable="false"
          type="selection"
          label="复选">
        </el-table-column>
        <el-table-column
          align="center"
          :resizable="false"
          type="index"
          label="序号"
          width="70">
        </el-table-column>
        <el-table-column
          align="center"
          :resizable="false"
          prop="name"
          sortable
          label="名称">
        </el-table-column>
        <el-table-column
          align="center"
          :resizable="false"
          prop="description"
          sortable
          label="描述">
          <template scope="scope">
            <div class="miaosu">{{scope.row.description}}</div>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          :resizable="false"
          prop="status"
          sortable
          label="状态">
          <template scope="scope">
            <div class="on-off">
              <input type="checkbox" :id="scope.row.id" :checked="scope.row.status === 1 ? true : false" @change="changeStatus(scope)"/>
              <label :for="scope.row.id">
                <span class="ball"></span>
              </label>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="操作" :resizable="fal" align="center" :width="OptWidth">
          <template scope="scope">
            <div v-for="opt in OptList" class="table-opt-item" @click="optHandler(opt.icon, scope.row)">
              <i :class="['icon', 'icon-' + opt.icon]"></i>
              <span>{{opt.txt}}</span>
            </div>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <Pagination 
      v-on:delSelect="delList"
      v-on:handleCurrentChange="CurrentChange">
    </Pagination>
  </div>
</template>
<script>

  import { mapActions } from 'vuex'

  import BTitle from '../../components/basic/title.vue'
  import Condition from '../../components/basic/condition.vue'
  import Pagination from '../../components/basic/pagination.vue'

  export default {
    name: 'sensorType',
    data () {
      return {
        title: '传感器类型',
        stateSelect: [
          {
            name: '状态选择',
            list: [
              {
                label: '状态1',
                value: 'status1'
              },
              {
                label: '状态2',
                value: 'status2'
              }
            ],
            val: ''
          },
          {
            name: '用户类型',
            list: [
              {
                label: '类型1',
                value: 'usertype1'
              },
              {
                label: '类型2',
                value: 'usertype2'
              },
              {
                label: '类型3',
                value: 'usertype3'
              }
            ],
            val: ''
          }
        ],
        OptList: [
          {
            txt: '编辑',
            icon: 'edit'
          },
          {
            txt: '删除',
            icon: 'del'
          }
        ],
        multipleSelection: []
      }
    },
    props: {
      tableStructure: Array
    },
    components: {
      BTitle,
      Condition,
      Pagination
    },
    computed: {
      OptWidth () {
        return (98 * this.OptList.length-1) + 36;
      }
    },
    methods: {
      addSensor () {
        var msg = {
          title: '新建传感器',
          type: 'add',
          list: [
            {
              tit: '名称',
              name: 'name',
              val: ''
            },
            {
              tit: '描述',
              name: 'description',
              val: ''
            },
          ]
        }
        this.$emit('addSensor',msg);
      },
      editSensor (o) {
        var msg = {
          title: '编辑传感器',
          type: 'edit',
          id: o.id,
          list: [
            {
              tit: '名称',
              name: 'name',
              val: ''
            },
            {
              tit: '描述',
              name: 'description',
              val: ''
            },
          ]
        }
        this.$emit('editSensor',msg);
      },
      delSensor (o) {
        this.$emit('delSensor', o);
      },
      changeStatus (scope) {
        this.$emit('changeStatus', scope.row);
      },
      delList () {
        this.$emit('delList', this.multipleSelection);
      },

      optHandler(optType, obj) {
        switch (optType) {
          case 'edit':
            this.editSensor(obj);
            break;
          case 'del':
            this.delSensor(obj);
            break;
        }
      },

      // 页数改变
      CurrentChange (page) {
        this.$emit('CurrentChange', page)
      },

      handleSearch (msg) {
        this.$emit('handleSearch', msg)
      },

      singleData(row, column, cell, event) {
        // console.log(row)
        // console.log(column)
        // console.log(cell)
        // console.log(event)
        if (column.label != '名称') return;
        this.$emit('singleData', row)
      },

      handleSelectionChange(val) {
        this.multipleSelection = val;
        // console.dir(val);
      },

    }
  }
</script>
<style lang="sass" scoped>
  
  .sensorType {
    width: 88%;
    height: 100%;
    margin: 0 auto;
    /*padding-bottom: 30px;*/
  }
  
</style>
