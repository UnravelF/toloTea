<template>
  <div class="home-footer">
    <div class="footer-container">
      <div class="wrap-flex-item" v-for="(item, index) in img" :key="index">
        <img :src="item.pic" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import {getHomeFooter} from 'network/home'

export default {
  name: "HomeFooter",
  data() {
    return {
      img:[]
    }
  },
  created() {
    this.getFooter()
  },
  methods: {
    getFooter() {
      getHomeFooter().then(res => {
        this.img = res.data
      })
    }
  }
}
</script>

<style scoped>
  .home-footer {
    /* position: relative; */
    margin: 30px 20px;
  }

  .footer-container {
    display: flex;
    flex-wrap: wrap;
    text-align: center;
  }

  .wrap-flex-item {
    flex: 1;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 0 20px #eee;
    overflow: hidden;
  }

  .wrap-flex-item:nth-child(1) {
    margin-right: 5px;
  }

  .wrap-flex-item:nth-child(2) {
    margin: 0px 5px;
  }

  .wrap-flex-item:nth-child(3) {
    margin-left: 5px;
  }

  .wrap-flex-item img {
    width: 100%;
    height: 100%;
  }
</style>
