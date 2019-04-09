<template lang='pug'>
.msite-wrap
  .msite-content(ref="content" @scroll='initHeight')
    .search-wrap
      .header-wrap
        h5.header_title_text 零零购超市
      .search-bar(
        ref='searchBar')
        i.iconfont.icon-search
        span 输入商家或商品
    .search-wrap.to-top(v-if="isFixed")
      .search-bar(
        ref='searchBar')
        i.iconfont.icon-search
        span 输入商家或商品
    CategoryList.category-list
    ShopList
</template>

<script>
import HeaderTop from './HeaderTop'
import CategoryList from './CategoryList'
import ShopList from './ShopList'
/**
 * @name 主页 */
export default {
  name: 'Msite',
  components: {
    HeaderTop,
    CategoryList,
    ShopList
  },
  data () {
    return {
      offsetTop: 0,
      isFixed: false
    }
  },
  methods: {
    initHeight (e) {
      var scrollTop = this.$refs.content.scrollTop
      this.isFixed = scrollTop > this.offsetTop
      // console.log('定位', scrollTop)
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.offsetTop = this.$refs.searchBar.offsetTop
    })
  },
  destroyed () {
    // window.removeEventListener('scroll', this.initHeight)
  }
}
</script>

<style lang='sass' scoped>
.msite-wrap
  width: 100%
  height: calc(100% - 50px)
  background: #dfdfdf
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
