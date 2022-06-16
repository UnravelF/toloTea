<template>
  <scroll id="menu-tab">
    <div class="menu-list">
      <div class="menu-list-item"
          v-for="(item, index) in categories"
          :key="index">
          <img src="~assets/img/menu/menu-icon.png" alt="">
          <span>{{item.title}}</span>
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
            title: "新品来袭"
          },{
            title: "双炫冰淇淋"
          },{
            title: "鲜冰淇淋"
          },{
            title: "限定套餐"
          },{
            title: "真鲜果茶"
          },{
            title: "醇香奶茶"
          },{
            title: "鲜萃咖啡"
          },{
            title: "芝士奶盖"
          },{
            title: "原叶纯茶"
          },
        ]
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
  }

  .menu-list-item {
    height: 80px;
    line-height: 80px;
    text-align: center;
    vertical-align: middle;
    font-size: 14px;
  }

  .menu-list-item img {
    display: block;
    width: 30px;
    height: 30px;
  }

  .menu-list-item span {
    
  }
</style>
