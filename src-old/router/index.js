import Vue from 'vue'
import VueRouter from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import Index from '../views/Index/index.vue'
import Detail from '../views/Detail/index.vue'
import About from '../views/Index/about.vue'
import Home from '../views/Index/home.vue'
import Center from '../views/Index/center.vue'
import Card from '../views/Card/index.vue'
import Money from '../views/Money/index.vue'
import Login from '../views/Login/index.vue'
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
          path: 'center',
          component: Center
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
      beforeEnter: (to, from, next) => {
        console.log('详情独享')
        next()
      },
      meta: {
        requireLogin: true
      }
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/card',
      component: Card,
      meta: {
        requireLogin: true
      }
      // beforeEnter: (to, from, next) => {
      //   // 判断是否有登录
      //   if (localStorage.getItem('userInfo')) {
      //     // 有登录
      //     next()
      //   } else {
      //     // next('/login')
      //     // 没有登录
      //     next({
      //       path: '/login',
      //       query: {
      //         redirect: to.fullPath
      //         // fullPath可以带URL传递过去的参数
      //       }
      //     })
      //   }
      // }
    },
    {
      path: '/money',
      component: Money,
      meta: {
        requireLogin: true
      }
      // beforeEnter: (to, from, next) => {
      //   // 判断是否有登录
      //   if (localStorage.getItem('userInfo')) {
      //     // 有登录
      //     next()
      //   } else {
      //     // next('/login')
      //     // 没有登录
      //     next({
      //       path: '/login',
      //       query: {
      //         redirect: to.fullPath
      //         // fullPath可以带URL传递过去的参数
      //       }
      //     })
      //   }
      // }
    }

  ]
})

/**
 * 全局前置守卫
 * 接收一个函数，函数中有三个参数：
 */
router.beforeEach((to, from, next) => {
  NProgress.start()
  // 路由拦截
  if (to.meta.requireLogin) {
    if (localStorage.getItem('userInfo')) {
      next()
    } else {
      // next('/login')
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
          // fullPath可以带URL传递过去的参数
        }
      })
    }
  } else {
    next()
  }
})
// 后置守卫没有next
router.afterEach((to, from) => {
  setTimeout(() => {
    NProgress.done()
  }, 2000)
  console.log('后置')
})
export default router
