import Vue from 'vue'
import Vuex from 'vuex'

// 安装插件
Vue.use(Vuex)

// 创建store对象
const state = {
  totalTid: []
}

const store = new Vuex.Store({
  state,
  mutations: {
    settotalTid(state, data) {
      state.totalTid = data
    }
  },
  getters: {
    getotalTid(state) {
      return state.totalTid
    }
  },
  actions: {

  }
})

// 3.挂载Vuex实例
export default store

