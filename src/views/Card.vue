<template>
  <div>
    <h1>我是购物车首页</h1>
    <ul>
      <li
      v-for="item in cards"
      :key="item.id"
      >
        {{ item.name }} - {{ item.price }} - {{ item.nums}}
      </li>
    </ul>
    <p>总价是：{{ cardTotal }} </p>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  computed: {
    ...mapState('card', ['cards']),
    ...mapGetters('card', ['cardTotal'])
  }
}
</script>
