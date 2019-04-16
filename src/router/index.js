/**
 * 路由器对象模块
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Msite from '../pages/Msite'
import Order from '../pages/Order'
import Profile from '../pages/Profile'
import Login from '../pages/Login'
import AddressManager from '../pages/Profile/AddressManager'
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
      path: '/profile',
      component: Profile,
      children: [
        {
          path: 'address',
          component: AddressManager
        },
        {
          path: '',
          component: Profile
        }
      ]
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/',
      redirect: '/home'
    }
  ]
})
