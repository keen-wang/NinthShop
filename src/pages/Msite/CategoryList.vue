<template lang='pug'>
.category-wrap
  .category-item(v-for="item in 10")
    img.item-img(src="https://fuss10.elemecdn.com/7/d8/a867c870b22bc74c87c348b75528djpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/")
    .item-name 分类
</template>

<script>
/**
 * @name 分类列表 CategoryList
*/
export default {
  name: 'CategoryList',
  data () {
    return {}
  }
}
</script>

<style lang='sass' scoped>
.category-wrap
  width: 100%
  .category-item
    height: 70px
    width: 20%
    background-color: #fff
    display: inline-block
    .item-img
      display: block
      width: 45px
      height: 45  px
      border-radius: 50%
      margin: auto
    .item-name
      text-align: center
      font-size: 14px
      color: #555
</style>
