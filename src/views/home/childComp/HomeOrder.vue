<template>
  <div class="home-order">
    <div class="order-container">
      <!-- 立即点餐 -->
      <img src="~assets/img/home/menu-banner.jpg" alt="" @click="orderClick">
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeOrder",
  methods: {
    orderClick() {
      this.$router.push({path: '/menu'})
    }
  }
}
</script>

<style scoped>
  .home-order {
    position: relative;
    margin: 10px 20px;
    border-radius: 15px;
    background-color: #fff;
    box-shadow: 0 0 20px #eee;
    overflow: hidden;
  }

  .order-container {
    display: flex;
  }

  .order-container img {
    flex: 1;
    width: 100%;
    height: 100%;
  }
</style>
