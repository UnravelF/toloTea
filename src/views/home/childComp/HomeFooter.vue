<template>
  <div class="home-footer">
    <div class="footer-container">
      <div class="wrap-flex-item">
        <img src="~assets/img/home/banner-1.jpg" alt="">
      </div>
      <div class="wrap-flex-item">
        <img src="~assets/img/home/banner-2.jpg" alt="">
      </div>
      <div class="wrap-flex-item">
        <img src="~assets/img/home/banner-3.jpg" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeFooter"
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
