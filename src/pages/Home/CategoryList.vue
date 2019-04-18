<template lang='pug'>

cube-slide.category-wrap(
  ref='slide'
  :data='shoptypeGroups'
  :auto-play="true")
  cube-slide-item(
    v-for='(group, index) in shoptypeGroups'
    :key='index')
    .category-item(v-for="item in group" :key="item.id")
      img.item-img(:src="item.imgsrc")
      .item-name {{item.name}}
</template>

<script>
/**
 * @name 分类列表 CategoryList
*/
import { mapState, mapActions } from 'vuex'

export default {
  name: 'CategoryList',
  data () {
    return {}
  },
  computed: {
    ...mapState(['shoptypes']),
    shoptypeGroups () {
      const types = [...this.shoptypes]
      const groups = []
      while (types.length !== 0) {
        const group = types.splice(0, 8)
        groups.push(group)
      }
      return groups
    }
  },
  methods: {
    ...mapActions(['getShopTypes'])
  },
  mounted () {
    this.getShopTypes()
  }
}
</script>

<style lang='sass' scoped>
.category-wrap
  width: 100%
  padding: 10px 0
  background-color: #fff
  height: auto
  .category-item
    width: 25%
    background-color: #fff
    display: inline-block
    float: left
    // padding: 5px
    // box-sizing: border-box
    .item-img
      display: block
      width: 46px
      height: 46px
      border-radius: 50%
      margin: auto
    .item-name
      text-align: center
      font-size: 3vw
      color: #555
      padding: 3px
</style>
