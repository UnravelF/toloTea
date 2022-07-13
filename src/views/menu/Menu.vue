<template>
  <div id="menu">
    <!-- 点餐顶部导航栏 -->
    <menu-nav-bar/>
    <div class="content">
      <!-- 侧边导航栏模块 -->
      <menu-tab @MenuClick="MenuClick" ref="tab"/>
      <scroll id="scroll-content"
              ref="scroll"
              :probe-type="3"
              @scroll="contentScroll">
        <div>
          <!-- 内容区banner图模块 -->
          <menu-swiper/>
          <!-- item列表 -->
          <menu-item ref="item" @addCart="addCart"/>
        </div>
      </scroll>
      <!-- 添加购物车弹框 -->
      <template v-if="showAddCart">
        <add-cart @cancelClick="cancelClick" @addClick="addClick"/>
      </template>
      <!-- 购物车模块 -->
      <template v-if="showCart">
        <shop-cart/>
      </template>
    </div>
  </div>
</template>

<script>
  import MenuNavBar from './childComp/MenuNavBar'
  import MenuTab from './childComp/MenuTab'
  import MenuSwiper from './childComp/MenuSwiper'
  import MenuItem from './childComp/MenuItem'
  import AddCart from './childComp/AddCart'
  import ShopCart from './childComp/ShopCart'

  import Scroll from 'components/common/scroll/Scroll'

  export default {
    name: "Menu",
    components: {
      MenuNavBar,
      MenuTab,
      Scroll,
      MenuSwiper,
      MenuItem,
      AddCart,
      ShopCart
    },
    created() {
    },
    data() {
      return {
        currentIndex: 0,
        // 展示添加购物车状态
        showAddCart: false,
        // 展示购物车状态
        showCart: false
      }
    },
    methods: {
      // 点击侧边导航栏滚动到对应区域
      MenuClick(index) {
        this.$refs.scroll.scrollTo(0, -this.$refs.item.itemTopYs[index], 500)
      },
      // 滚动位置监听 实时对应主题  联动效果
      contentScroll(position) {
        // 1.获取y值
        const positionY = -position.y
        // 2.对y值与主题的y值进行对比
        length = this.$refs.item.itemTopYs.length
        for(let i = 0; i < length - 1; i++) {
          // 2.hack做法 为了还是不越界length  length - 1
          if(this.currentIndex !== i && (positionY >= this.$refs.item.itemTopYs[i] && positionY < this.$refs.item.itemTopYs[i+1])) {
            this.currentIndex = i;
            this.$refs.tab.currentIndex = this.currentIndex
          }
        }
      },
      // 点击添加购物车事件
      addCart() {
        this.showAddCart = true
      },
      // 点击取消添加购物车事件
      cancelClick() {
        this.showAddCart = false
      },
      // 添加购物车成功事件
      addClick() {
        this.showAddCart = false
        // 添加购物车后展示购物车状态
        this.showCart = true

      }
    }
  }
</script>

<style scoped>
  #menu {
    height: 100vh;
  }

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
  }
</style>