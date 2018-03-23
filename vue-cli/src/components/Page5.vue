<template>
  <div>
    <h1 class="tit1">钩子体验-请查看控制台</h1>
    <input type="text" v-model="msg" class="form-control">
    <h1 class="tit1">keepAlive特性</h1>
    <ol>
      <li>组件间切换不会执行钩子beforeDestroy、destroyed</li>
      <li>缓存特性，即当前输入的值切到另一个组件在返回后，数据还存在.</li>
      <li>当不启用keepAlive时create只执行一次，定时器也一样</li>
    </ol>
    <h1 class="tit1">查看一下定时器</h1>
    <div>{{counter}}</div>
  </div>
</template>

<script>
  export default {
    components: {},
    props: [],
    data() {
      return {
        msg: "你好",
        counter:1
      }
    },
    computed: {},
    watch: {},
    beforeCreate() {
      console.log('1beforeCreate');
    },
    created() {
      console.log('2created');
      // setTimeout(() => {
      //   this.counter++;
      // }, 3000);
    },
    beforeMount() {
      console.log('3beforeMount');
    },
    mounted() {
      console.log('4mounted');
    },
    beforeUpdate() {
      console.log('5beforeUpdata');
    },
    updated() {
      console.log('6updated');
    },
    activated() {
      console.log('activated');
      setTimeout(() => {
        this.counter++;
      }, 3000);
    }, deactivated() {
      console.log('deactivated');
    },
    beforeDestroy() {
      console.log('7beforeDestroy');
    },
    destroyed() {
      console.log('8destroyed');
    },
    methods: {},
  }
</script>