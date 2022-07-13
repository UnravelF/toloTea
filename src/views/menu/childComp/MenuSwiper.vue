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

  export default {
    name: "MenuSwiper",
    components: {
      Swiper,
      SwiperItem
    },
    data() {
      return {
        // 图片资源
        imgs: [
          {pic: require('../../../assets/img/home/swiper/swiper1.jpg')},
          {pic: require('../../../assets/img/home/swiper/swiper2.jpg')},
          {pic: require('../../../assets/img/home/swiper/swiper3.jpg')},
          {pic: require('../../../assets/img/home/swiper/swiper4.jpg')},
          {pic: require('../../../assets/img/home/swiper/swiper5.jpg')}
        ]
      }
    },
    methods: {
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