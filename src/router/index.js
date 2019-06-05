import Vue from 'vue'
import VueRouter from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import Index from '../views/Index/index.vue'
import Detail from '../views/Detail/index.vue'
import About from '../views/Index/about.vue'
import Home from '../views/Index/home.vue'
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Index,
      children: [
        {
          path: 'home',
          component: Home
        },
        {
          path: 'about',
          component: About
        },
        {
          path: '',
          redirect: '/home'
        }
      ]
    },
    {
      path: '/detail',
      component: Detail,
      beforeEnter: (to,from,next) =>{
        console.log('详情独享');
        next()
      }
    }
  ]
})

/**
 * 全局前置守卫
 * 接收一个函数，函数中有三个参数：
 */
router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})
// 后置守卫没有next
router.afterEach((to, from) => {
  setTimeout(() =>{
    NProgress.done()
  },2000)
  console.log('后置')
})

export default router
