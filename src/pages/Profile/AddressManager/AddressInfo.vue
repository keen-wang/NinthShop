<template lang='pug'>
.address-item
  .item-content
    .user-info
      span.user-name {{addressInfo.name}}
      span.user-phone {{addressInfo.tell}}
    .address-info {{addressInfo.address}}
  .item-operation
    i.iconfont.icon-edit(@click="showEditForm")
    i.iconfont.icon-delete(@click="deleteAddress")
</template>

<script>
/**
 * @name AddressInfo
 */
export default {
  name: 'AddressInfo',
  props: {
    addressInfo: {
      type: Object,
      default: () => ({})
    }
  },
  data () {
    return {}
  },
  methods: {
    showEditForm () {
      this.$emit('showEditForm')
    },
    deleteAddress () {
      this.$emit('deleteAddress', this.addressInfo)
    }
  }
}
</script>

<style lang='sass' scoped>
.address-item
  width: 100%
  background-color: #fff
  border-bottom: 1px solid #ddd
  padding: 8px
  box-sizing: border-box
  overflow: hidden
  .item-content
    width: calc(100% - 50px)
    float: left
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
  .item-operation
    width: 49px
    float: left
    margin-top: 5vw
    border-left: 1px solid #ddd
    i
      font-size: 18px
      margin-left: 8px
      color: #999
</style>
