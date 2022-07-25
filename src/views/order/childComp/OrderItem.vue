<template>
  <div class="order-item">
    <!-- 无订单时模块 -->
    <div class="order-none" v-if="orderCount">
      <img src="~assets/img/order/order.svg" alt="">
      <p>您还没有下单，来一杯吧~</p>
      <div class="toMenu" @click="toMenu">来一杯</div>
    </div>
    <!-- 订单内容展示模块 -->
    <div class="content" v-if="!orderCount">
      <scroll id="scroll-content"
                ref="scroll"
                :probe-type="3"
                @scroll="">
        <div class="item" v-for="(item, index) in itemMessage" :key="index">
          <h4>{{item.location}} <i class="iconfont icon-searchxiangyou1"></i></h4>
          <span class="Completed">{{item.status}}</span>
          <div class="item-message">
            <div v-for="it in item.items">
              <img :src="it.pic" alt="">
            </div>
            <span>
              <p>￥{{item.totalPrice}}</p><i>共{{item.items.length}}件</i>
            </span>
          </div>
          <p>{{item.timer}}</p>
          <span class="getMenu" @click="getMore">再喝一杯</span>
        </div>
      </scroll>
    </div>
  </div>
</template>

<script>
  import Scroll from 'components/common/scroll/Scroll'
  
  import { mapGetters, mapMutations } from 'vuex'

  import {getOrderItemByIds, getPrevItem} from 'network/order'

  export default {
    name: "OrderItem",
    props: {
      orderstauts: {
        type: Number,
        default: 0
      }
    },
    components: {
      Scroll,
    },
    computed: {
      ...mapGetters(['getotalTid'])
    },
    data() {
      return {
        // 是否有订单状态
        orderCount: false,
        // 模拟订单数据
        // 当前订单模拟数据
        currentOrder: [],
        // 历史订单模拟数据
        historicalOrders: [],
        // 根据点击的订单状态存储订单数据
        itemMessage: []
      }
    },
    created() {
      // 获取数据
      this.getOrderStatus()
    },
    methods: {
      ...mapMutations(['settotalTid']),
      toMenu() {
        this.$router.push({path: '/menu'})
      },
      // 判断点击的订单状态栏
      getOrderStatus() {
        if(this.orderstauts === 0) {
          // 监听每次当前订单传递
          this.getOrder(this.getotalTid)
        } else {
          // 请求历史订单数据传递
          this.getPrevOrder()
        }
      },
      // 获取当前订单茶品数据
      getOrder(totalTid) {
        getOrderItemByIds(totalTid).then(res => {
          // 获取到有当前订单时赋值
          this.currentOrder = res.data
          this.itemMessage = this.currentOrder
          
          // 拿到当前订单后订单状态改变
          if(this.itemMessage[0].items.length === 0) {
            this.orderCount = true
          }else {
            this.orderCount = false
          }
        })
      },
      // 获取历史订单数据
      getPrevOrder() {
        getPrevItem().then(res => {
          console.log(res);
          this.historicalOrders = res.data
          this.itemMessage = this.historicalOrders

          // 拿到当前订单后订单状态改变
          if(this.itemMessage[0].items.length === 0) {
            this.orderCount = true
          }else {
            this.orderCount = false
          }
        })
      },
      // 再喝一杯点击事件
      getMore() {
        this.$router.push({path: '/menu'})
      },
    },
    // 监听点击的订单状态变化
    watch: {
      orderstauts(newValue, oldValue) {
        this.orderstauts = newValue
        // 重新渲染页面
        this.getOrderStatus()
      },
      // 监听订单传递状态
      getotalTid: {
        deep: true,
        handler(newValue, oldValue) {
          this.settotalTid(newValue)
          // 值变化后重新渲染
          this.getOrderStatus()
        }
      }
    }
  }
</script>

<style scoped>
  .order-item {
    width: 100%;
  }
  /* 无订单模块样式 */
  .order-none {
    width: 100%;
    height: 100%;
    text-align: center;
    margin: auto;
  }

    .order-none img {
    position: absolute;
    left: 50%;
    top: 42%;
    transform: translate(-50%, -50%);
  }

  .order-none p {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: #909399;
  }
  .toMenu {
    position: absolute;
    left: 50%;
    top: 75%;
    transform: translate(-50%, -50%);
    width: 50%;
    height: 40px;
    line-height: 40px;
    background-color: #f97070;
    color: #fff;
    font-weight: 700;
    border-radius: 5px;
  }
  /* 有订单模块样式 */
  .content {
  position: absolute;
  left: 0;
  right: 0;
  top: 49px;
  bottom: 49px;

  display: flex;
  }

  #scroll-content {
  flex: 1;
  height: 100%;
  margin: 0 10px;
  overflow: hidden;
  margin-top: 10px;
  }

  .item {
    position: relative;
    height: 200px;
    background-color: #fff;
    margin: 10px 0;
    border-radius: 10px;
    padding: 20px 10px;
  }

  .item h4 {
    font-size: 18px;
    color: #000;
    font-weight: normal;
    margin-bottom: 10px;
  }

  .item .Completed {
    position: absolute;
    top: 20px;
    right: 10px;
  }

  .item p {
    display: inline-block;
    color: #909399;
  }

  .item-message {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 70px;
    margin-bottom: 30px;
  }
  .item-message img {
    width: 100%;
    height: 70px;
    vertical-align: middle;
  }
  .item-message span{
    width: 20%;
    text-align: center;
    padding-top: 15px;
    font-size: 18px;
  }
   .item-message span p {
      color: #000;
   }
  .item-message  span i {
    display: block;
    font-style: normal;
    font-size: 14px;
    color: #909399;
  }

  .getMenu {
    position: absolute;
    right: 10px;
    bottom: 22px;
    width: 100px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    border: 1px solid #f97070;
    color: #f97070;
    border-radius: 5px;
  }
</style>
