<template lang='pug'>
.goodslist-wrap
  //-购物车
  ShopCart.shop-cart(
    :cartList="cartList"
    :shopInfo="shopInfo"
    @showCartList="showCartList")
  //-购物车弹窗
  cube-popup(
    ref="cartList"
    type="extend-popup"
    position="bottom"
    :zIndex="49")
    CartList(
      :cartList="cartList"
      @addGoods="addGoods"
      @subGoods="subGoods"
      @clearCart="clearCart")
  cube-scroll-nav.scroll-nav(
    :side='true'
    :data='goodsOfCategory'
    :current='current'
    @change='changeHandler'
    @sticky-change='stickyChangeHandler')
    ShopHeader.prepend-header(
      slot='prepend'
      ref="shopHeader"
      :shopId="shopId"
      @getShopInfo="getShopInfo")
    cube-scroll-nav-panel.scroll-nav-panel(
      v-if="goodsOfCategory.length"
      v-for='item in goodsOfCategory'
      :key='item.name'
      :label='item.name'
      :title='item.name')
      ul.goods-list
        GoodsItem(
          v-for='good in item.goods'
          :key="good.id"
          :goodsInfo="good"
          @addGoods="addGoods"
          @subGoods="subGoods")
</template>

<script>
/**
 * @name GoodsList
 */
import ShopHeader from './ShopHeader'
import GoodsItem from './GoodsItem'
import ShopCart from './ShopCart'
import CartList from './ShopCart/CartList'
export default {
  name: 'GoodsList',
  components: {
    ShopHeader,
    GoodsItem,
    ShopCart,
    CartList
  },
  data () {
    let cartList = (JSON.parse(window.localStorage.getItem('Cart_Map')) || {})['shop' + this.$route.query.shopId]
    console.log('cartlist', cartList)
    return {
      shopId: this.$route.query.shopId || null,
      current: '',
      goodsList: [],
      categoryList: [],
      // goods: goods
      cartList: cartList || [],
      shopInfo: {}
    }
  },
  computed: {
    goodsOfCategory () {
      return this.categoryList.map(category => {
        return {
          ...category,
          goods: this.goodsList
            .filter(item => item.cateid === category.id)
            .map(item => {
              const cartGoods = this.cartList.find(cart => cart.id === item.id)
              return {
                ...item,
                quantity: cartGoods ? cartGoods.quantity : 0
              }
            })
        }
      })
    }
  },
  watch: {
    cartList: {
      deep: true,
      handler (val) {
        let cartList = JSON.parse(window.localStorage.getItem('Cart_Map')) || {}
        const key = 'shop' + this.shopId
        const newCartList = {
          ...cartList,
          [key]: val
        }
        console.log('修改购物车', newCartList)
        window.localStorage.setItem('Cart_Map', JSON.stringify(newCartList))
      }
    }
  },
  methods: {
    changeHandler (label) {
      console.log('changed to:', label)
    },
    stickyChangeHandler (current) {
      console.log('sticky-change', current)
    },
    getShopInfo (info) {
      this.shopInfo = info
    },
    async getGoodsList () {
      if (!this.shopId && this.shopId !== 0) return
      await this.$get({
        url: `/goods/list`,
        params: {
          shopid: this.shopId
        }
      }).then(res => {
        if (!res) return
        this.goodsList = res
      })
    },
    async getCategoryList () {
      if (!this.shopId && this.shopId !== 0) return
      await this.$get({
        url: `/category`,
        params: {
          shopid: this.shopId
        }
      }).then(res => {
        if (!res) return
        this.categoryList = res
      })
    },
    async getGoodsAndCategory () {
      await this.getGoodsList()
      await this.getCategoryList()
      // console.log('goodsOfCategory', this.goodsOfCategory, this.goodsList)
      // this.current = this.goodsOfCategory[0].name
    },
    addGoods (goodsInfo) {
      // console.log('新增商品', goodsInfo)
      let goodsIndex = null
      this.cartList.find((item, index) => {
        if (item.id === goodsInfo.id) goodsIndex = index
        return item.id === goodsInfo.id
      })
      if (goodsIndex || goodsIndex === 0) {
        this.cartList[goodsIndex].quantity++
      } else {
        // 第一次加入购物车
        this.cartList.push({
          ...goodsInfo,
          quantity: 1
        })
      }
    },
    subGoods (goodsInfo) {
      // console.log('减少商品', goodsInfo)
      let goodsIndex = null
      this.cartList.find((item, index) => {
        if (item.id === goodsInfo.id) goodsIndex = index
        return item.id === goodsInfo.id
      })
      if (this.cartList[goodsIndex].quantity === 1) {
        // 数量为0移出购物车
        this.cartList.splice(goodsIndex, 1)
      } else {
        this.cartList[goodsIndex].quantity--
      }
    },
    clearCart () {
      this.cartList = []
    },
    showCartList (isShow) {
      if (isShow) this.$refs.cartList.show()
      else this.$refs.cartList.hide()
    }
  },
  mounted () {
    this.getGoodsAndCategory()
  }
}
// const goods = []
</script>

<style lang='sass' scoped>
.goodslist-wrap
  height: 100%
  background-color: #fff
  .shop-cart
    position: fixed
    bottom: 0
    left: 0
    z-index: 50
    width: 100%
/deep/.scroll-nav
  height: calc(100% - 48px)
  .cube-scroll-nav-bar-item_active
    background-color: #fff
    border-bottom: 1px solid #02a774
    box-sizing: border-box
    font-size: 4vw
  .cube-scroll-nav-bar-item
    padding: 3vw
    font-size: 4vw
  .cube-scroll-nav-panel-title
    background-color: #fff
    box-shadow: 0px 0px 10px #dfdfdf
    border-bottom: 1px solid #ddd
    padding: 5px
    border-left: 3px solid #02a774
    font-size: 4vw
  .cube-scroll-nav-panels
    border-left: 1px solid #ddd
</style>
