<template lang='pug'>
.shopcart-list
  .list-header
    h1.title 购物车
    span.empty(@click='clearCart') 清空
  .list-content
    ul
      li.goods(v-for='(goods, index) in cartList', :key='index')
        span.name {{goods.name}}
        .price
          span ￥{{goods.price}}
        .cartcontrol-wrapper
          CartControl(
            :goods='goods'
            @addGoods="addGoods(goods)"
            @subGoods="subGoods(goods)")
</template>

<script>
/**
 * @name CartList
 */
import CartControl from '../CartControl'
export default {
  name: 'CartList',
  components: {
    CartControl
  },
  props: {
    cartList: {
      type: Array,
      default: () => ([])
    }
  },
  data () {
    return {}
  },
  methods: {
    clearCart () {
      this.$emit('clearCart')
    },
    addGoods (goods) {
      this.$emit('addGoods', goods)
    },
    subGoods (goods) {
      this.$emit('subGoods', goods)
    }
  }
}
</script>

<style lang='sass' scoped>
.shopcart-list
  position: absolute
  left: 0
  top: 0
  z-index: -1
  width: 100%
  transform: translateY(-100%)
  padding-bottom: 48px
  &.move-enter-active, &.move-leave-active
    transition: transform .3s
  &.move-enter, &.move-leave-to
    transform: translateY(0)
  .list-header
    height: 40px
    line-height: 40px
    padding: 0 18px
    background: #f3f5f7
    border-bottom: 1px solid rgba(7, 17, 27, 0.1)
    .title
      float: left
      font-size: 14px
      color: rgb(7, 17, 27)
    .empty
      float: right
      font-size: 12px
      color: rgb(0, 160, 220)
  .list-content
    padding: 0 18px
    max-height: 217px
    overflow: hidden
    background: #fff
    .goods
      position: relative
      padding: 12px 0
      box-sizing: border-box
      border-bottom: 1px solid rgba(7, 17, 27, 0.1)
      .name
        line-height: 24px
        font-size: 14px
        color: rgb(7, 17, 27)
      .price
        position: absolute
        right: 90px
        bottom: 12px
        line-height: 24px
        font-size: 14px
        font-weight: 700
        color: rgb(240, 20, 20)
      .cartcontrol-wrapper
        position: absolute
        right: 0
        bottom: 6px
</style>
