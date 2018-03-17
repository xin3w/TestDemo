<template>
  <div>
    {{dataUrl}}
    <mt-button plain>plain</mt-button>
  </div>
</template>

<script>
  import {
    MessageBox
  } from 'mint-ui';
  export default {
    name: 'HelloWorld',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        dataUrl: ''
      }
    },
    mounted() {
      this.$axios("http://ltc-bj-dev.c6396418dd7954b228d8b967c8a929103.cn-beijing.alicontainer.com/api/public/v1/url").then(res => {
        this.dataUrl = res;
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
