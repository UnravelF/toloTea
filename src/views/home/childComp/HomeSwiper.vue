<template>
  <div class="home-swiper">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="~assets/img/home/swiper/swiper1.jpg" alt="">
        </div>
        <div class="swiper-slide">
          <img src="~assets/img/home/swiper/swiper2.jpg" alt="">
        </div>
        <div class="swiper-slide">
          <img src="~assets/img/home/swiper/swiper5.jpg" alt="">
        </div>
        <div class="swiper-slide">
          <img src="~assets/img/home/swiper/swiper4.jpg" alt="">
        </div>
      </div>
  </div>
  </div>
</template>

<script>
  import Swiper from 'swiper';
  import 'swiper/dist/css/swiper.min.css';

  export default {
    name: "HomeSwiper",
    data() {
      return {
        // 是否显示背景颜色
        handleActive: false
      }
    },
    mounted() {
      new Swiper ('.swiper-container', {
        autoplay: true,
        loop: true
      });
      window.addEventListener('scroll', this.handleScroll)
    },
    methods: {
      handleScroll() {
        window.pageYOffset>window.innerWidth*80/360 ? this.headerActive = true : this.headerActive = false
      }
    }
  }
</script>

<style scoped>
  .swiper-container {
    display: flex;
    width: 100%;
    /* height: 254px; */
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }

  .swiper-container img {
    width: 100%;
  }
</style>
