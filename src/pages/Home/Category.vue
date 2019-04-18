<template lang='pug'>
.category-wrap
  PageHeader(:title='$route.query.name')
  .shoplist-wrap
    ShopList(
      :shops="shops")
</template>

<script>
/**
 * @name Category
 */
import ShopList from './ShopList'
import PageHeader from '@/components/PageHeader'
export default {
  name: 'Category',
  components: {
    ShopList,
    PageHeader
  },
  data () {
    return {
      shops: []
    }
  },
  computed: {
    typeId () {
      return this.$route.query.id
    }
  },
  mounted () {
    console.log('category', this.$route.params.id)
    this.$get({
      url: `/shopinfo/type`,
      params: {
        typeId: this.typeId
      }
    }).then(res => {
      if (!res) return
      this.shops = res
    })
  }
}
</script>

<style lang='sass' scoped>
.category-wrap
  width: 100%
  height: 100%
  display: flex
  flex-direction: column
  .shoplist-wrap
    flex: 1
    overflow: auto
</style>
