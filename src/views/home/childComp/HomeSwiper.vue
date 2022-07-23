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

  import {getHomeBanner} from 'network/home'

  export default {
    name: "HomeSwiper",
    data() {
      return {
        // 是否显示背景颜色
        handleActive: false,
        // 图片资源
        imgs: []
      }
    },
    created() {
      this.getBanner()
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll)
    },
    methods: {
      handleScroll() {
        window.pageYOffset>window.innerWidth*80/360 ? this.headerActive = true : this.headerActive = false
      },
      // 获取轮播图数据
      getBanner() {
        getHomeBanner().then(res => {
          this.imgs = res.data
        })
      }
    },
    watch: {
      // 在mounted里面调用swiper时，在动态获取轮播图数据前，已经实例化完成，所以需要通过watch监听，$nextTick在页面渲染完成后再进行调用
      imgs() {
        this.$nextTick(() => {
          new Swiper ('.swiper-container', {
            autoplay: {
            delay: 2000,
            disableOnInteraction: false
          },
            loop: true
          });
        })
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
