<template>
  <div>
      <button @click="switchLang('zh-CN')">切换中文</button>
      <button @click="switchLang('en-US')">切换英文</button>
      <router-link to="/i18n2">i18n2</router-link>
      <div>{{$t("m.login")}}</div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    switchLang(lang) {
      this.$i18n.locale = lang;
    }
  }
};
</script>