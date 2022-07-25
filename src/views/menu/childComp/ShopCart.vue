<template>
  <div class="shop-cart">
    <!-- 购物车模块 -->
    <div class="cart">
      <img src="~assets/img/menu/shopcart.svg" alt="">
    </div>
    <!-- price模块 -->
    <div class="price">
      <i>￥</i><span>{{totalPrice}}</span>
    </div>
    <!-- settle模块 -->
    <div class="settle" @click="toSettle">
      去结算
    </div>
  </div>
</template>

<script>
  import {getMenuItemById} from 'network/menu'

  import { mapMutations } from 'vuex'

  export default {
    name: "ShopCart",
    props:{
      tid: {
        type: Number,
        default: 0
      },
      added: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        // 购物车总价格
        totalPrice: 0,
        // 存储此次购物车订单商品
        Tid: []
      }
    },
    created() {
      this.getItemById(this.tid)
    },
    methods: {
      ...mapMutations(['settotalTid']),
      // 根据id获取商品数据
      getItemById(id) {
        getMenuItemById(id).then(res => {
          this.totalPrice += parseInt(res.data.price)
          this.Tid.push(id)
        })
      },
      // 去结算点击事件
      toSettle() {
        //将订单对应茶品id存储到store中
        this.settotalTid(this.Tid)
        // 结算跳转到订单页
        this.$nextTick(() => {
          this.$router.push({path: '/order'})
        })
      }
    },
    // 监听不同商品添加购物车时购物车总价格变化
    watch: {
      tid(newValue, oldValue) {
        this.$nextTick(() => {
          this.tid = newValue
        })
      },
      // 监听父组件传递的节流阀变化  控制添加购物车总价
      added(newValue, oldValue) {
        if(newValue === true) {
          this.getItemById(this.tid)
        }
      }
    }
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
