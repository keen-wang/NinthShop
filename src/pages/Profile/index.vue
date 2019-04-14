<template lang='pug'>
.profile-wrap
  ProfileHeader(:userinfo='userinfo')
  .menu-wrap(v-if="userinfo.username")
    ul.menu-list
      li.menu-item(v-for="item in usermenu")
        i.iconfont(:class="'icon-'+item.icon")
        span {{item.label}}
    ul.menu-list
      li.menu-item(v-for="item in systemmenu")
        i.iconfont(:class="'icon-'+item.icon")
        span {{item.label}}
    cube-button.exit-btn(
      :light="true"
      @click="logout") 退出登录
</template>

<script>
/**
 * @name 个人主页
 */
import { mapState } from 'vuex'
import ProfileHeader from './ProfileHeader'
export default {
  name: 'profile',
  components: {
    ProfileHeader
  },
  data () {
    return {
      usermenu: [
        {
          label: '个人信息',
          icon: 'userinfo'
        },
        {
          label: '收货地址',
          icon: 'address'
        }
      ],
      systemmenu: [
        {
          label: '用户指南',
          icon: 'help'
        },
        {
          label: '关于服务',
          icon: 'about'
        }
      ]
    }
  },
  computed: {
    ...mapState(['userinfo'])
  },
  methods: {
    logout () {
      this.$createDialog({
        type: 'confirm',
        icon: 'cubeic-alert',
        title: '提示',
        content: '是否退出登录状态',
        confirmBtn: {
          text: '确定',
          active: true,
          disabled: false,
          href: 'javascript:;'
        },
        cancelBtn: {
          text: '取消',
          active: false,
          disabled: false,
          href: 'javascript:;'
        },
        onConfirm: () => {
          this.$store.dispatch('logout')
        }
      }).show()
    }
  }
}
</script>

<style lang='sass' scoped>
.profile-wrap
  width: 100%
  height: calc(100% - 50px)
  background: #f5f5f5
  overflow: auto
  .menu-list
    width: 100%
    margin-top: 10px
    border-top: 1px solid #ddd
    .menu-item
      height: 14vw
      background: #fff
      border-bottom: 1px solid #ddd
      line-height: 14vw
      font-size: 4.2vw
      color: #555
      vertical-align: middle
      i
        display: inline-block
        padding: 0 10px
        color: #1abc9c
        font-size: 5vw
  .exit-btn
    margin-top: 10px
    color: #ef7474
</style>
