<template>
  <div class="sensorSet">
    <BTitle :title="title"></BTitle>
    <Condition class="mt-30 mb-30" :stateSelect="stateSelect" v-on:addDialog="addSensor"></Condition>
    <!-- <TableList
      :tableStructure="tableStructure"
      v-on:editHandler="editSensor">
    </TableList> -->
    <div class="tablelist">
      <el-table
        border
        :default-sort = "{prop: 'name'}"
        :data="tableStructure"
        style="width: 100%">
        <el-table-column
          align="center"
          :resizable="fal"
          type="selection"
          label="复选">
        </el-table-column>
        <el-table-column
          align="center"
          :resizable="fal"
          type="index"
          label="序号">
        </el-table-column>
        <el-table-column
          align="center"
          :resizable="fal"
          prop="name"
          sortable
          label="名称">
        </el-table-column>
        <el-table-column
          align="center"
          :resizable="fal"
          prop="desc"
          sortable
          label="描述">
          <template scope="scope">
            <div class="miaosu">{{scope.row.desc}}</div>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          :resizable="fal"
          prop="status"
          sortable
          label="状态">
          <template scope="scope">
            <div class="on-off">
              <input type="checkbox" :id="scope.row.status" :checked="scope.row.status === 1 ? true : false" @change="changeStatus(scope)"/>
              <label :for="scope.row.status">
                <span class="ball"></span>
              </label>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="操作" :resizable="fal" align="center">
          <template scope="scope">
            <!-- <TableOption :OptList="opts" :tableData="scope.row" :editFn="editHandler"></TableOption> -->
            <div v-for="opt in OptList" class="table-opt-item" @click="optHandler(opt.icon, scope.row)">
              <i :class="['icon', 'icon-' + opt.icon]"></i>
              <span>{{opt.txt}}</span>
            </div>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <Pagination :paginationPager="tablePager"></Pagination>
  </div>
</template>
<script>

import BTitle from '../../components/basic/title.vue'
import Condition from '../../components/basic/condition.vue'
// import TableList from '../../components/basic/tablelist.vue'
import Pagination from '../../components/basic/pagination.vue'

  export default {
    name: 'sensorSet',
    data () {
      return {
        title: '设置管理',
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
        tableData: [
          {
            id: 1,
            name: '温度',
            desc: '及温度与理想气体的分子动能成正比，以此规则来建立温标。',
            status: 0
          },
          {
            id: 2,
            name: '其他',
            desc: '及温度与理想气体的分子动能成正比，以此规则来建立温标。',
            status: 1
          },
          {
            id: 3,
            name: '温度',
            desc: '及温度与理想气体的分子动能成正比，以此规则来建立温标。及温度与理想气体的分子动能成正比，以此规则来建立温标。及温度与理想气体的分子动能成正比，以此规则来建立温标。',
            status: 1
          }
        ],
        fal: false,
        OptList: [
          {
            txt: '编辑',
            icon: 'edit'
          },
          {
            txt: '删除',
            icon: 'del'
          }
        ]
      }
    },
    props: {
      tableStructure: Array,
      tablePager: Object
    },
    components: {
      BTitle,
      Condition,
      // TableList,
      Pagination
    },
    methods: {
      addSensor (msg) {
        this.$emit('addSensor',msg);
      },
      editSensor (msg) {
        this.$emit('editSensor',msg);
      },
      delSensor () {},
      changeStatus (scope) {
        console.log(scope)
        console.log(scope.row)
        console.log(scope.$index)
        console.log(scope.store)
      },
      editHandler (k) {

        var msg = {
          title: '编辑传感器',
          type: 'edit',
          list: [
            {
              tit: '名称',
              val: this.tableStructure.tabletd[k].name
            },
            {
              tit: '描述',
              val: this.tableStructure.tabletd[k].desc
            },
          ],
          id: this.tableStructure.tabletd[k].id
        }
      },
      optHandler(type, obj) {
        console.log(type)
        console.log(obj)
      }
    }
  }
</script>
<style lang="sass" scoped>
  .sensorSet {
    width: 88%;
    height: 100%;
    margin: 0 auto;
    /*padding-bottom: 30px;*/
  }
</style>