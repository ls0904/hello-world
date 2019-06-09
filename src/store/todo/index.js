// todo仓库模块
const state = {
  inputVal: '',
  todos: [] // 这是todo数据

}
const getters = {

}

const mutations = {
  chgInputVal (state, payload) {
    state.inputVal = payload
  },
  initTodo (state, todos) {
    state.todos = todos
  },
  addTodo (state) {
    let todo = {
      name: state.inputVal
    }
    state.todos.push(todo)
  },

  delTodo (state, payload) {
    // let index = payload.index
    // state.todos.splice(index, 1)
    let index = state.todos.findIndex(item => item.id === payload)
    state.todos.splice(index, 1)
  }
}

const actions = {
  fn1 ({ state, commit }) {
    // 1、ajax请求
    fetch('http://localhost:3000/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: state.inputVal })
    })
      .then(response => response.json())
      .then(res => {
      // console.log(res)
        commit({
          type: 'addTodo'

        })
      })
  },
  // 初始化todos数据
  initTodos ({ commit }) {
    fetch('http://localhost:3000/todos')
      .then(response => response.json())
      .then(res => {
        console.log(res)
        commit('initTodo', res)
      })
  },
  // 删除某条todo
  delTodo ({ commit, state }, todo) {
    // 将现在仓库的数据存储起来
    let newTodos = [...state.todos]
    commit('delTodo', todo.id)
    fetch(`http://localhost:3000/todos/${todo.id}`, {
      method: 'delete'
    }).then(response => response.json())
      .then(res => {
        console.log(res)
      })
      .catch(error => {
      // 删除失败
        console.log(error.message)
        commit('initTodo', newTodos)
      })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
