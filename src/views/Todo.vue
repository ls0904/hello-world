<template>
  <div>
    a - {{  $store.state.a.name }}
    b - {{  $store.state.b.name }}
    {{ firstName }}
    <hr >
    <input type="text" v-model="inputVal">
    <button @click="fn1">ADD</button>
    <ul>
      <TodoItem
      v-for='(item,index) in todos'
      :key="index"
      :todo='item'
      :index="index"></TodoItem>
    </ul>
    <hr>
    <h1>--下面的是商品列表--</h1>
    <Ul>
      <li
      v-for="item in goods"
      :key='item.id'
      >
        {{ item.id }} - {{ item.name}}
        <button>-</button>
        <button @click="addCard(item)">+</button>
      </li>
    </Ul>
    <router-link to="/card">去购物车页面</router-link>
  </div>
</template>
<script>
import TodoItem from './TodoItem'
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex' // eslint-disable-line
export default {
  computed: {
    // ...mapState(['inputVal', 'todos', 'goods']),
    ...mapState('todo', ['inputVal', 'todos']),
    ...mapState('good', ['goods']),
    ...mapGetters('a', ['firstName']),
    ...mapGetters('b', ['firstName']),
    inputVal: {
      get () {
        return this.$store.state.inputVal
      },
      set (value) {
        this.$store.commit('todo/chgInputVal', value)
      }
    }
  },
  methods: {
    ...mapMutations('card', ['addCard']),
    // ...mapActions(['fn1', 'initTodos', 'getGoods'])
    ...mapActions('todo', ['fn1', 'initTodos']),
    ...mapActions('good', ['getGoods'])
  },
  created () {
    this.initTodos()
    this.getGoods()
  },
  components: {

    TodoItem
  }
}
</script>
