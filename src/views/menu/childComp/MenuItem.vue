<template>
  <div class="menu-list">
    <!-- item列表 -->
    <div class="menu-item" ref="item1">
      <h5>店长推荐</h5>
      <div class="tea-content">
        <div class="content-img">
          <img src="~assets/img/menu/item/tui1.jpg" @load="imgLoad" alt="">
        </div>
        <div class="content-text">
          <h4>嫩仙草牛乳冰</h4>
          <p>配料：现熬仙草冻×清凉糖浆×葡萄干×珍珠×红豆×花生碎</p>
          <span><i>￥</i>13<i>起</i></span>
          <div class="add-car" @click="addCart">选规格</div>
        </div>
      </div>
    </div>
    <div class="menu-item" ref="item2">
      <h5>必喝热销榜</h5>
      <div class="tea-content">
        <div class="content-img">
          <img src="~assets/img/menu/item/bi1.jpg" alt="">
        </div>
        <div class="content-text">
          <h4>百香果金菠萝</h4>
          <p>金菠萝×柠檬×百香果×毛峰茉莉绿茶</p>
          <span><i>￥</i>13<i>起</i></span>
          <div class="add-car">选规格</div>
        </div>
      </div>
      <div class="tea-content">
        <div class="content-img">
          <img src="~assets/img/menu/item/bi2.jpg" alt="">
        </div>
        <div class="content-text">
          <h4>厚芋泥啵啵奶茶</h4>
          <p>荔浦芋泥×波波×奶茶 每日现煮荔浦芋泥滑入丝滑奶茶中</p>
          <span><i>￥</i>13<i>起</i></span>
          <div class="add-car">选规格</div>
        </div>
      </div>
      <div class="tea-content">
        <div class="content-img">
          <img src="~assets/img/menu/item/bi3.jpg" alt="">
        </div>
        <div class="content-text">
          <h4>杨枝甘露清爽板</h4>
          <p>芒果×西柚粒×小多肉×大多肉×椰奶</p>
          <span><i>￥</i>17<i>起</i></span>
          <div class="add-car">选规格</div>
        </div>
      </div>
    </div>
    <div class="menu-item" ref="item3">
      <h5>超嗲水果茶</h5>
      <div class="tea-content">
        <div class="content-img">
          <img src="~assets/img/menu/item/chao1.jpg" alt="">
        </div>
        <div class="content-text">
          <h4>爆柠草莓金菠萝</h4>
          <p>金菠萝×草莓×柠檬×绿茶 人气网红番茄蛋花汤</p>
          <span><i>￥</i>18<i>起</i></span>
          <div class="add-car">选规格</div>
        </div>
      </div>
      <div class="tea-content">
        <div class="content-img">
          <img src="~assets/img/menu/item/chao2.jpg" alt="">
        </div>
        <div class="content-text">
          <h4>西瓜冻冻</h4>
          <p>西瓜×冻冻×绿茶</p>
          <span><i>￥</i>12<i>起</i></span>
          <div class="add-car">选规格</div>
        </div>
      </div>
      <div class="tea-content">
        <div class="content-img">
          <img src="~assets/img/menu/item/chao3.jpg" alt="">
        </div>
        <div class="content-text">
          <h4>超赞西瓜桶</h4>
          <p>当季西瓜×毛峰茉莉</p>
          <span><i>￥</i>16<i>起</i></span>
          <div class="add-car">选规格</div>
        </div>
      </div>
    </div>
    <div class="menu-item" ref="item4">
      <h5>超顶刺梨</h5>
      <div class="tea-content">
        <div class="content-img">
          <img src="~assets/img/menu/item/cili1.jpg" alt="">
        </div>
        <div class="content-text">
          <h4>刺梨鸭屎香</h4>
          <p>鲜榨刺梨汁×鸭屎香鲜茶×当季柠檬</p>
          <span><i>￥</i>18<i>起</i></span>
          <div class="add-car">选规格</div>
        </div>
      </div>
      <div class="tea-content">
        <div class="content-img">
          <img src="~assets/img/menu/item/cili2.jpg" alt="">
        </div>
        <div class="content-text">
          <h4>刺梨维C皇(袋装)</h4>
          <p>双倍鲜榨刺梨汁×当季柠檬×爽口冻冻</p>
          <span><i>￥</i>17<i>起</i></span>
          <div class="add-car">选规格</div>
        </div>
      </div>
    </div>
    <div class="menu-item" ref="item5">
      <h5>超爽鲜柠</h5>
      <div class="tea-content">
        <div class="content-img">
          <img src="~assets/img/menu/item/xianning1.jpg" alt="">
        </div>
        <div class="content-text">
          <h4>鸭香柠檬茶</h4>
          <p>柠檬×鸭屎香茶</p>
          <span><i>￥</i>14<i>起</i></span>
          <div class="add-car">选规格</div>
        </div>
      </div>
      <div class="tea-content">
        <div class="content-img">
          <img src="~assets/img/menu/item/xianning2.jpg" alt="">
        </div>
        <div class="content-text">
          <h4>鲜柠加油柑</h4>
          <p>柠檬×油柑汁×毛峰茉莉绿茶</p>
          <span><i>￥</i>15<i>起</i></span>
          <div class="add-car">选规格</div>
        </div>
      </div>
      <div class="tea-content">
        <div class="content-img">
          <img src="~assets/img/menu/item/xianning3.jpg" alt="">
        </div>
        <div class="content-text">
          <h4>鲜柠生打椰</h4>
          <p>生椰乳×新鲜柠檬</p>
          <span><i>￥</i>16<i>起</i></span>
          <div class="add-car">选规格</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {debounce} from 'common/utils'

  export default {
    name: "MenuItem",
    components: {
    },
    data() {
      return {
        // 动态存储导航栏参数的对应位置
        itemTopYs: [],
        getItemTopY: null
      }
    },
    created() {
      // 获取各个主题位置高度
      this.getItemTopY = debounce(() => {
        this.itemTopYs = []
        this.itemTopYs.push(0);
        this.itemTopYs.push(this.$refs.item2.offsetTop);
        this.itemTopYs.push(this.$refs.item3.offsetTop);
        this.itemTopYs.push(this.$refs.item4.offsetTop);
        this.itemTopYs.push(this.$refs.item5.offsetTop);
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
      addCart() {
        this.$emit('addCart')
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
    color: red;
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
