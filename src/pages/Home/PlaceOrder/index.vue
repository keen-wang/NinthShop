<template lang='pug'>
.order-wrap
  PageHeader.page_header(title='订单提交')
  .order-content
    .order-address(
      v-if="address"
      @click="selectAddress")
      .address-title 订单配送至
      .address-info {{address.address}}
      .user-info
        span.user-name {{address.name}}
        span.user-phone {{address.tell}}
      i.iconfont.icon-right
    .order-detail
      .shop-name {{'肯德基'}}
      .cart-list
        .cart-item(v-for="item in cartList")
          img.goods-img(src="item.imgsrc")
          .goods-name {{item.name}}
          .goods-quantity x {{item.quantity}}
          .goods-price ￥{{item.price}}
      .delivery
        .delivery-name 配送费
        .delivery-price ￥{{shopInfo.delivery_price}}
      .total
        span.total-name 小计
        span.total-price ￥{{totalPrice}}
  .page_bottom(@click="submitOrder") 去支付
</template>

<script>
/**
 * @name PlaceOrder
 */
import { showPopup } from '@/common/alert'
import {mapState} from 'vuex'
import PageHeader from '@/components/PageHeader'
export default {
  name: 'PlaceOrder',
  components: {
    PageHeader
  },
  computed: {
    ...mapState(['addresslist']),
    totalPrice () {
      const cartPrice = this.cartList.reduce((result, item) => {
        return result + item.price * item.quantity
      }, 0)
      const deliveryPrice = this.shopInfo.delivery_price || 0
      return cartPrice + deliveryPrice
    }
  },
  data () {
    let cartList = JSON.parse(window.localStorage.getItem('Cart_Map'))['shop' + this.$route.query.id]
    console.log('cartlist', cartList)
    return {
      shopId: this.$route.query.id || null,
      cartList: cartList || [],
      shopInfo: {},
      address: {}
    }
  },
  methods: {
    selectAddress () {

    },
    submitOrder () {
      if (!this.address.id && this.address.id !== 0) {
        showPopup('请先选择地址', 'warning')
        return
      }
      const date = this.$moment().format('YYYY-MM-DD HH:mm:ss')
      this.$post({
        url: `/orderinfo/insert`,
        data: {
          date,
          shopId: 1,
          userId: 1,
          addressId: this.address.id,
          orderGoods: this.cartList.map(item => ({
            goodsId: item.id,
            quantity: item.quantity
          }))
        }
      }).then((res) => {
        if (res) {
          showPopup('订单提交成功', 'success')
          this.clearCart() // 清空购物车
          setTimeout(() => {
            this.$router.push({
              path: '/order'
            })
          }, 1000)
        }
      })
    },
    clearCart () {
      let cartList = JSON.parse(window.localStorage.getItem('Cart_Map')) || {}
      const key = 'shop' + this.shopId
      const newCartList = {
        ...cartList,
        [key]: []
      }
      window.localStorage.setItem('Cart_Map', JSON.stringify(newCartList))
    }
  },
  mounted () {
    // 获取默认地址信息
    this.address = (this.addresslist && this.addresslist.length) ? this.addresslist[0] : {}
    console.log('获取默认收货地址', this.addresslist, this.address)
    // 获取店铺信息
    if (this.shopId || this.shopId === 0) {
      this.$get({
        url: `/shopInfo/shopid`,
        params: {
          shopid: this.shopId
        }
      }).then(res => {
        if (!res) return
        this.shopInfo = res
      })
    }
  }
}
</script>

<style lang='sass' scoped>
.order-wrap
  background: linear-gradient(#1abc9c 25%, #f5f5f5 50%)
  height: 100%
  .order-content
    height: calc(100% - 84px)
    overflow: auto
    padding: 4vw
    box-sizing: border-box
    position: relative
    .order-address
      width: 100%
      margin-bottom: 18px
      color: #fff
      box-sizing: border-box
      .address-title
        font-size: 4vw
        padding: 5px 0
        color: #c9f7e3
      .address-info
        font-size: 5vw
        font-weight: bold
        padding: 5px 0
      .user-info
        font-size: 4.2vw
        .user-name
          margin-right: 8px
      .icon-right
        position: absolute
        right: 10px
        top: 13vw
    .order-detail
      background: #fff
      width: 100%
      padding: 10px
      box-sizing: border-box
      color: #555
      .shop-name
        font-weight: bold
        padding: 5px
        border-bottom: 1px solid #ddd
      .cart-list
        .cart-item
          display: flex
          height: 10vw
          line-height: 10vw
          font-size: 3.2vw
          .goods-img
            width: 8vw
            height: 8vw
            padding: 2vw
            margin-right: 1px
          .goods-name,.goods-quantity,.goods-price
            flex: 1
            overflow: hidden
          .goods-name
            flex: 2
      .delivery
        border-bottom: 1px solid #ddd
        display: flex
        font-size: 3.2vw
        height: 10vw
        line-height: 10vw
        .delivery-name
          flex: 2
          margin-left: 13vw
        .delivery-price
          flex: 1
      .total
        padding: 5px
        text-align: right
        vertical-align: text-bottom
        padding-right: 50px
        .total-name
          font-size: 3.2vw
        .total-price
          font-size: 4vw
  .page_bottom
    height: 40px
    text-align: center
    line-height: 40px
    font-size: 4vw
    color: #1abc9c
    background: #fff
    box-shadow: 0px 0px 10px #dfdfdf
</style>
