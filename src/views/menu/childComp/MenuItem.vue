<template>
  <div class="menu-list">
    <!-- item列表 -->
    <div class="menu-item" v-for="(item, index) in Data" :ref="item.refName" :key="index">
      <h5>{{item.title}}</h5>
      <div class="tea-content" v-for="(it,index) in item.itemData" :key="index">
        <div class="content-img">
          <img :src="it.pic" alt="" @load="imgLoad">
        </div>
        <div class="content-text">
          <h4>{{it.itemTitle}}</h4>
          <p>{{it.itemMessage}}</p>
          <span><i>￥</i>{{it.price}}<i>起</i></span>
          <!-- 点击选规格->id传给Menu->Menu传给AddCart->AddCart通过id渲染商品信息->AddCart选好商品参数值后点击添加id传值->
               通过id购物车展示页面展示该商品 -->
          <div class="add-car" @click="addCart(it.tid)">选规格</div>
        </div>
      </div> 
    </div>
  </div>
</template>

<script>
  import {debounce} from 'common/utils'
  import { getMenuItem } from 'network/menu'

  export default {
    name: "MenuItem",
    components: {
    },
    data() {
      return {
        // 模拟数据
        Data: [],
        // 动态存储导航栏参数的对应位置
        itemTopYs: [],
        getItemTopY: null
      }
    },
    created() {
      // 获取item数据请求
      this.getItem()

      // 获取各个主题位置高度
      this.getItemTopY = debounce(() => {
        this.itemTopYs = []
          this.itemTopYs.push(0);
          // 获取动态ref的高度
          for(var i = 1; i < this.Data.length; i++) {
            this.itemTopYs.push(this.$refs[`${this.Data[i].refName}`][0].offsetTop)
          }
          // 满足滚动到实时位置时跳转对应主题高亮的hack做法
         this.itemTopYs.push(Number.MAX_VALUE)
        console.log(this.itemTopYs);
      }, 200)
    },
    methods: {
      imgLoad() {
        this.getItemTopY()
      },
      // 添加购物车
      addCart(index) {
        // 拿商品id位置  传到Menu
        this.$emit('addCart', index)
      },
      // 获取item数据
      getItem() {
        getMenuItem().then(res => {
          this.Data = res.data
        })
      }
    }
  }
</script>

<style scoped>
  .menu-item {
    margin-top: 20px;
  }

  .menu-item h5 {
    font-size: 14px;
    color: #606266;
    margin-bottom: 20px;
  }

  .tea-content {
    display: flex;
    margin: 20px 0;
  }

  .content-img img {
    width: 75px;
    height: 75px;
    border-radius: 10px;
    margin-right: 10px;
  }

  .content-text {
    position: relative;
    width: 100%;
  }

  .content-text h4 {
    color: #000000;
  }

  .content-text p {
    margin-top: 5px;
    font-size: 12px;
  }

  .content-text span {
    position: absolute;
    bottom: 5px;
    color: #000 ;
  }

  .content-text span i {
    font-size: 10px;
    font-style: normal;
  }
  .add-car {
    position: absolute;
    bottom: 0;
    right: 5px;
    width: 60px;
    height: 20px;
    line-height: 20px;
    background-color: #f97070;
    border-radius: 10px;
    text-align: center;
    font-size: 12px;
    color: #fff;
  }
</style>
