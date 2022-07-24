<template>
  <scroll id="menu-tab">
    <div class="menu-list">
      <div class="menu-list-item"
          v-for="(item, index) in categories"
          :key="index"
          :class="{active: index === currentIndex}"
          @click="itemClick(index)">
          <div><img :src="item.img" alt=""></div>
          <div class="tab-text">{{item.title}}</div>
      </div>
    </div>
  </scroll>
</template>

<script>
  import Scroll from 'components/common/scroll/Scroll'

  import { getTabData } from 'network/menu'

  export default {
    name: "MenuTab",
    components: {
      Scroll
    },
    data() {
      return {
        currentIndex: 0,
        // tab栏分类数据
        categories: []
      }
    },
    created() {
      this.getTab()
    },
    methods: {
      // 导航栏点击事件
      itemClick(index) {
        this.currentIndex = index
        this.$emit('MenuClick', index)
      },
      // 获取tab栏数据
      getTab() {
        getTabData().then(res => {
          this.categories = res.data
        })
      }
    }
  }
</script>

<style scoped>
  #menu-tab {
    background-color: #f6f6f6;
    height: 100%;
    width: 100px;
    box-sizing: border-box;
    overflow: hidden;
  }

  .menu-list-item {
    height: 70px;
    text-align: center;
    font-size: 14px;
    color: #606266;
    padding: 10px 0;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }

  .menu-list-item img {
    width: 30px;
    height: 30px;
    vertical-align: middle;
  }

  .menu-list-item .tab-text {
    margin-top: 5px;
  }
  .menu-list-item.active {
    font-weight: 700;
    color: #f97070;
    background-color: #fff;
    border-left: 3px solid #f97070;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
</style>
