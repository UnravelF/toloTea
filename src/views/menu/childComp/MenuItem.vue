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
          <div class="add-car" @click="addCart">选规格</div>
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
        // 模拟数据
        Data: [
          {
            refName: 'item1',
            title: '店长推荐',
            itemData:[
              {
                pic: require('../../../assets/img/menu/item/tui1.jpg'),
                itemTitle: '嫩仙草牛乳冰',
                itemMessage: '配料：现熬仙草冻×清凉糖浆×葡萄干×珍珠×红豆×花生碎',
                price: '13'
              }
            ]
          },
          {
            refName: 'item2',
            title: '必喝热销榜',
            itemData: [
              {
              pic: require('../../../assets/img/menu/item/bi1.jpg'),
              itemTitle: '百香果金菠萝',
              itemMessage: '金菠萝×柠檬×百香果×毛峰茉莉绿茶',
              price: '13'
              },
              {
              pic: require('../../../assets/img/menu/item/bi2.jpg'),
              itemTitle: '厚芋泥啵啵奶茶',
              itemMessage: '荔浦芋泥×波波×奶茶 每日现煮荔浦芋泥滑入丝滑奶茶中',
              price: '13'
              },
              {
              pic: require('../../../assets/img/menu/item/bi3.jpg'),
              itemTitle: '杨枝甘露清爽板',
              itemMessage: '芒果×西柚粒×小多肉×大多肉×椰奶',
              price: '17'
              }
            ]
          },
          {
            refName: 'item3',
            title: '超嗲水果茶',
            itemData: [
              {
                pic: require('../../../assets/img/menu/item/chao1.jpg'),
                itemTitle: '爆柠草莓金菠萝',
                itemMessage: '金菠萝×草莓×柠檬×绿茶 人气网红番茄蛋花汤',
                price: '18'
              },
              {
                pic: require('../../../assets/img/menu/item/chao2.jpg'),
                itemTitle: '西瓜冻冻',
                itemMessage: '西瓜×冻冻×绿茶',
                price: '12'
              },
              {
                pic: require('../../../assets/img/menu/item/chao3.jpg'),
                itemTitle: '超赞西瓜桶',
                itemMessage: '当季西瓜×毛峰茉莉',
                price: '16'
              }
            ]
          },
          {
            refName: 'item4',
            title: '超顶刺梨',
            itemData: [
              {
                pic: require('../../../assets/img/menu/item/cili1.jpg'),
                itemTitle: '刺梨鸭屎香',
                itemMessage: '鲜榨刺梨汁×鸭屎香鲜茶×当季柠檬',
                price: '18'
              },
              {
                pic: require('../../../assets/img/menu/item/cili2.jpg'),
                itemTitle: '刺梨维C皇(袋装)',
                itemMessage: '双倍鲜榨刺梨汁×当季柠檬×爽口冻冻',
                price: '17'
              }
            ]
          },
          {
            refName: 'item5',
            title: '超爽鲜柠',
            itemData: [
              {
                pic: require('../../../assets/img/menu/item/xianning1.jpg'),
                itemTitle: '鸭香柠檬茶',
                itemMessage: '柠檬×鸭屎香茶',
                price: '14'
              },
              {
                pic: require('../../../assets/img/menu/item/xianning2.jpg'),
                itemTitle: '鲜柠加油柑',
                itemMessage: '柠檬×油柑汁×毛峰茉莉绿茶',
                price: '15'
              },
              {
                pic: require('../../../assets/img/menu/item/xianning3.jpg'),
                itemTitle: '鲜柠生打椰',
                itemMessage: '生椰乳×新鲜柠檬',
                price: '16'
              }
            ]
          }
        ],
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
        // this.refresh()
        this.getItemTopY()
      },
      // 添加购物车
      addCart() {
        // 拿商品id位置  传到Menu
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
