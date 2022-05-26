<template>
  <div id="home">
    <scroll class="content"
            :probe-type="3">
      <!-- 轮播图 -->
      <home-swiper/>
      <!-- 登录模块 -->
      <home-login/>
      <!-- 立即点餐模块 -->
      <home-order/>
    </scroll>
  </div>
</template>

<script>
  import Scroll from 'components/common/scroll/Scroll'

  import HomeSwiper from './childComp/HomeSwiper'
  import HomeLogin from './childComp/HomeLogin'
  import HomeOrder from './childComp/HomeOrder'



  export default {
    name: "Home",
    components: {
      Scroll,
      HomeSwiper,
      HomeLogin,
      HomeOrder
    }
  }
</script>

<style scoped>
  #home {
    background-color: #f9f5f5;
  }
</style>