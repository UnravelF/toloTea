<template>
  <div id="add-cart">
    <div class="cart-content">
      <!-- 图片 -->
      <div class="content-img">
        <img :src="item.pic" alt="">
      </div>
      <!-- 描述 -->
      <div class="content-text">
        <h4>{{item.itemTitle}}</h4>
        <p>{{item.itemMessage}}</p>
      </div>
      <!-- 加料选择区 -->
      <scroll id="scroll-content"
              ref="scroll"
              :probe-type="3">
        <div class="content-select">
        <p>加料</p>
        <input type="radio" name="Feeding" v-model="Feeding" id="big" value="1"><label for="big">大多肉</label>
        <input type="radio" name="Feeding" v-model="Feeding" id="small" value="2"><label for="small">小多肉</label>
        </div>
        <div class="content-select">
        <p>规格</p>
        <input type="radio" name="Specifications" v-model="Specifications" id="dabei" value="1"><label for="dabei">大杯</label>
        <input type="radio" name="Specifications" v-model="Specifications" id="zhongbei" value="2"><label for="zhongbei">中杯</label>
        </div>
        <div class="content-select">
        <p>甜度</p>
        <input type="radio" name="Sweetness" v-model="Sweetness" id="qifentang" value="1"><label for="qifentang">⭐七分糖</label>
        <input type="radio" name="Sweetness" v-model="Sweetness" id="biaozhuntang" value="2"><label for="biaozhuntang">标准糖</label>
        <input type="radio" name="Sweetness" v-model="Sweetness" id="wufentang" value="3"><label for="wufentang">五分糖</label>
        <input type="radio" name="Sweetness" v-model="Sweetness" id="sanfentang" value="4"><label for="sanfentang">三分糖</label>
        <input type="radio" name="Sweetness" v-model="Sweetness" id="wutang" value="5"><label for="wutang">不另加糖</label>
        </div>
        <div class="content-select">
        <p>温度</p>
        <input type="radio" name="temperature" v-model="temperature" id="zhengchang" value="3"><label for="zhengchang">⭐正常冰</label>
        <input type="radio" name="temperature" v-model="temperature" id="shao" value="4"><label for="shao">少冰</label>
        <input type="radio" name="temperature" v-model="temperature" id="wu" value="5"><label for="wu">去冰</label>
        </div>
      </scroll>
      
      <!-- 价格以及添加购物车 -->
      <div class="add">
        <span><i>￥</i>{{item.price}}</span>
        <div class="add-cart" @click="addCart(item.tid)">
          加入购物车
        </div>
      </div>
      <!-- 取消加入购物车 -->
      <span class="cancel" @click="cancelClick">×</span>
    </div>
  </div>
</template>

<script>
  import Scroll from 'components/common/scroll/Scroll'
  
  import {getMenuItemById} from 'network/menu'

  export default {
    name: "addCart",
    components: {
      Scroll
    },
    props: {
      tid: {
        type: Number,
        default: 0
      }
    },
    data() {
      return {
        // 对应id商品数据
        item: {},
        // 加料
        Feeding: '',
        // 规格
        Specifications: '',
        // 甜度
        Sweetness: '',
        // 温度
        temperature: ''
      }
    },
    created() {
      this.getItemById(this.tid)
    },
    methods: {
      cancelClick() {
        this.$emit('cancelClick')
      },
      addCart(index) {
        this.$emit('addClick', index)
      },
      // 根据id获取商品数据
      getItemById(id) {
        getMenuItemById(id).then(res => {
          this.item = res.data
        })
      }
    },
    watch: {

    }
  }
</script>

<style scoped>
  #add-cart {
    display: flex;
    width: 100%;
    height: 100%;
    background-color: rgba( 0, 0, 0, 0.5);
    position: fixed;
    left: 0;
    top: 0;
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .cart-content {
    position: relative;
    background-color: #fff;
    margin: 0 20px;
    border-radius: 10px;
  }

  .cancel {
    position: absolute;
    top: 10px;
    right: 10px;
    width: 30px;
    height: 30px;
    line-height: 30px;
    border-radius: 50%;
    color: #fff;
    text-align: center;
    font-size: 25px;
    background-color: #f97070;
  }

  .cart-content {
    display: flex;
    flex-flow: wrap;
    align-content: flex-start;
    padding: 20px 10px;
  }

  .content-img img {
    width: 100px;
    height: 100px;
    border-radius: 10px;
    margin: 0 10px;
  }
  
  .content-text {
    flex: 1;
    width: 100%;
  }

  .content-text h4 {
    display: inline-block;
    color: #000000;
  }

  .content-text p {
    margin-top: 5px;
    font-size: 12px;
  }

  #scroll-content {
    height: 250px;
    overflow: hidden;
  }

  .content-select {
    width: 100%;
    margin-top: 20px;
  }
  .content-select p {
    font-size: 13px;
    color: #606266;
  }

  .content-select input[type=radio] {
    opacity: 0;
  }
  .content-select label {
    display: inline-block;
    width: 90px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    margin: 10px 5px;
    border-radius: 4px;
    background: #f6f6f6;
    color: #606266;
    font-size: 14px;
  }
  input[type=radio]:checked+label {
    color: #fff;
    background: #f97070;
  }

  .add {
    width: 100%;
    color: #000000;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
  }
  .add span {
    font-size: 18px;
  }
  .add i {
    font-size: 14px;
    font-style: normal;
  }
  .add-cart {
    display: inline-block;
    width: 100px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    background-color: #f97070;
    border-radius: 4px;
    color: #fff;
  }
</style>
