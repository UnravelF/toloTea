<template>
  <div id="menu">
    <!-- 点餐顶部导航栏 -->
    <menu-nav-bar/>
  </div>
</template>

<script>
  import MenuNavBar from './childComp/MenuNavBar'

  export default {
    name: "Menu",
    components: {
      MenuNavBar
    }
  }
</script>

<style scoped>

</style>