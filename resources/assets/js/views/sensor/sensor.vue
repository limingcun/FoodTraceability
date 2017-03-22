<template>
  <div class="sensor">
    <SliderBar class="sliderbar" :sliderList="sliderList"></SliderBar>
    <div class="contain">
      <router-view 
        v-on:addSensor="showDialog"
        v-on:editSensor="getEdit"
        v-on:delSensor="showDelDialog"
        v-on:delList="handleDelList"
        v-on:handleSearch="searchData"
        v-on:changeStatus="handleChangeStatus"
        v-on:singleData="handleSingleData"
        v-on:CurrentChange="pageChange"
        :tableStructure="tableStructure">
      </router-view>
    </div>
    <BDialog class="center"
      :isVisible="isShow" 
      :dialogMsg="dialogMsg"
      v-on:closedialog="isShow = false"
      v-on:savedialog="saveDialog">
    </BDialog>
    <DelDialog :delDialogVisible="delDialogVisible" :delDialogMsg="delDialogMsg" v-on:sub="del" v-on:cancel="hideDelDialog"></DelDialog>
  </div>
</template>
<script>
  
  import SliderBar from '../../components/layout/slider-bar.vue';
  import BDialog from '../../components/basic/dialog.vue';
  import DelDialog from '../../components/basic/deldialog.vue';

  export default {
    name: 'sensor',
    components: {
      SliderBar,
      BDialog,
      DelDialog
    },
    data () {
      return {
        isShow: false,
        dialogMsg: {},
        delDialogVisible: false,
        delDialogMsg: {},
        sliderList: {
          name: 'sensor',
          title: '传感器管理',
          list: [
            {
              name: 'sensor-type',
              to: '/sensor/sensor-type',
              title: '传感器类型'
            },
            {
              name: 'sensor-set',
              to: '/sensor/sensor-set',
              title: '设置管理'
            }
          ]
        },
        tableStructure:[],
        isLoading: true,
        error: null
      }
    },
    methods: {
      showDialog (msg) {
        this.dialogMsg = msg;
        this.isShow = true;
      },

      showDelDialog (msg) {
        this.delDialogMsg = msg;
        this.delDialogVisible = true;
      },

      hideDelDialog () {
        this.delDialogMsg = {};
        this.delDialogVisible = false;
      },

      // 根据路由获取数据
      initData () {
        this.tableStructure = [];
        var url = '/api/' + this.$store.state.global.currentRouteName;
        axios.get(url)
        .then(res => {
          if (res.status == 200) {
            this.tableStructure = res.data.data;
            this.$store.dispatch('setPager', res.data);
          }
        },err => {
          this.error = err;
        })
      },

      // 根据page进行翻页
      pageChange (page) {
        var url = '/api/' + this.$store.state.global.currentRouteName;
        axios.get(url , { params: {page: page}})
        .then(res => {
          if (res.status == 200) {
            this.tableStructure = res.data.data;
            this.$store.dispatch('setPager', res.data);
          }
        })
        .catch(err => {
          console.log(err);
        })
      },

      // 保存传感器数据
      saveDialog (msg) {
        switch (msg.type) {
          case 'add':
            this.add(msg);
            break;
          case 'edit':
            this.edit(msg);
        }
      },

      // 新增数据
      add (msg) {
        var url = '/api/' + this.$store.state.global.currentRouteName;
        var fd = new FormData();
        msg.list.forEach((v, i, a) => {
          fd.append(v.name, v.val);
        })
        // var config = {
        //   headers: {'Content-Type' : 'multipart/form-data'}
        // }
        axios.post(url, fd)
        .then(res => {
          // console.log(res)
          if(res.data.id){
            this.$message({
              showClose: true,
              message: '保存成功',
              type: 'success',
              duration: 1000
            });
            this.tableStructure.unshift(res.data);
            this.tableStructure.pop();
            this.isShow = false;
          }
        })
        .catch(err => {
          console.dir(err)
          if(err.response.status === 422) {
            this.$message({
              showClose: true,
              message: err.response.data.name[0],
              type: 'error',
              duration: 2000
            });
          }
          else if (err.response.status === 500) {
            this.$message({
              showClose: true,
              message: '保存失败',
              type: 'error',
              duration: 2000
            });
          }
        })
      },

      // 获取编辑数据
      getEdit (msg) {
        var url = '/api/' + this.$store.state.global.currentRouteName + '/' + msg.id + '/edit';
        // var url = '/api/' + this.$store.state.global.currentRouteName + '/888888' + '/edit';
        axios.get(url)
        .then(res => {
          // console.log(res)
          if(res.status === 200) {
            msg.list.forEach((v, i, a) => {
              v.val = this.$pickObjectValue(res.data, v.name);
            })
            this.showDialog (msg);
          }
        })
        .catch(err => {
          // console.dir(err)
          if (err.response.status === 404) {
            this.$router.push('/404');
          }
        })
      },

      // 保存编辑数据
      edit (msg) {

        // 内容没有变化则不发送请求
        // var flag = false;
        // var tmp = this.msgList2Obj(msg.list);
        // this.tableStructure.forEach((v, i, a) => {
        //   if(v.id === msg.id){
        //     for (let i in v) {
        //       if(v[i] === tmp[i]){
        //         flag = true;
        //       }
        //     }
        //   }
        // })
        // console.log(flag)
        // if (flag) {
        //   this.isShow = false;
        //   return;
        // }

        // console.log(msg)
        var url = '/api/' + this.$store.state.global.currentRouteName + '/' + msg.id;
        var config = {
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        }
        var param = {};
        msg.list.forEach((v, i, a) => {
          param[v.name] = v.val;
        })
        axios.put(url, param)
        .then(res => {
          // console.dir(res)
          if (res.status === 200) {
            this.tableStructure.forEach((v, i, a) => {
              if(v.id === msg.id){
                for(let i in v) {
                  if(!res.data[i]) continue;
                  v[i] = res.data[i];
                }
              }
            })
            this.isShow = false;
          }
        })
        .catch(err => {
          // console.dir(err)
          if (err.response.status === 422) {
            this.$message({
              showClose: true,
              message: err.response.data.name[0],
              type: 'error',
              duration: 2000
            });
          }
          else {
            this.$message({
              showClose: true,
              message: '保存失败',
              type: 'error',
              duration: 2000
            });
          }
        })
      },

      // 单个删除
      del (msg) {
        this.delDialogVisible = false;
        var url = '/api/' + this.$store.state.global.currentRouteName + '/' + msg.id;
        axios.delete(url)
        .then(res => {
          console.dir(res)
          if (res.status === 200) {
            this.initData();
          }
        })
        .catch(err => {
          console.dir(err)
        })
      },

      // 批量删除
      handleDelList (arr) {
        var url = '/api/util/batch-delete/' + this.$store.state.global.currentRouteName;
        var param = {
          ids: []
        }
        arr.forEach((v, i) => {
          param.ids.push(v.id);
        })
        axios.post(url, param)
        .then(res => {
          console.dir(res)
        })
        .catch(err => {
          console.dir(err)
        })
      },

      // 更改状态 switch按钮
      handleChangeStatus (row) {
        // console.log(row)
        // 200+res=>0（更改为停用），200+res=>1（更改为启用），404(id不存在)，500（更改错误）
        var url = '/api/util/status/' + this.$store.state.global.currentRouteName + '/' + row.id;
        axios.get(url)
        .then(res => {
          console.dir(res)
          if (res.status === 200) {
            this.tableStructure.forEach((v, i) => {
              if (v.id === row.id) {
                v.status = res.data.res;
              }
            })
            this.$message({
              showClose: true,
              message: res.data.res === 1 ? '已启用' : '已停用',
              type: 'success',
              duration: 1000
            });
          }
        })
        .catch(err => {
          console.dir(err)
        })
      },

      // 显示单条数据全部信息
      handleSingleData (row) {
        console.log(row);
        var url = '/api/' + this.$store.state.global.currentRouteName + '/' + row.id;
        axios.get(url)
        .then(res => {
          console.dir(res);
          // 显示数据
        })
        .catch(err => {
          console.dir(err)
        })
      },

      // search
      searchData (msg) {
        console.log(msg)
        var url = '/api/' + this.$store.state.global.currentRouteName;
        var params = {
          query_text: msg
        }
        console.log(params)
        axios.get(url,params)
        .then(res => {
          console.log(res)
        },err => {
          console.log(err)
        })
      },

      msgList2Obj (arr) {
        var obj = {}
        arr.forEach((v, i) => {
          obj[v.name] = v.val;
        })
        return obj;
      }
    },
    watch: {
      '$route' (to, from) {
        this.$store.commit('SET_ROUTENAME', {name: to.name})
        this.initData()
      }
    }
  }
</script>
<style lang="sass" scoped>
  .sensor {
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
    }
  }
</style>