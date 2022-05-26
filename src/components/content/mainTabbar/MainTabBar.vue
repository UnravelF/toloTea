<template>
  <tab-bar>
    <tab-bar-item path="/home">
      <img slot="item-icon" src="~assets/img/tabbar/home_light.svg" alt="">
      <img slot="item-active-icon" src="~assets/img/tabbar/home_fill_light.svg" alt="">
      <span slot="item-text">首页</span>
    </tab-bar-item>
    <tab-bar-item path="/menu">
      <img slot="item-icon" src="~assets/img/tabbar/menu_light.svg" alt="">
      <img slot="item-active-icon" src="~assets/img/tabbar/menu_fill_light.svg" alt="">
      <span slot="item-text">点餐</span>
    </tab-bar-item>
    <tab-bar-item path="/order">
      <img slot="item-icon" src="~assets/img/tabbar/order_light.svg" alt="">
      <img slot="item-active-icon" src="~assets/img/tabbar/order_fill_light.svg" alt="">
      <span slot="item-text">订单</span>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <img slot="item-icon" src="~assets/img/tabbar/my_light.svg" alt="">
      <img slot="item-active-icon" src="~assets/img/tabbar/my_fill_light.svg" alt="">
      <span slot="item-text">我的</span>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
  import TabBar from 'components/common/tabbar/TabBar'
  import TabBarItem from 'components/common/tabbar/TabBarItem'

  export default {
    name: "MainTabBar",
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style scoped>

</style>
