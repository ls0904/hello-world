<template>
  <div>
    <h1>Page1</h1>
    {{ name }}
    <p>我当前page1组件自己的计算属性 {{ firstName }}</p>
    <p>仓库中的title: {{ title }}</p>
    <p>仓库中的firstTitle: {{ firstTitle }}</p>
    <p>仓库中的lastTitle: {{ lastTitle }}</p>
    <button @click="chgTitle({ name: '鸡-你太美'})">修改title为 鸡你太美</button>
  </div>
</template>

<script>
import bus from '../untils/eventBus'
import { mapState,mapGetters,mapMutations } from 'vuex'
export default {
  data () {
    return {
      name: '张三'
    }
  },
  // computed: mapState(['title']),
  // computed: mapState({
  //   // papg1Title: state =>state.title
  //   // page1Title: 'title'
  //   page1Title (state){
  //     return state.title
  //   }
  // }),
  computed: {
    ...mapState(['title']),
    ...mapGetters(['firstTitle','lastTitle']),
    firstName () {
      return this.name.split('')[0]
    }
  },
  methods: {
    chgTitle (payload) {
      this.$store.commit({
        type: 'chgTitle',
        ...payload
      })
    },
    // fn1 () {
      // this.chgTitle({ name: '只因你-太美'})
      // console.log(this.title);
      // this.$store.commit('chgTitle','只因-你太美')
      // this.$store.commit({
      //   type:'chgTitle',
      //   name: '只因-你太美'
      // })
    // }
  },
  created () {

  }
}
</script>
