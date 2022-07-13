<template>
  <div class="shop-cart">
    <!-- 购物车模块 -->
    <div class="cart">
      <img src="~assets/img/menu/shopcart.svg" alt="">
    </div>
    <!-- price模块 -->
    <div class="price">
      <i>￥</i><span>11</span>
    </div>
    <!-- settle模块 -->
    <div class="settle">
      去结算
    </div>
  </div>
</template>

<script>
export default {
  name: "ShopCart"
}
</script>

<style scoped>
  .shop-cart {
    display: flex;
    position: fixed;
    /* 盒子垂直居中 */
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    bottom: 59px;
    width: 95%;
    height: 60px;
    line-height: 60px;
    border-radius: 30px;
    background-color:#303133;
    overflow: hidden;
    color: #fff;
  }

  .cart {
    width: 20%;
    text-align: center;
  }
  .cart img {
    width: 60%;
    height: 60%;
    margin-left: 20px;
    vertical-align: middle;
  }
  .price {
    flex: 1;
    margin-left: 10px;
  }
  .price i {
    font-style: normal;
    font-size: 18px;
  }
  .price span {
    font-size: 24px;
  }

  .settle {
    width: 25%;
    text-align: center;
    font-size: 18px;
    background-color: #f97070;
  }
</style>
