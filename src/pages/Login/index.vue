<template lang='pug'>
.login-wrap
  .login-frame
    .login-header
      img.img-logo(src='./app-logo.png', alt='')
    cube-tab-bar.tab-bar(
      v-model="activeTab"
      :data="tabs"
      :showSlider="true"
      :useTransition="true"
      @change="changeTab")
    FormRegister(v-if="activeTab==='register'")
    FormLogin(v-else)
</template>

<script>
/**
*@name  登录页面 */
import FormLogin from './FormLogin'
import FormRegister from './FormRegister'
export default {
  name: 'Login',
  components: {
    FormLogin,
    FormRegister
  },
  data () {
    return {
      // tab选项卡
      activeTab: 'login',
      tabs: [
        {
          label: '密码登录',
          value: 'login'
        }, {
          label: '注册账号',
          value: 'register'
        }
      ]
    }
  },
  methods: {
    changeTab (label) {
      console.log(this.activeTab, label)
    }
  }
}
</script>

<style lang='sass' scoped>
.login-wrap
  width: 100%
  height: 100%
  background: #fff
  .login-frame
    width: 100%
    max-width: 350px
    padding: 40px 0
    margin: auto
    .login-header
      width: 100%
      margin-top: 20px
      margin-bottom: 30px
      img
        width: 100%
        max-width: 290px
        display: block
        margin: auto
  .tab-bar
    margin-bottom: 20px
</style>
