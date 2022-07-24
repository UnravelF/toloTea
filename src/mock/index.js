import Mock from 'mockjs'


// 根据url获取query参数
const getQuery = (url, name) => {
  // console.log(url, name)
  const index = url.indexOf('?')
  if(index !== -1) {
    const queryStrArr = url.substr(index+1).split('&')
    for(var i = 0;i < queryStrArr.length;i++) {
      const itemArr = queryStrArr[i].split('=')
      if(itemArr[0] === name) {
        return itemArr[1]
      }
    }
  }
  return null
}

// 1. 首页模拟数据
// 轮播图数据
var imgs = [
  {pic: require('../assets/img/home/swiper/swiper2.jpg')},
  {pic: require('../assets/img/home/swiper/swiper1.jpg')},
  {pic: require('../assets/img/home/swiper/swiper3.jpg')},
  {pic: require('../assets/img/home/swiper/swiper4.jpg')},
  {pic: require('../assets/img/home/swiper/swiper5.jpg')}
]

// 获取home首页轮播图数据
Mock.mock('/home/banner', 'get', () => {
  return {
    status: 200,
    message: '获取轮播图数据成功',
    data: imgs,
    total: imgs.length
  }
})

// 底部图标数据
var footerImgs = [
  {pic: require('../assets/img/home/banner-1.jpg')},
  {pic: require('../assets/img/home/banner-2.jpg')},
  {pic: require('../assets/img/home/banner-3.jpg')},
]

// 获取home底部图片数据
Mock.mock('/home/footer', 'get', () => {
  return {
    status: 200,
    message: '获取底部图标数据成功',
    data: footerImgs,
    total: footerImgs.length
  }
})



// 2. 点餐模拟数据
// tab导航栏模拟数据
const categories = [
  {
    img: require('../assets/img/menu/menutab/tuijian.svg'),
    title: "店长推荐"
  },
  {
    img: require('../assets/img/menu/menutab/bihe.svg'),
    title: "必喝热销榜"
  },
  {
    img: require('../assets/img/menu/menutab/shuiguo.svg'),
    title: "超嗲水果茶"
  },
  {
    img: require('../assets/img/menu/menutab/lizi.svg'),
    title: "超顶刺梨"
  },
  {
    img: require('../assets/img/menu/menutab/ningmeng.svg'),
    title: "超爽鲜柠"
  },
  {
    img: require('../assets/img/menu/menutab/youliao.svg'),
    title: "超有料家族"
  },
  {
    img: require('../assets/img/menu/menutab/naicha.svg'),
    title: "超赞奶茶"
  },
  {
    img: require('../assets/img/menu/menutab/kafei.svg'),
    title: "甄选咖啡"
  },
  {
    img: require('../assets/img/menu/menutab/chuncha.svg'),
    title: "原叶纯茶"
  },
]

// 获取tab分类导航栏数据
Mock.mock('/menu/menutab', 'get', () => {
  return {
    status: 200,
    message: '获取tab栏数据成功',
    data: categories,
    total: categories.length
  }
})

// 点餐茶品数据
const teaItem = [
  {
    refName: 'item1',
    title: '店长推荐',
    itemData:[
      {
        tid: 1,
        pic: require('../assets/img/menu/item/tui1.jpg'),
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
        tid: 2,
        pic: require('../assets/img/menu/item/bi1.jpg'),
        itemTitle: '百香果金菠萝',
        itemMessage: '金菠萝×柠檬×百香果×毛峰茉莉绿茶',
        price: '13'
      },
      {
        tid: 3,
        pic: require('../assets/img/menu/item/bi2.jpg'),
        itemTitle: '厚芋泥啵啵奶茶',
        itemMessage: '荔浦芋泥×波波×奶茶 每日现煮荔浦芋泥滑入丝滑奶茶中',
        price: '13'
      },
      {
        tid: 4,
        pic: require('../assets/img/menu/item/bi3.jpg'),
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
        tid: 5,
        pic: require('../assets/img/menu/item/chao1.jpg'),
        itemTitle: '爆柠草莓金菠萝',
        itemMessage: '金菠萝×草莓×柠檬×绿茶 人气网红番茄蛋花汤',
        price: '18'
      },
      {
        tid: 6,
        pic: require('../assets/img/menu/item/chao2.jpg'),
        itemTitle: '西瓜冻冻',
        itemMessage: '西瓜×冻冻×绿茶',
        price: '12'
      },
      {
        tid: 7,
        pic: require('../assets/img/menu/item/chao3.jpg'),
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
        tid: 8,
        pic: require('../assets/img/menu/item/cili1.jpg'),
        itemTitle: '刺梨鸭屎香',
        itemMessage: '鲜榨刺梨汁×鸭屎香鲜茶×当季柠檬',
        price: '18'
      },
      {
        tid: 9,
        pic: require('../assets/img/menu/item/cili2.jpg'),
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
        tid: 10,
        pic: require('../assets/img/menu/item/xianning1.jpg'),
        itemTitle: '鸭香柠檬茶',
        itemMessage: '柠檬×鸭屎香茶',
        price: '14'
      },
      {
        tid: 11,
        pic: require('../assets/img/menu/item/xianning2.jpg'),
        itemTitle: '鲜柠加油柑',
        itemMessage: '柠檬×油柑汁×毛峰茉莉绿茶',
        price: '15'
      },
      {
        tid: 12,
        pic: require('../assets/img/menu/item/xianning3.jpg'),
        itemTitle: '鲜柠生打椰',
        itemMessage: '生椰乳×新鲜柠檬',
        price: '16'
      }
    ]
  }
]

