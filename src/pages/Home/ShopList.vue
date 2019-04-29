<template lang='pug'>
.shoplist-wrap
  .shop-title(v-if="title") {{title}}
  .shop-info(
    v-for="item in shopList"
    :key='"shop"+item.id'
    @click="showShopPage(item)")
    img.shop-head(:src="item.imgsrc")
    .shop-content
      .shop-name {{item.name}}
      .shop-sales
        span.graded
          i.full-star.iconfont.icon-full_star(v-for="star in item.stars[0]")
          i.half-star.iconfont.icon-half_star(v-for="star in item.stars[1]")
          i.blank-star.iconfont.icon-blank_star(v-for="star in item.stars[2]")
          span.graded-num {{item.grade}}
        span.sales 月销{{item.sales}}单
      .shop-price
        span.starting-price ￥{{item.startprice}}起送
        span |
        span.distribution-costs 配送费￥5
</template>

<script>
/**
 * @name ShopList
 */
export default {
  name: 'ShopList',
  props: {
    title: String,
    shops: {
      type: Array,
      default: () => ([])
    }
  },
  data () {
    return {
      stars: []
    }
  },
  computed: {
    shopList () {
      return this.shops.map(item => {
        return {
          ...item,
          stars: this.getStarNum(item.grade)
        }
      })
    }
  },
  methods: {
    getStarNum: (num) => {
      let arr = []
      arr[0] = parseInt(num)
      arr[1] = num % 1 ? 1 : 0
      arr[2] = 5 - arr[0] - arr[1]
      return arr
    },
    showShopPage (shop) {
      console.log('打开店铺', shop)
      if (!shop) return
      this.$router.push({
        path: '/shop',
        query: {
          shopId: shop.id
        }
      })
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
    padding-top: 10px
  .shop-info
    border-bottom: 1px solid #dfdfdf
    padding: 5px
    .shop-head
      width: 25vw
      display: inline-block
      vertical-align: middle
    .shop-content
      width: 50vw
      padding: 6px
      display: inline-block
      vertical-align: middle
      .shop-name
        padding: 1.5vw 0
        font-size: 4vw
      .shop-sales
        padding: 1.5vw 0
        font-size: 3.2vw
        .graded
          color: #ffbe00
          margin-right: 10px
          .graded-num
            color: #777
          .graded-num, i
            font-size: 3.2vw
      .shop-price
        padding: 1.5vw 0
        font-size: 3.2vw
</style>
