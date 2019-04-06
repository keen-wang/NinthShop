import Vue from 'vue'
import App from './App.vue' // 入口文件
import router from './router' // 路由组成
import api from './api' // 接口api
import store from './store' // vuex状态
import Cube from 'cube-ui' // vue-cli组件库

Vue.use(api)
Vue.use(Cube)

Vue.config.devtools = true
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router, // Vue-router
  store // 所有的组件对象多了一个属性: $store
  // components: {
  //   App
  // },
  // template: `<App/>`
})
