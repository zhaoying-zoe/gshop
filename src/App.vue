<template>
  <div>
    <router-view></router-view>
    <FooterGuide v-show="$route.meta.showFooter" />
  </div>
</template>

<script>
  // 引入底部组件
  import FooterGuide from './components/FooterGuide/FooterGuide.vue';
  export default {
    // 注册组件
    components: {
      FooterGuide
    },
  }
</script>

<!--声明 告诉编辑器 识别stylus-->
<style lang="stylus" rel="stylesheet/stylus">
  #app
    width 100%
    height 100%
    background-color #f5f5f5
</style>
