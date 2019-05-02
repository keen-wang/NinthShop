<template lang='pug'>
.address-wrap
  PageHeader(title='收货地址管理')
  .address-list
    AddressInfo(
      v-for="item in addresslist"
      :key="item.id"
      :addressInfo="item"
      @showEditForm="showEditForm(item)"
      @deleteAddress="deleteAddress")
  cube-button.add-btn(
    :light="true"
    icon="cubeic-add"
    @click="showEditForm(false)") 新增收货地址
  cube-popup(ref="editForm")
    EditForm(
      v-model="formValue"
      :title="formTitle"
      :isCreate="isCreate"
      @closeDialog="hideEditForm")
</template>

<script>
/**
@name 地址管理列表
 */
import {mapState, mapActions} from 'vuex'
import PageHeader from '@/components/PageHeader'
import EditForm from './EditForm'
import AddressInfo from './AddressInfo'
import {showPopup} from '@/common/alert'
export default {
  name: 'AddressManager',
  components: {
    PageHeader,
    EditForm,
    AddressInfo
  },
  data () {
    return {
      formValue: {
        name: 'laowang'
      },
      formTitle: '',
      isCreate: true
      // addressList: []
    }
  },
  computed: {
    ...mapState(['addresslist'])
  },
  methods: {
    ...mapActions(['getAddresslist']),
    // getAddressList () {
    //   this.$get({
    //     url: `/address`
    //   }).then(res => {
    //     if (!res) return
    //     this.addressList = res.addressList
    //     console.log(this.addressList)
    //   })
    // },
    showEditForm (addressInfo) {
      if (!addressInfo) {
        console.log('addressInfo', addressInfo)
        this.formTitle = '新增地址'
        this.isCreate = true
        this.formValue = {}
      } else {
        this.formTitle = '编辑地址'
        this.isCreate = false
        this.formValue = {...addressInfo}
      }
      this.$refs.editForm.show()
    },
    hideEditForm () {
      this.$refs.editForm.hide()
      this.getAddresslist()
    },
    deleteAddress (info) {
      console.log('删除地址信息', info)
      if (info.id || info.id === 0) {
        this.$get({
          url: '/address/delete',
          params: {
            id: info.id
          }
        }).then(res => {
          if (!res) return
          showPopup('删除成功', 'success')
          this.getAddresslist()
        })
      }
    }
  },
  mounted () {
    this.getAddresslist()
  }

}
</script>

<style lang='sass' scoped>
.address-wrap
  width: 100%
  height: 100%
  display: flex
  flex-direction: column
  .address-list
    flex: 1
    overflow: auto
  .add-btn
    color: #1abc9c
    padding: 8px
    display: fixed
    buttom: 0
</style>
