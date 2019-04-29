<template lang='pug'>
li.goods-item
  img.goods-img(:src="goodsInfo.imgsrc")
  .goods-info
    .goods-name {{goodsInfo.name}}
    .goods-desc {{goodsInfo.summary}}
    .goods-sales {{`月售${goodsInfo.sales}份 好评率${goodsInfo.praiserate}% `}}
    .goods-price ￥{{goodsInfo.price.toFixed(2)}}
      CartControl.cart-control(
        :goods="goodsInfo"
        @addGoods="addGoods"
        @subGoods="subGoods")
</template>

<script>
/**
 * @name GoodsItem
 */
import CartControl from './CartControl'
export default {
  name: 'GoodsItem',
  components: {
    CartControl
  },
  props: {
    goodsInfo: {
      type: Object,
      default: () => ({})
    }
  },
  data () {
    return {}
  },
  methods: {
    addGoods () {
      this.$emit('addGoods', this.goodsInfo)
    },
    subGoods () {
      this.$emit('subGoods', this.goodsInfo)
    }
  }
}
</script>

<style lang='sass' scoped>
.goods-item
  overflow: hidden
  vertical-align: middle
  padding: 10px
  border-bottom: 1px solid #ddd
  display: flex
  .goods-img
    width: 20vw
    height: 20vw
    display: inline-block
    box-sizing: border-box
  .goods-info
    flex: 1
    // height: 22vw
    display: inline-block
    box-sizing: border-box
    padding-left: 6px
    font-size: 3vw
    .goods-name
      padding: 4px
      font-size: 4vw
      font-weight: bold
    .goods-desc,.goods-sales,.goods-price
      font-size: 3vw
      padding: 4px
      color: #787878
    .goods-price
      font-size: 4vw
      color: #ff5339
      .cart-control
        float: right
</style>
