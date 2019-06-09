// 这是商品列表模块

export default {
  namespaced: true,
  state: {
    goods: [] // 这是商品数据
  },

  mutations: {
    setGoods (state, goods) {
      state.goods = goods
    }
  },
  actions: {
    getGoods ({ commit }) {
      fetch('http://localhost:3000/goods')
        .then(response => response.json())
        .then(res => {
          console.log(res)
          commit('setGoods', res)
        })
    }
  }
}
