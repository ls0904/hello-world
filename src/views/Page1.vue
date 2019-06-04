<template>
  <div>
    <h1>Page1 -- 商品列表</h1>
    <ul>
      <li
        v-for='todo in todos'
        :key='todo.id'
      >
      <router-link :to="`/detail/${todo.id}/${todo.name}`">
        {{ todo.name }}
      </router-link>

      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {
      todos: [
        { id: 1, name: ' apple' },
        { id: 2, name: ' banana' },
        { id: 3, name: ' orange' }
      ]
    }
  }
}
</script>
