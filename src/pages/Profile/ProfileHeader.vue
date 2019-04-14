<template lang='pug'>
.header-wrap
  .profile-header
    .user-head
      img(:src='defaultHead')
    .user-info
      .user-name(@click='toLoginPage') {{userinfo.username||'登录/注册'}}
      .user-phone
        i.iconfont.icon-phone
        span {{userinfo.tell || '暂无绑定手机号'}}
  .profile-balance
    span.balance-label 钱包：
    span.balance-value {{userinfo.balance|moneny}}
</template>

<script>
/** */
import defaultHead from './img/user_head.jpg'

export default {
  name: 'ProfileHeader',
  props: {
    userinfo: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data () {
    return {
      defaultHead
    }
  },
  methods: {
    toLoginPage () {
      if (this.userinfo.userid || this.userinfo.userid === 0) return
      this.$router.push('/login')
    }
  },
  filters: {
    moneny (val) {
      return '￥' + ((val || val === 0) ? val.toFixed(2) : '-')
    }
  }
}
</script>

<style lang='sass' scoped>
.header-wrap
  .profile-header
    background-color: #1abc9c
    overflow: hidden
    padding: 20px 10px
    .user-head,.user-info
      float: left
    .user-head
      width: 66px
      height: 66px
      background-color: red
      border-radius: 35px
      overflow: hidden
      img
        width: 100%
        height: 100%
    .user-info
      width: calc(100% - 85px)
      margin-left: 15px
      margin-top: 6px
      color: #fff
      .user-name
        font-size: 6vw
        padding: 8px 0
      .user-phone, i
        font-size: 4vw
  .profile-balance
    width: 100%
    height: 50px
    background-color: #fff
    text-align: center
    line-height: 50px
    border-bottom: 1px solid #ddd
    .balance-label
      color: #555
      font-size: 5vw
      display: inline-block
      margin-right: 15px
    .balance-value
      color: #1abc9c
      font-size: 5vw
</style>
