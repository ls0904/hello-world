<template>
  <div id="app">
    <input type="text" v-model='list' ref='myList'>
    <button @click="addTo">添加</button>
    <ul>
      <li v-for="(todo,index) in todos" :key='todo.id'>

        {{ todo.name  }} --- <button @click="delTo(index)" class="del">删除</button>
      </li>
    </ul>
  </div>
</template>
<script>
import axios from 'axios'

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
      if (this.list) {
        this.todos.push({ name: this.list })
        this.list = ''
        this.$refs['myList'].focus()
      }
    },
    delTo (index) {
      this.todos.splice(index, 1)
    }
  },
  created () {
    axios.get('http://localhost:8080/api/todos.json')
      .then(response => {
        let res = response.data
        if (res.code === 0) {
          this.todos = res.data
        } else {
          alert(res.msg)
        }
        console.log(response)
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
