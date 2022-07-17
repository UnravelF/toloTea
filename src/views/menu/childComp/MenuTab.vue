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
            img: require('../../../assets/img/menu/menutab/tuijian.svg'),
            title: "店长推荐"
          },
          {
            img: require('../../../assets/img/menu/menutab/bihe.svg'),
            title: "必喝热销榜"
          },
          {
            img: require('../../../assets/img/menu/menutab/shuiguo.svg'),
            title: "超嗲水果茶"
          },
          {
            img: require('../../../assets/img/menu/menutab/lizi.svg'),
            title: "超顶刺梨"
          },
          {
            img: require('../../../assets/img/menu/menutab/ningmeng.svg'),
            title: "超爽鲜柠"
          },
          {
            img: require('../../../assets/img/menu/menutab/youliao.svg'),
            title: "超有料家族"
          },
          {
            img: require('../../../assets/img/menu/menutab/naicha.svg'),
            title: "超赞奶茶"
          },
          {
            img: require('../../../assets/img/menu/menutab/kafei.svg'),
            title: "甄选咖啡"
          },
          {
            img: require('../../../assets/img/menu/menutab/chuncha.svg'),
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
