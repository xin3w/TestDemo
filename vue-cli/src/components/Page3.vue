<template>
  <div>
    <h1 class="tit1">切换自动获取焦点</h1>
    <el-button type="primary" @click="switchShow" size="mini">切换</el-button>
    <hr>
    <div v-if="show">
      <input type="text" class="form-control" placeholder="" ref="ipt1" value="内容1">
    </div>
    <div v-else>
      <input type="text" class="form-control" placeholder="" ref="ipt2" value="内容2">
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: true
    }
  },
  methods: {
    switchShow() {
      this.show = !this.show;
      if (this.show) {
        this.$refs.ipt2.focus();
      } else {
        this.$refs.ipt1.focus();
      }
    }
  }
}

</script>
