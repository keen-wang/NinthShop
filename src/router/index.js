/**
 * 路由器对象模块
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home'
import Order from '../pages/Order'
import Profile from '../pages/Profile'
import Login from '../pages/Login'
import AddressManager from '../pages/Profile/AddressManager'
import Category from '../pages/Home/Category'
import ShopInfo from '../pages/Home/ShopInfo'
import PlaceOrder from '../pages/Home/PlaceOrder'
// 声明使用插件
Vue.use(VueRouter)

export default new VueRouter({
  // 所有路由
  routes: [
    {
      path: '/home',
      component: Home,
      children: [
        {
          name: 'category',
          path: 'category',
          component: Category
        },
        {
          path: '',
          component: Home
        }
      ]
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
      path: '/shop',
      component: ShopInfo
    },
    {
      path: '/checkout',
      component: PlaceOrder
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
