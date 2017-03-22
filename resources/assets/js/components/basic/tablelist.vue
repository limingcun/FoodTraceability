<template>
  <div class="tablelist">
    <table>
      <tr>
        <th v-for="tth in tableStructure.tabletr" :colspan="curColspan(tth.type)">
          <span :class="{order: tth.order}">{{tth.title}}</span>
        </th>
      </tr>
      <tr v-for="(ttd,ky) in tableStructure.tabletd" :key="ky">
        <td>
          <input type="checkbox" />
        </td>
        <td>
          <span>{{ttd.id}}</span>
        </td>
        <td>
          <span class="color61CEEF">{{ttd.name}}</span>
        </td>
        <td>
          <div class="miaosu">{{ttd.desc}}</div>
        </td>
        <td>
          <div class="on-off">
            <input type="checkbox" :id="'status-' + ky" :checked="ttd.status === 1 ? true : false" @change="changeStatus(ttd)"/>
            <label :for="'status-' + ky">
              <span class="ball"></span>
            </label>
          </div>
        </td>
        <!-- 操作类型 -->
        <td v-for="opt in tableStructure.optlist">
          <div :id="opt.icon + '-' + ky" class="cursonP" @click="optHandler(opt.icon, ky)">
            <i :class="['icon', 'icon-' + opt.icon]"></i>
            <span>{{opt.txt}}</span>
          </div>
        </td>
      </tr>
    </table>
  </div>
</template>
<script>

  export default {
    name: 'tablelist',
    props: {
      tableStructure: Object
    },
    methods: {
      curColspan (type) {
        if (type === 'opt') {
          return this.tableStructure.optlist.length
        }
        else {
          return 1;
        }
      },
      // {String} optType 判断操作的类型
      optHandler(optType, key) {
        switch (optType) {
          case 'edit':
            this.editHandler(key);
            break;
          case 'del':
            this.delHandler(key);
            break;
          case 'power':
            this.powerHandler(key);
            break;
          case 'password':
            this.passwordHandler(key);
            break;
        }
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
        this.$emit('editHandler', msg);
      },
      delHandler (k) {},
      powerHandler (k) {},
      passwordHandler (k) {},
      changeStatus(obj) {
        obj.status = obj.status === 1 ? 0 : 1;
        console.log(obj);
      }
    }
  }

</script>
<style lang="sass" scoped>

  .icon-power {
    background-image: url(/images/opt_power.png);
  }
  .icon-password {
    background-image: url(/images/opt_password.png);
  }
  .icon-edit {
    background-image: url(/images/opt_edit.png);
  }
  .icon-del {
    background-image: url(/images/opt_del.png);
  }
  .color61CEEF {
    color: #61CEEF;
  }
  .cursonP {
    cursor: pointer;
  }
  .tablelist {
    font-size: 16px;
    td {
      min-width: 98px;
    }
  }
  .miaosu {
    width: 500px;
  }
  .on-off{
    width: 96px;
    label {
      width: 96px;
      .ball {
        left: 4px;
      }
    }
    label::before {
      left: 4px;
    }
    label::after {
      left: 20px;
    }
    input[type=checkbox]:checked + label .ball {
      left: 64px;
    }
  }
  .order::before {
    top: 20%;
  }
  .order::after {
    top: 80%;
  }
  @media screen and (max-width:1366px) {
    .tablelist {
      font-size: 12px;
      td {
        min-width: 78px;
      }
    }
    .miaosu {
      width: 280px;
    }
    .order::before {
      top: 10%;
    }
    .order::after {
      top: 90%;
    }
    .on-off{
      width: 66px;
      label {
        width: 66px;
        .ball {
          left: 4px;
        }
      }
      label::before {
        left: 4px;
      }
      label::after {
        left: 20px;
      }
      input[type=checkbox]:checked + label .ball {
        left: 34px;
      }
    }
  }

  .tablelist{
    width: 100%;
    table {
      width: 100%;
      th, td{
        color: #fff;
        border: 1px solid #157FB1;
      }
      th {
        height: 64px;
        background-color: #2C5976;
        .order {
          position: relative;
        }
        .order::before,
        .order::after {
          content: '';
          position: absolute;
          display: block;
          width: 0;
          height: 0;
          border: 5px solid #02FFFD;
          margin-top: -5px;
          left: 110%;
        }
        .order::before {
          border-color: transparent transparent #02FFFD transparent;
        }
        .order::after {
          border-color: #02FFFD transparent transparent transparent;
        }
      }
      td {
        height: 50px;
        /* 宽度应该动态计算 */
        text-align: center;
        input[type=checkbox] {
          width: 16px;
          height: 16px;
          border-radius: 1px;
          border: 1px solid #61CCEC;
          color: #61CCEC;
          position: relative;
        }
        /* 在checkbo使用了appearance:none;后需要加input[type=checkbox]:checked::after*/
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

        .miaosu {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          text-align: left;
          padding-left: 5%;
        }
        .on-off{
          position: relative;
          height: 32px;
          margin: 0 auto;
          input {
            visibility: hidden;
          }
          label {
            position: absolute;
            top: 0;
            left: 0;
            display: block;
            height: 32px;
            border: 1px solid #13CE67;
            border-radius: 16px;
            cursor: pointer;
            .ball {
              display: block;
              width: 28px;
              height: 28px;
              border-radius: 50%;
              transition: all .5s ease;
              cursor: pointer;
              position: absolute;
              top: 50%;
              z-index: 1;
              margin-top: -14px;
              background: #13CE67;
            }
          }
          label::before {
            content: 'On';
            position: absolute;
            top: 50%;
            width: 18px;
            height: 18px;
            line-height: 18px;
            margin-top: -9px;
            color: #fff;
            font-size: 12px;
          }
          label::after {
            content: '';
            position: absolute;
            top: 50%;
            width: 18px;
            height: 18px;
            line-height: 18px;
            margin-top: -9px;
          }
          input[type=checkbox]:checked + label {
            border-color: #2EC0E9;
          }
          input[type=checkbox]:checked + label .ball {
            background: #2EC0E9;
          }
        }
        
        .icon {
          display: inline-block;
          width: 27px;
          height: 27px;
          background-repeat: no-repeat;
          background-position: center center;
          vertical-align: middle;
        }

      }
    }
  }
</style>