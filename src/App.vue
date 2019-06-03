<template>
  <div id="app">
    <input type="text" v-model='list' ref='myList'>
    <button @click="addTo">添加</button>
    <ul>
      <li v-for="(todo,index) in todos" :key='todo.id'>

        {{ todo.name  }} --- <button @click="delTo(index,todo.id)" class="del">删除</button>
      </li>
    </ul>
  </div>
</template>
<script>
// import axios from 'axios'

export default {
  name: 'app',
  data () {
    return {
      list: '',
      todos: [

      ]
    }
  },
  methods: {
    addTo () {
      let obj = {
        name: this.list
      }

      this.$http.post('/todos', obj)
        .then(res => {
          this.todos.push(res)
        }).catch(err => {
          alert(err.msg);
        })
      this.list = ''
      this.$refs['myList'].focus()
    },
    delTo (index, id) {
      this.$http.delete(`/todos/${id}`)
        .then(res => {
          this.todos.splice(index, 1)
        }).catch(err => {
          alert('删除失败', err.message)
        }
        )
    }
  },
  created () {
    this.$http.get('/todos')
      .then(res => {
        console.log(res)
        this.todos = res
      })
  }
}
</script>

<style lang='less'>
.del{
  background: red;
  border:none;
  cursor: pointer;
}
</style>
