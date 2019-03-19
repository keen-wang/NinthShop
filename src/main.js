import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.devtools = true
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router
  // components: {
  //   App
  // },
  // template: `<App/>`
})
