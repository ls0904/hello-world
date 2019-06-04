import Vue from 'vue'
import VueRouter from 'vue-router'
import Page1 from '../views/Page1.vue'
import Page2 from '../views/Page2.vue'
import Detail from '../views/Detail.vue'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Admin from '../views/Admin.vue'
import Left from '../views/Left.vue'
import Right from '../views/Right.vue'
// 2、使用VueRouter 插件
Vue.use(VueRouter)
// 3、配置路由规则 [{},{},{}]
const routes = [
  {
    path: '/home',
    component: Home,
    children: [
      {
        path: 'page1',
        name: 'page1',
        component: Page1
      },
      {
        path: 'page2',
        name: 'page2',
        component: Page2
      },
      {
        path: '',
        redirect: '/home/page1'
      }
    ]
  },
  {
    // 通过：来指定后面的id是动态路由参数
    path: '/detail/:id/:name',
    name: 'detail',
    component: Detail,
    props: (route) => {
      return {
        abc: route.query.abc,
        id: route.params.id,
        name: route.params.name
      }
    }
  },
  {
    path: '/login',
    alias: '/hhhh',
    component: Login
  },
  {
    path: '/admin',
    component: Admin,
    children: [
      {
        path: 'add',
        components: {
          default: Page1,
          aleft: Left,
          aright: Right
        }
      },
      {
        path: 'del',
        components: {
          aleft: {
            render (h) {
              return h('p', 'ppp-left')
            }
          },
          aright: {
            render (h) {
              return h('p', 'ppp-right')
            }
          }
        }
      }
    ]
  },
  {
    path: '*',
    redirect: '/home/page1'
  }

]
// 4、实例化路由器对象
const router = new VueRouter({
  routes
})
// 5、将第四步中的东西暴露出去
export default router
