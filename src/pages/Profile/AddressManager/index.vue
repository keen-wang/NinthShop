<template lang='pug'>
.address-wrap
  PageHeader(title='收货地址管理')
  .address-list
    .address-item
      .user-info
        span.user-name 王先生
        span.user-phone 13428312515
      .address-info
        | 广东省汕头市龙湖区广东省汕头市龙湖区广东省汕头市龙湖区广东省汕头市龙湖区广东省汕头市龙湖区
</template>

<script>
/**
@name 地址管理列表
 */
import PageHeader from '@/components/PageHeader'
export default {
  name: 'AddressManager',
  components: {
    PageHeader
  },
  data () {
    return {}
  }
}
</script>

<style lang='sass' scoped>
.address-wrap
  width: 100%
  display: flex
  flex-direction: column
  .address-list
    flex: 1
    overflow: auto
    .address-item
      width: 100%
      background-color: #fff
      border-bottom: 1px solid #ddd
      padding: 8px
      box-sizing: border-box
      .user-info
        margin-bottom: 6px
        .user-name
          font-size: 4vw
          font-weight: bold
          margin-right: 10px
        .user-phone
          font-size: 4vw
      .address-info
        font-size: 3.5vw
</style>
