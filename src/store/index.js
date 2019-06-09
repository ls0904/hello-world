import Vue from 'vue'
import Vuex from 'vuex'

import todo from './todo/index'
import good from './good/index'
import card from './card/index'
// 仓库总模块
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    todo,
    good,
    card,
    a: {
      namespaced: true,
      state: {
        name: 'mA'
      },
      getters: {
        firstName (state) {
          return state.name.split('')[1]
        }
      }
    },
    b: {
      namespaced: true,
      state: {
        name: 'mb'
      },
      getters: {
        firstName (state) {
          return state.name.split('')[1]
        }
      }
    }
  }
})
