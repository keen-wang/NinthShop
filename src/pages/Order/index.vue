<template lang='pug'>
.order-wrap
  PageHeader.page-header(title='订单')
  .orderbody
    // 订单卡片
    .ordercard(class='.container-fluid', v-for='item in orderList')
      .ordercard-top
        img.img-rounded(:src="item.imgsrc")
        .ordercard-title
          a(href='#') {{item.shopname}}
          span.glyphicon.glyphicon-menu-right
          p.status {{item.status|statusMap}}
          p.datetime {{$moment(item.date).format('YYYY-MM-DD HH:mm:ss')}}
      .ordercard-content
        .ordergoodslist
          // 订单商品
          .ordercard-detail(v-for='goods in item.goodslist')
            span.detail
              span.goodsname {{goods.name}}
              |                             ×
              span(clas5s='count') {{goods.quantity}}
            span.price {{goods.quantity*goods.price|momeny}}
          .ordercard-detail
            span.detail
              span.goodsname 总价：
            span.price {{item.goodslist|sumPrice|momeny}}
      .ordercard-bottom
        .button-list
          cube-button.order-btn(
            @click="toOrderShop(false)") 再来一单
          cube-button.order-btn(
            v-if='item.status==1'
            @click="confirmOrder(item.id)") 确认送达
          cube-button.order-btn(
            v-if='item.status==2'
            @click="confirmOrder(item.id)") 删除订单
  //- // 未登录提示
  //- .orderbody.text-center(v-if='!loginstatus')
  //-   .waring
  //-     span
  //-       | 登录后查看外卖订单
  //-     button.btn.btn-success(ng-click='toLogin()') 立即登陆
</template>

<script>
/** */
import PageHeader from '@/components/PageHeader'
export default {
  name: '',
  components: {
    PageHeader
  },
  data () {
    return {
      orderList: []
    }
  },
  methods: {
    getOrderList () {
      this.$get({
        url: `/orderinfo`
      }).then(res => {
        if (!res) return
        console.log('订单列表', res)
        this.orderList = res
      })
    },
    toOrderShop () {

    },
    confirmOrder (id) {
      this.$createDialog({
        type: 'confirm',
        icon: 'cubeic-alert',
        title: '提示',
        content: '确认收货',
        confirmBtn: {
          text: '确定',
          active: true,
          disabled: false,
          href: 'javascript:;'
        },
        cancelBtn: {
          text: '取消',
          active: false,
          disabled: false,
          href: 'javascript:;'
        },
        onConfirm: () => {
          this.$get({
            url: `/orderinfo/update`,
            params: {
              id,
              status: 2
            }
          }).then(res => {
            if (!res) return
            this.getOrderList()
          })
        }
      }).show()
    }
  },
  filters: {
    sumPrice (goodslist) {
      return goodslist.reduce((result, item, index) => {
        return result + item.quantity * item.price
      }, 0)
    },
    momeny (val) {
      return val ? '￥' + val.toFixed(2) : '-'
    },
    statusMap (val) {
      let statusList = ['订单已取消', '正在处理订单', '订单已完成']
      return statusList[val]
    }
  },
  mounted () {
    this.getOrderList()
  }
}
</script>

<style lang='sass' scoped>
.order-wrap
  font-size: 24px
  background-color: #f5f5f5
  .page-header
    position: fixed
    top: 0
    left: 0
    z-index: 10
  //订单列表
  .orderbody
    width: 100%
    overflow: hidden
    padding-top: 11.733333vw
    padding-bottom: 16.733333vw
    padding-left: 10px
    padding-right: 10px
    box-sizing: border-box
    //订单卡片
    .ordercard
      width: 100%
      margin-top: 3vw
      height: 100%
      background-color: #fff
      border-radius: 5px
      box-shadow: 0px 0px 10px #dfdfdf
      .ordercard-top
        height: 15vw
        background-color: #c8e7c9
        overflow: hidden
        padding: 0 15px
        img
          width: 11vw
          height: 11vw
          margin-top: 2vw
          float: left
          margin-right: 10px
        .ordercard-title
          font-size: 5vw
          width: calc(100% - 60px)
          float: left
          position: relative
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
            right: 0
          .datetime
            font-size: 3vw
            color: #999
      .ordercard-content
        .ordergoodslist
          height: 100%
          padding: 0 16vw
          .ordercard-detail
            width: 100%
            height: 9vw
            margin-top: 1vw
            position: relative
            overflow: hidden
            .detail
              font-size: 3vw
              color: #808080
              margin-top: 1vw
              float: left
            .price
              font-size: 3vw
              color: #111111
              float: right
              margin-top: 1vw
        .ordercard-right
          flex: 8
          height: 100%
          border-bottom: 1px solid #eee
          .ordercard-head
            width: 100%
            height: 16vw
            margin-top: 2vw
            position: relative
            border-bottom: 1px solid #eee
      .ordercard-bottom
        height: 11vw
        padding-right: 5vw
        .button-list
          float: right
        .order-btn
          width: 24vw
          font-size: 3vw
          height: 8vw
          margin-right: 3vw
          display: inline-block
          padding: 5px
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
