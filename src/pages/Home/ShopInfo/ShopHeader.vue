<template lang='pug'>
.shopheader-wrap
  .shop-img
    img(:src="shopInfo.imgsrc")
  .shop-info
    .shop-name {{shopInfo.name}}
    .shop-detail {{`评分${shopInfo.grade}   月售${shopInfo.sales}单  配送时长约${shopInfo.duration}分钟`}}
    .shop-intro {{shopInfo.summary}}
  .iconfont.icon-left(@click="goBack")
</template>

<script>
/**
 * @name ShopHeader
 */
export default {
  name: 'ShopHeader',
  props: {
    shopId: Number | String
  },
  data () {
    return {
      shopInfo: {}
    }
  },
  methods: {
    goBack () {
      if (!this.path) this.$router.go(-1)
      else this.$router.push(this.path)
    }
  },
  mounted () {
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
        this.$emit('getShopInfo', res)
      })
    }
  }
}
</script>

<style lang='sass' scoped>
.shopheader-wrap
  width: 100%
  border-bottom: 1px solid #ddd
  .shop-img
    width: 100%
    height: 20vw
    background-color: #1abc9c
    text-align: center
    img
      width: 25vw
      height: 25vw
      box-shadow: 0px 0px 10px #dfdfdf
      background-color: #fff
      position: relative
      top: 5vw
  .shop-info
    padding-top: 13vw
    text-align: center
    padding-bottom: 20px
    background-color: #fff
    .shop-name
      font-size: 5vw
      font-weight: bold
    .shop-detail
      font-size: 3.4vw
      padding: 10px
    .shop-intro
      // text-align: left
      font-size: 3.4vw
      padding: 0 20px
      color: #999
  .icon-left
    font-size: 5vw
    color: #fff
    position: absolute
    top: 10px
    left: 10px
</style>
