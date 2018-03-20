<template>
  <div>
      <button @click="switchLang('zh-CN')">切换中文</button>
      <button @click="switchLang('en-US')">切换英文</button>
      <router-link to="/i18n1">i18n1</router-link>
      <div>{{$t("m.login")}}</div>
      <div>{{$t("m.user_center")}}</div>
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