<template>
  <div >
    <swiper class="menu-banner">
      <swiper-item v-for="(item, index) in imgs" :key="index">
        <img :src="item.pic" alt="">
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
  import {Swiper, SwiperItem} from 'components/common/swiper'
  import {getHomeBanner} from 'network/home'

  export default {
    name: "MenuSwiper",
    components: {
      Swiper,
      SwiperItem
    },
    data() {
      return {
        // 图片资源
        imgs: []
      }
    },
    created() {
      this.getBanner()
    },
    methods: {
      // 获取轮播图数据
      getBanner() {
        getHomeBanner().then(res => {
          this.imgs = res.data
        })
      }
    }
  }
</script>

<style scoped>
  .menu-banner {
    box-sizing: border-box;
  }
  .menu-banner img {
    width: 100%;
    border-radius: 5px;
    overflow: hidden;
  }

</style>