// 获取menu茶品数据
Mock.mock('/menu/menuitem', 'get', () => {
  return {
    status: 200,
    message: '获取茶品数据成功',
    data: teaItem,
    total: teaItem.length
  }
})

// 商品数据
const itemData = [
  {
    tid: 1,
    pic: require('../assets/img/menu/item/tui1.jpg'),
    itemTitle: '嫩仙草牛乳冰',
    itemMessage: '配料：现熬仙草冻×清凉糖浆×葡萄干×珍珠×红豆×花生碎',
    price: '13'
  },
  {
    tid: 2,
    pic: require('../assets/img/menu/item/bi1.jpg'),
    itemTitle: '百香果金菠萝',
    itemMessage: '金菠萝×柠檬×百香果×毛峰茉莉绿茶',
    price: '13'
  },
  {
    tid: 3,
    pic: require('../assets/img/menu/item/bi2.jpg'),
    itemTitle: '厚芋泥啵啵奶茶',
    itemMessage: '荔浦芋泥×波波×奶茶 每日现煮荔浦芋泥滑入丝滑奶茶中',
    price: '13'
  },
  {
    tid: 4,
    pic: require('../assets/img/menu/item/bi3.jpg'),
    itemTitle: '杨枝甘露清爽板',
    itemMessage: '芒果×西柚粒×小多肉×大多肉×椰奶',
    price: '17'
  },
  {
    tid: 5,
    pic: require('../assets/img/menu/item/chao1.jpg'),
    itemTitle: '爆柠草莓金菠萝',
    itemMessage: '金菠萝×草莓×柠檬×绿茶 人气网红番茄蛋花汤',
    price: '18'
  },
  {
    tid: 6,
    pic: require('../assets/img/menu/item/chao2.jpg'),
    itemTitle: '西瓜冻冻',
    itemMessage: '西瓜×冻冻×绿茶',
    price: '12'
  },
  {
    tid: 7,
    pic: require('../assets/img/menu/item/chao3.jpg'),
    itemTitle: '超赞西瓜桶',
    itemMessage: '当季西瓜×毛峰茉莉',
    price: '16'
  },
  {
    tid: 8,
    pic: require('../assets/img/menu/item/cili1.jpg'),
    itemTitle: '刺梨鸭屎香',
    itemMessage: '鲜榨刺梨汁×鸭屎香鲜茶×当季柠檬',
    price: '18'
  },
  {
    tid: 9,
    pic: require('../assets/img/menu/item/cili2.jpg'),
    itemTitle: '刺梨维C皇(袋装)',
    itemMessage: '双倍鲜榨刺梨汁×当季柠檬×爽口冻冻',
    price: '17'
  },
  {
    tid: 10,
    pic: require('../assets/img/menu/item/xianning1.jpg'),
    itemTitle: '鸭香柠檬茶',
    itemMessage: '柠檬×鸭屎香茶',
    price: '14'
  },
  {
    tid: 11,
    pic: require('../assets/img/menu/item/xianning2.jpg'),
    itemTitle: '鲜柠加油柑',
    itemMessage: '柠檬×油柑汁×毛峰茉莉绿茶',
    price: '15'
  },
  {
    tid: 12,
    pic: require('../assets/img/menu/item/xianning3.jpg'),
    itemTitle: '鲜柠生打椰',
    itemMessage: '生椰乳×新鲜柠檬',
    price: '16'
  }
]

// 点击选规格获取数据
Mock.mock(/\/menu\/menu\/item/, 'get', (options) => {
  // 从地址中截取tid
  const tid = parseInt(getQuery(options.url, 'id'))
  // 从茶品数据中查找对应id的商品
  const item = itemData.find(item => {
    return item.tid === tid
  })

  return {
    status: 200,
    message: '查询商品成功',
    data: item
  }
})

// 3. 订单模拟数据
