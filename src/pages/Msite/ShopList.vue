<template lang='pug'>
.shoplist-wrap
  .shop-title -店铺列表-
  .shop-info(v-for="item in 10")
    img.shop-head(src="https://fuss10.elemecdn.com/7/d8/a867c870b22bc74c87c348b75528djpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/")
    .shop-content
      .shop-name 麦丹劳炸鸡汉堡
      .shop-sales
        .graded
          i.full-star.iconfont.icon-full_star(v-for="star in stars[0]")
          i.half-star.iconfont.icon-half_star(v-for="star in stars[1]")
          i.blank-star.iconfont.icon-blank_star(v-for="star in stars[2]")
          span.graded-num 3.5
      .shop-price
        span.starting-price ￥100起送
        span |
        span.distribution-costs 配送费￥5
</template>

<script>
/**
 * @name ShopList
 */
export default {
  name: 'ShopList',
  data () {
    return {
      stars: []
    }
  },
  methods: {
    getStarNum: (num) => {
      let arr = []
      arr[0] = parseInt(num)
      arr[1] = num % 1 ? 1 : 0
      arr[2] = 5 - arr[0] - arr[1]
      return arr
    }
  },
  mounted () {
    this.stars = this.getStarNum(3.5)
  }
}
</script>

<style lang='sass' scoped>
.shoplist-wrap
  background-color: #fff
  color: #666
  .shop-title
    text-align: center
  .shop-info
    display: flex
    border-bottom: 1px solid #dfdfdf
    padding: 10px
    .shop-head
      flex: 1
    .shop-content
      flex: 3
      .shop-name
        padding: 5px 0
      .shop-sales
        padding: 5px 0
        .graded
          color: #ffbe00
          .graded-num
            color: #777
      .shop-price
        padding: 5px 0
        font-size: 14px
</style>
