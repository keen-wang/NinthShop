<template lang='pug'>
HomePage(v-if="$route.path==='/home'")
router-view(v-else)
</template>

<script>
import HomePage from './HomePage'
/**
 * @name 主页 */
export default {
  name: 'Msite',
  components: {
    HomePage
  },
  data () {
    return {
    }
  }
}
</script>

<style lang='sass' scoped>
.msite-wrap
  width: 100%
  height: calc(100% - 50px)
  background: #f5f5f5
  overflow: hidden
  display: flex
  flex-direction: column
  .header-wrap
    width: 100%
    height: 35px
    background-color: #1abc9c
    color: #fff
    display: flex
    align-items: center
    justify-content: space-between
    .header_title_text
      text-align: center
      flex: 1
      font-size: 20px
      font-weight: bold
  .msite-content
    flex: 1
    overflow: auto
    .search-wrap
      padding: 5px 10px
      background-color: #1abc9c
      .search-bar
        width: 100%
        height: 26px
        line-height: 26px
        margin: auto
        border-radius: 15px
        background-color: #cafedb
        text-align: center
        vertical-align: middle
        color: #999
        .iconfont,span
          font-size: 14px
    .to-top
      position: fixed
      top: 0
      z-index: 999
      width: 100%
      box-sizing: border-box
      .header-wrap
        display: none
    .category-list
      margin-bottom: 2px
</style>
