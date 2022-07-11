<template>
  <scroll id="menu-tab">
    <div class="menu-list">
      <div class="menu-list-item"
          v-for="(item, index) in categories"
          :key="index"
          :class="{active: index === currentIndex}"
          @click="itemClick(index)">
          <div><img src="~assets/img/menu/menu-icon.png" alt=""></div>
          <div class="tab-text">{{item.title}}</div>
      </div>
    </div>
  </scroll>
</template>

<script>
  import Scroll from 'components/common/scroll/Scroll'

  export default {
    name: "MenuTab",
    components: {
      Scroll
    },
    data() {
      return {
        currentIndex: 0,
        categories: [
          {
            title: "店长推荐"
          },{
            title: "必喝热销榜"
          },{
            title: "超嗲水果茶"
          },{
            title: "超顶刺梨"
          },{
            title: "超爽鲜柠"
          },{
            title: "超有料家族"
          },{
            title: "超赞奶茶"
          },{
            title: "甄选咖啡"
          },{
            title: "原叶纯茶"
          },
        ]
      }
    },
    methods: {
      itemClick(index) {
        this.currentIndex = index
        this.$emit('MenuClick', index)
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
