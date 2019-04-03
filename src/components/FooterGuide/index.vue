<template lang="pug">
.footer_guide
  span.guide_item(:class="{on: '/home'===$route.path}", @click="goTo('/home')")
    span.item_icon
      i.iconfont.icon-home
    span 首页
  //- span.guide_item(:class="{on: '/search'===$route.path}", @click="goTo('/search')")
    span.item_icon
      i.iconfont.icon-search
    span 搜索
  span.guide_item(:class="{on: '/order'===$route.path}", @click="goTo('/order')")
    span.item_icon
      i.iconfont.icon-order
    span 订单
  span.guide_item(:class="{on: '/profile'===$route.path}", @click="goTo('/profile')")
    span.item_icon
      i.iconfont.icon-profile
    span 我的
</template>

<script>
export default {
  methods: {
    goTo (path) {
      this.$router.replace(path)
    }
  }
}
</script>

<style lang="sass" rel="stylesheet/stylus">
  .footer_guide  //footer
    position: fixed
    z-index: 100
    left: 0
    right: 0
    bottom: 0
    background-color: #fff
    width: 100%
    height: 50px
    display: flex
    position: relative
    &::before
      content: ''
      position: absolute
      z-index: 200
      left: 0
      top: 0
      width: 100%
      height: 1px
      background-color: #e4e4e4
    .guide_item
      display: flex
      flex: 1
      text-align: center
      flex-direction: column
      align-items: center
      margin: 5px
      color: #555
      &.on
        color: #02a774
      span
        font-size: 12px
        margin-top: 2px
        margin-bottom: 2px
        .iconfont
          font-size: 22px
</style>
