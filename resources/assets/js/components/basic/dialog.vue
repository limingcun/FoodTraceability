<template>
  <transition name="dialogfade">
    <div class="dialog" v-show="isVisible">
      <el-form :model="dialogMsg" ref="dialogMsg">
        <i class="close el-icon-close" @click="closedialog('dialogMsg')"></i>
        <div class="dialog-title">
          <h1>{{dialogMsg.title}}</h1>
        </div>
        <div class="dialog-content">
          <li>
          <!-- :rules="{required: true, message: item.tit + '不能为空', trigger: 'blur'}" -->
            <el-form-item
              v-for="(item,ky) in dialogMsg.list"
              :label="item.tit + '：'"
              :prop="'list.' + ky + '.val'"
              :key="ky"
              :rules="{validator: validatePass, trigger: 'blur'}"
            >
              <!-- <span>{{item.tit + '：'}}</span> -->
              <el-input
                class="dialog-textarea"
                @change="disable=false"
                type="textarea"
                :rows="ky == dialogMsg.list.length-1 ? 5 : 2"
                resize="none"
                placeholder="请输入内容"
                v-model="item.val">
              </el-input>
            </el-form-item>
          </li>
        </div>
        <div class="dialog-opt">
          <el-form-item>
            <el-button type="primary" class="btn submit" @click="savedialog('dialogMsg')" :disabled="disable">保存</el-button>
            <el-button class="btn reset" @click="resetForm('dialogMsg')">重置</el-button>
          </el-form-item>
        </div>
      </el-form>
    </div>
  </transition>
</template>
<script>

  // var msg = {
  //         title: '新建传感器',
  //         type: 'add',
  //         id
  //         list: [
  //           {
  //             tit: '名称',
  //             val: ''
  //           },
  //           {
  //             tit: '描述',
  //             val: ''
  //           },
  //         ],
  //       }

  export default {
    name: 'dialog',
    props: {
      isVisible: Boolean,
      dialogMsg: Object
    },
    data () {
      return {
        disable: true
      }
    },
    methods: {
      closedialog (formName) {
        this.disable = true;
        // this.$refs[formName].resetFields();
        this.$emit('closedialog');
      },
      savedialog (formName) {
        this.disable = true;
        this.$refs[formName].validate((valid) => {
          if (valid) {
            // alert('submit!');
            this.$emit('savedialog', this.dialogMsg);
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.disable = true;
        // console.dir(this.$refs[formName])
        this.$refs[formName].resetFields();
      },
      validatePass (rule, value, callback) {
        var str = rule.fullField;
        var idx = str.substr(str.indexOf('.') + 1, 1);
        if ($.trim(value) == '' || value == null) {
          callback(new Error(this.dialogMsg.list[idx].tit + '不能为空!'));
        }
        else {
          console.dir(this.dialogMsg.list[idx]);
          var url = '/api/util/check/' + this.$store.state.global.currentRouteName;
          var params = {
            id: this.dialogMsg.id,
            field: this.dialogMsg.list[idx].name,
            value: this.dialogMsg.list[idx].val
          }
          axios.post(url, params)
          .then(res=>{
            // console.log(res);
            if (res.data.res == "true") {
              callback();
            }
            else {
              callback(new Error('该名字已存在'));
            }
          })
          .catch(err=>{
            console.log(err);
          })
        }
      }
    }
  }

</script>
<style lang="sass" scoped>
  .dialog{
    position: relative;
    width: 49%;
    min-width: 670px;
    border: 16px solid #006194;
    background-color: #fff;
    z-index: 10;
    .close {
      position: absolute;
      top: 10px;
      right: 10px;
      width: 42px;
      height: 42px;
      border: 1px solid #898989;
      color: #898989;
      border-radius: 50%;
      text-align: center;
      line-height: 42px;
      font-size: 22px;
      font-weight: bold;
      cursor: pointer;
    }
    .close:hover {
      color: #324057;
      border-color: #324057;
    }
    .dialog-title, .dialog-content, .dialog-opt{
      width: 83%;
      margin: 0 auto;
    }
    .dialog-title{
      padding-top: 34px;
      padding-bottom: 40px;
      h1 {
        color: #2DC1E9;
        font-size: 24px;
      }
    }
    .dialog-content{
      padding-bottom: 40px;
      li {
        width: 100%;
        margin-bottom: 15px;
        span {
          vertical-align: top;
        }
        .dialog-textarea {
          width: 91%;
        }
      }
      li:last-child{
        margin-bottom: 0;
      }
    }
    .dialog-opt{
      padding-bottom: 70px;
      .btn {
        float: right;
        width: 106px;
        height: 42px;
        margin-right: 16px;
      }
      .reset{
        background-color: #DDDDDD;
        border-color: #DDDDDD;
        color: #595758;
      }
      .reset:hover{
        border-color: #b1b1b1;
      }
      .submit{
        background-color: #20A1FF;
        border-color: #20A1FF;
        color: #fff;
      }
      .submit:hover{
        border-color: #0094ff;
      }
      .submit.is-disabled, .submit.is-disabled:focus, .submit.is-disabled:hover {
        color: #bfcbd9;
        cursor: not-allowed;
        background-image: none;
        background-color: #eef1f6;
        border-color: #d1dbe5;
      }
    }
  }
  .dialogfade-enter-active {
    transition: all .3s ease;
  }
  .dialogfade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .dialogfade-enter, .dialogfade-leave-active {
    opacity: 0;
  }
</style>