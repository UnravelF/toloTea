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
      <!-- 底部活动模块 -->
      <home-footer/>
    </scroll>
  </div>
</template>

<script>
  import Scroll from 'components/common/scroll/Scroll'

  import HomeSwiper from './childComp/HomeSwiper'
  import HomeLogin from './childComp/HomeLogin'
  import HomeOrder from './childComp/HomeOrder'
  import HomeFooter from './childComp/HomeFooter'



  export default {
    name: "Home",
    components: {
      Scroll,
      HomeSwiper,
      HomeLogin,
      HomeOrder,
      HomeFooter
    }
  }
</script>

<style scoped>
  #home {
    position: relative;
    height: 100vh;
    background-color: #f9f5f5;
  }

  .content {
    position: absolute;
    top: 0;
    bottom: 49px;
    left: 0;
    right: 0;
  }
</style>