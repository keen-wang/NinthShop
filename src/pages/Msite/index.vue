<template lang='pug'>
.msite-wrap
  HeaderTop.header-top(title="主页")
  .msite-content
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
  .msite-content
    flex: 1
    overflow: auto
    .category-list
      margin-bottom: 2px
</style>
