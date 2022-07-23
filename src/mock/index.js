import Mock from 'mockjs'

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

