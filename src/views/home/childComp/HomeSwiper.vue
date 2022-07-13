<template>
  <div class="home-swiper">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item, index) in imgs" :key="index">
          <img :src="item.pic" alt="">
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
        handleActive: false,
        // 图片资源
        imgs: [
          {pic: require('../../../assets/img/home/swiper/swiper2.jpg')},
          {pic: require('../../../assets/img/home/swiper/swiper1.jpg')},
          {pic: require('../../../assets/img/home/swiper/swiper3.jpg')},
          {pic: require('../../../assets/img/home/swiper/swiper4.jpg')},
          {pic: require('../../../assets/img/home/swiper/swiper5.jpg')}
        ]
      }
    },
    mounted() {
      new Swiper ('.swiper-container', {
        autoplay: {
          delay: 2000,
          disableOnInteraction: false
        },
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
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }

  .swiper-container img {
    width: 100%;
  }

  .swiper-pagination {
    margin-bottom: 10px;
  }
</style>
