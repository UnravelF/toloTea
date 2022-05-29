import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/home/Home')
const Menu = () => import('../views/menu/Menu')
const Order = () => import('../views/order/Order')
const Profile = () => import('../views/profile/Profile')

// 安装插件
Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push
// 修改 原型对象中的push方法
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err=>err)
}


const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/menu',
    component: Menu
  },
  {
    path: '/order',
    component: Order
  },
  {
    path: '/profile',
    component: Profile
  }
]
// 创建路由对象
const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
