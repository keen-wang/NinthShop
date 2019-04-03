/**
 * 路由器对象模块
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Msite from '../pages/Msite'
import Order from '../pages/Order'
// 声明使用插件
Vue.use(VueRouter)

export default new VueRouter({
  // 所有路由
  routes: [
    {
      path: '/home',
      component: Msite
    },
    {
      path: '/order',
      component: Order
    },
    {
      path: '/',
      redirect: '/home'
    }
  ]
})
