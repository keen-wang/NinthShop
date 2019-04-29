<template lang='pug'>
.cart-wrapdiv
  .shopcart
    .content
      .content-left(@click='toggleShow')
        .logo-wrapper
          .logo(:class='{highlight: totalQuanlity}')
            i.iconfont.icon-shopping_cart(:class='{highlight: totalQuanlity}')
          .num(v-if='totalQuanlity') {{totalQuanlity}}
        .price(:class='{highlight: totalQuanlity}') ￥{{totalPrice}}
        .desc 另需配送费￥{{shopInfo.delivery_price}}元
      .content-right
        .pay(:class='payClass')
          | {{payText}}

</template>

<script>
/**
 * @name ShopCart
 */
import CartList from './CartList'
export default {
  name: 'ShopCart',
  props: {
    cartList: {
      type: Array,
      default: () => ([])
    },
    shopInfo: Object
  },
  data () {
    return {
      isShow: false

    }
  },
  computed: {
    totalQuanlity () {
      return this.cartList.reduce((result, item, index) => {
        result = result + item.quantity
        return result
      }, 0)
    },
    totalPrice () {
      return this.cartList.reduce((result, item, index) => {
        result = result + item.quantity * item.price
        return result
      }, 0)
    },
    payClass () {
      const {totalPrice} = this
      const {startprice} = this.shopInfo
      return totalPrice >= startprice && totalPrice !== 0 ? 'enough' : 'not-enough'
    },
    payText () {
      const {totalPrice} = this
      const {startprice} = this.shopInfo
      if (totalPrice === 0) {
        return `￥${startprice}元起送`
      } else if (totalPrice < startprice) {
        return `还差￥${startprice - totalPrice}元起送`
      } else {
        return '结算'
      }
    }
  },
  watch: {
    totalQuanlity (val) {
      if (val === 0) this.isShow = false
      this.$emit('showCartList', this.isShow)
    }
  },
  methods: {
    toggleShow () {
      // 只有当总数量大于0时切换
      if (this.totalQuanlity > 0) {
        this.isShow = !this.isShow
      } else {
        this.isShow = false
      }
      this.$emit('showCartList', this.isShow)
      // console.log('isShow', this.isShow)
    },

    clearCart () {
      // MessageBox.confirm('确定清空购物车吗?').then(action => {
      //   this.$store.dispatch('clearCart')
      // }, () => {})
    }
  },
  components: {
    CartList
  }
}
</script>

<style lang="sass" scoped>
  .shopcart
    width: 100%
    height: 48px
    .content
      display: flex
      background: #141d27
      font-size: 0
      color: rgba(255, 255, 255, 0.4)
      .content-left
        flex: 1
        .logo-wrapper
          display: inline-block
          vertical-align: top
          position: relative
          top: -10px
          margin: 0 12px
          padding: 6px
          width: 56px
          height: 56px
          box-sizing: border-box
          border-radius: 50%
          background: #141d27
          .logo
            width: 100%
            height: 100%
            border-radius: 50%
            text-align: center
            background: #2b343c
            &.highlight
              background: green
            .icon-shopping_cart
              line-height: 44px
              font-size: 24px
              color: #80858a
              &.highlight
                color: #fff
          .num
            position: absolute
            top: 0
            right: 0
            width: 24px
            height: 16px
            line-height: 16px
            text-align: center
            border-radius: 16px
            font-size: 9px
            font-weight: 700
            color: #ffffff
            background: rgb(240, 20, 20)
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4)
        .price
          display: inline-block
          vertical-align: top
          margin-top: 5px
          line-height: 24px
          padding-right: 12px
          box-sizing: border-box
          font-size: 16px
          font-weight: 700
          color: #fff
          &.highlight
            color: #fff
        .desc
          display: inline-block
          vertical-align: bottom
          margin-bottom: 15px
          margin-left: -45px
          font-size: 10px
      .content-right
        flex: 0 0 105px
        width: 105px
        .pay
          height: 48px
          line-height: 48px
          text-align: center
          font-size: 12px
          font-weight: 700
          color: #fff
          &.not-enough
            background: #2b333b
          &.enough
            background: #00b43c
            color: #fff
    .ball-container
      .ball
        position: fixed
        left: 32px
        bottom: 22px
        z-index: 200
        transition: all 0.4s cubic-bezier(0.49, -0.29, 0.75, 0.41)
        .inner
          width: 16px
          height: 16px
          border-radius: 50%
          background: green
          transition: all 0.4s linear
</style>
