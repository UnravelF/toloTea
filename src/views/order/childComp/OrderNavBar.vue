<template>
  <div class="order-nav-bar">
    <div class="order"
         v-for="(item, index) in order" :key="index"
         :class="{active: index === currentIndex}"
         @click="itemClick(index)">{{item.title}}</div>
  </div>
</template>

<script>

  export default {
    name: "MenuNavBar",
    data() {
      return {
        currentIndex: 0,
        order:[
          {
            title: "当前订单"
          },
          {
            title: "历史订单"
          }
        ]
      }
    },
    methods: {
      itemClick(index) {
        this.currentIndex = index
        this.$emit('OrderClick', index)
      }
    }
  }
</script>

<style scoped>
  .order-nav-bar {
    display: flex;
    height: 49px;
    line-height: 49px;
    text-align: center;
    background-color: #fff;
  }
  .order {
    flex: 1;
    font-size: 18px;
    font-weight: 700;
    text-align: center;
    color: #606266;
  }

  .order.active {
    transition:  all 0.5s;
    color: #fff;
    background-color: #f97070;
    border-width: 50%;
  }
</style>
