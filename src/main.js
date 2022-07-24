import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'assets/font/iconfont.css'
import './mock/index'
import store from './store'

Vue.config.productionTip = false

// 为事件总线$bus赋值为Vue实例 $bus默认underfined
Vue.prototype.$bus = new Vue()

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')