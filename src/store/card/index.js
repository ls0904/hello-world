// 这是购物车列表模块

export default {
  namespaced: true,
  state: {
    cards: [] // 购物车数据
  },
  getters: {
    // 获取购物车总价
    cardTotal (state) {
      let cardtotal = 0
      state.cards.forEach(item => {
        cardtotal += item.nums * item.price
      })
      return cardtotal
    }
  },
  mutations: {
    // 添加商品
    addCard (state, good) {
      let id = good.id
      let index = state.cards.findIndex(good => good.id === id)
      if (index >= 0) {
        state.cards[index].nums += 1
      } else {
        // eslint-disable-next-line standard/object-curly-even-spacing
        state.cards.push({ ...good, nums: 1 })
      }
    }
  }
}
