<template>
  <div id="menu">
    <!-- 点餐顶部导航栏 -->
    <menu-nav-bar/>
    <!-- 侧边导航栏模块 -->
    <menu-tab/>
  </div>
</template>

<script>
  import MenuNavBar from './childComp/MenuNavBar'
  import MenuTab from './childComp/MenuTab'

  export default {
    name: "Menu",
    components: {
      MenuNavBar,
      MenuTab
    }
  }
</script>

<style scoped>

</style>