<template>
  <el-dialog title="警告" v-model="isVisible" size="tiny" :show-close="false">
    <span>是否要删除这条数据？</span>
    <span slot="footer" class="dialog-footer">
      <el-button @click="cancel">取 消</el-button>
      <el-button type="danger" @click="sub">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
  export default {
    name: 'deldialog',
    props: {
      delDialogVisible: Boolean,
      delDialogMsg: Object
    },
    data () {
      return {
        isVisible: false,
        f: false
      }
    },
    methods: {
      sub () {
        this.$emit('sub', this.delDialogMsg);
      },
      cancel () {
        this.isVisible = false;
        this.$emit('cancel');
      }
    },
    watch: {
      delDialogVisible (nv, v) {
        console.log(nv)
        console.log(v)
        this.isVisible = this.delDialogVisible
      }
    }
  };
</script>