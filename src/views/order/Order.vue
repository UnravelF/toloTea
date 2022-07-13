<template>
  <div id="order">
    <order-nav-bar @OrderClick="OrderClick"/>
      <!-- 订单内容展示模块 -->
      <order-item :orderstauts="orderStatus"/>
  </div>
</template>

<script>
  import OrderNavBar from './childComp/OrderNavBar'
  import OrderItem from './childComp/OrderItem'

  export default {
    name: "Order",
    components: {
      OrderNavBar,
      OrderItem
    },
    data() {
      return {
        orderStatus: 0
      }
    },
    methods: {
      // 订单导航栏点击事件传递
      OrderClick(index) {
        // 获取点击哪个订单的导航栏
        this.orderStatus = index
      }
    }
  }
</script>

<style scoped>
  #order {
    height: 100vh;
    background-color: #f6f6f6;
  }
</style>