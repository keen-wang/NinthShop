<template lang='pug'>
.login-wrap
  .login-header
    img.img-logo(src='./app-logo.png', alt='')
  cube-tab-bar(
    v-model="activeTab"
    :data="tabs"
    @change="changeTab")
  cube-button(@click="showDialog") show dialog
</template>

<script>
/** */
export default {
  name: '',
  data () {
    return {
      activeTab: '密码登录',
      tabs: [{
        label: '密码登录'
      }, {
        label: '注册账号'
      }]
    }
  },
  methods: {
    showDialog () {
      this.$createDialog({
        type: 'alert',
        title: 'Alert',
        content: 'dialog content'
      }).show()
    },
    changeTab (label) {
      console.log(this.activeTab, label)
    }
  }
}
</script>

<style lang='sass' scoped>
.login-wrap
  width: 350px
  height: 417px
  padding: 40px
  .login-header
    width: 100%
    margin-top: 20px
    margin-bottom: 30px
    img
      width: 290px
      display: block
</style>
