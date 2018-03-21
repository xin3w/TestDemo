<template>
  <div>
    <h1 class="tit1">i18n国际化</h1>
    <el-button type="primary" @click="switchLanguage" size="mini">语言切换</el-button>
    <hr>
    <div>{{$t("m.login")}}</div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        lang: this.$i18n.locale
      }
    },
    methods: {
      switchLanguage() {
        if (this.lang === 'zh-CN') {
          this.lang = 'en-US'
          this.$i18n.locale = 'en-US'
        } else {
          this.lang = 'zh-CN'
          this.$i18n.locale = 'zh-CN'
        }
      }
    }
  }
</script>
