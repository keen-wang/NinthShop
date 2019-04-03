<template lang='pug'>
.order-wrap
  .head
    .head_left
      a.glyphicon.glyphicon-menu-left(href='##')
    h1.text-center 订单
  .orderbody
    // 订单卡片
    .ordercard(href='#', class='.container-fluid', v-for='item in 3')
      .ordercard-body.row
        a.ordercard-left.col-xs-2(href='#')
          img.img-rounded(src="https://fuss10.elemecdn.com/7/d8/a867c870b22bc74c87c348b75528djpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/")
        .ordercard-right
          .ordercard-head
            .ordercard-title
              a(href='#') 商店名
              span.glyphicon.glyphicon-menu-right
              p.status(ng-hide='item.status!=1') 正在处理订单
              p.status(ng-hide='item.status!=2') 订单已送达
              p.status(ng-hide='item.status!=3') 订单已取消
              p.datetime 2019-11-10
          .ordergoodslist
            // 订单商品
            .ordercard-detail(v-for='goods in 10')
              span.detail
                span.goodsname 商品名
                |                             ×
                span(clas5s='count') 商品数量
              span.price 100
            .ordercard-detail
              span.detail
                span.goodsname 总价：
              span.price 200
        .col-xs-12.ordercard-bottom.container
          .row
            button.btn.btn-info.col-xs-3.col-xs-offset-5 再来一单
            button.btn.btn-warning.col-xs-3(v-if='item.status==1', ng-click='confirmOrder(item.id)') 确认送达
            button.btn.btn-success.col-xs-3(v-if='item.status==2') 评价服务
  //- // 未登录提示
  //- .orderbody.text-center(v-if='!loginstatus')
  //-   .waring
  //-     span
  //-       | 登录后查看外卖订单
  //-     button.btn.btn-success(ng-click='toLogin()') 立即登陆
</template>

<script>
/** */
export default {
  name: '',
  data () {
    return {}
  }
}
</script>

<style lang='sass' scoped>
.head
  width: 100%
  height: 1.173333rem
  height: 11.733333vw
  background-image: linear-gradient(90deg,#0af,#0085ff)
  line-height: 1.173333rem
  line-height: 11.733333vw
  position: fixed
  top: 0
  left: 0
  z-index: 1000
  .head_left
    width: 1.173333rem
    width: 11.733333vw
    height: 1.173333rem
    height: 11.733333vw
    color: #fff
    font-size: 1em
    text-align: center
    line-height: 11.733333vw
    position: absolute
    left: 0
    top: 0
  h1
    color:#fff
    font-weight: 600
    font-size: 6vw
    margin: 0
    position: absolute
    left: 50%
    top: 2vw
    transform: translateX(-50%)
.order-wrap
  font-size: 24px
  background-color: #f5f5f5
//订单列表
.orderbody
  width: 100%
  overflow: hidden
  padding-top: 11.733333vw
  padding-bottom: 2.173333rem
  padding-bottom: 16.733333vw
  //订单卡片
  .ordercard
    width: 100%
    margin-top: 3vw
    height: 100%
    .ordercard-body
      display: block
      height: 100%
      background-color: #fff
      .ordercard-left
        display: block
        height: 30vw
        padding-left: 5vw
        img
          width: 100%
          height: 11vw
          margin-top: 4vw
      .ordercard-right
        height: 100%
        border-bottom: 1px solid #eee
        .ordercard-head
          width: 100%
          height: 16vw
          margin-top: 2vw
          position: relative
          border-bottom: 1px solid #eee
          .ordercard-title
            font-size: 5vw
            width: 70%
            a
              color: #000
              line-height: 11vw
            span
              margin-left: 5vw
              font-size: 1vw
            .status
              font-size: 3vw
              position: absolute
              top: 4vw
              left: 52vw
            .datetime
              font-size: 3vw
              color: #999
        .ordergoodslist
          height: 100%
          .ordercard-detail
            width: 100%
            height: 9vw
            margin-top: 1vw
            position: relative
            overflow: hidden
            .detail
              font-size: 3vw
              color: #808080
            .price
              font-size: 3vw
              color: #111111
              float: right
              margin-top: 1vw
              margin-right: 9vw
      .ordercard-bottom
        height: 11vw
        padding-top: 2vw
        padding-right: 9vw
        .row
          button
            font-size: 3vw
            height: 8vw
            margin-right: 3vw
  .waring
    width: 100%
    height: 100vw
    line-height: 100vw
    color: #666
    span
      display: block
    button
      position: relative
      top: -81vw
      font-size: 5vw
      width: 34vw
      height: 15vw

</style>
