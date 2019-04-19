<template lang='pug'>
.shop-wrap
  GoodsList
</template>

<script>
/**
 * @name ShopInfo
 */
import ShopHeader from './ShopHeader'
import GoodsList from './GoodsList'
export default {
  name: 'ShopInfo',
  components: {
    ShopHeader,
    GoodsList
  },
  data () {
    return {}
  }
}
</script>

<style lang='sass' scoped>
.shop-wrap
  width: 100%
  height: 100%
</style>
