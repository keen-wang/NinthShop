<template lang='pug'>
.msite-wrap
  .header-wrap
    h5.header_title_text 零零购超市
  .msite-content
    .search-wrap
      .search-bar
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

    }
  },
  mounted () {
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
    height: 50px
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
      padding: 15px 10px
      background-color: #1abc9c
      .search-bar
        width: 100%
        height: 30px
        margin: auto
        border-radius: 15px
        background-color: #cafedb
        text-align: center
        line-height: 30px
        color: #999
    .category-list
      margin-bottom: 2px
</style>
