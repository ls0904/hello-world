import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 创建 仓库的实例对象
const store = new Vuex.Store({

  // 仓库的选项对象 数据or状态
  state: {
    title: 'hello-world'
  },

  getters: {
    firstTitle (state) {
      return state.title.split('-')[0]
    },
    lastTitle (state) {
      return state.title.split('-')[1]
    }
  },

  mutations: {
    chgTitle (state,payload) {
      state.title = payload.name
    }
  },

  actions: {

  }

  // modules: {

  // }
})
export default store
