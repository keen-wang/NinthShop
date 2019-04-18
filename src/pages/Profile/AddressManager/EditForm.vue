<template lang='pug'>
.edit-wrap
  h4.tittle {{title}}
    i.iconfont.icon-delete(@click="closeDialog")
  cube-form.form-login(
    :model='value'
    :schema='schema'
    :immediate-validate='false'
    :options='options'
    @submit='submitHandler'
    @validate='validateHandler')
</template>

<script>
/**
 * @name EditForm
 */
import {showPopup} from '@/common/alert'
export default {
  name: 'EditForm',
  props: {
    value: {
      type: Object,
      default: () => ({})
    },
    title: String,
    isCreate: Boolean
  },
  data () {
    return {
      // form表单
      validity: {},
      valid: undefined,
      // model: {}, // 数据源
      schema: { // 模式用于定义表单中的各个字段，可以选择是否分组。
        fields: [
          {
            modelKey: 'name',
            type: 'input',
            label: '联系人',
            props: {
              placeholder: '姓名'
            },
            rules: {
              required: true
            }
          },
          {
            modelKey: 'tell',
            type: 'input',
            label: '电话',
            props: {
              placeholder: '手机号码'
            },
            rules: {
              required: true
            }
          },
          {
            modelKey: 'address',
            type: 'textarea',
            label: '地址',
            props: {
              placeholder: '详细地址'
            },
            rules: {
              required: true
            }
          },
          {
            type: 'submit',
            label: '保存'
          }
        ]
      },
      options: { // 配置项
        scrollToInvalidField: true,
        layout: 'standard' // classic fresh
      }
    }
  },
  methods: {
    validateHandler (result) {
      this.validity = result.validity
      this.valid = result.valid
      console.log('validity', result)
    },
    submitHandler (e) {
      e.preventDefault()
      if (this.isCreate) {
        this.$post({
          url: '/address/create',
          data: {
            name: this.value.name,
            tell: this.value.tell,
            address: this.value.address
          }
        }).then(data => {
          if (!data) return
          showPopup('保存成功', 'success')
          this.closeDialog()
        })
      } else {
        const addressinfo = {...this.value}
        this.$delete(addressinfo, 'id')
        this.$post({
          url: '/address/update',
          data: {
            id: this.value.id,
            addressinfo
          }
        }).then(data => {
          if (!data) return
          showPopup('保存成功', 'success')
          this.closeDialog()
        })
      }
      console.log('提交')
    },
    resetHandler (e) {
      console.log('重置', e)
    },
    closeDialog () {
      this.$emit('closeDialog')
    }
  },
  mounted () {
  }
}
</script>

<style lang='sass' scoped>
.edit-wrap
  width: 98vw
  max-width: 400px
  background: #fff
  border: 1px solid #ddd
  box-sizing: border-box
  .tittle
    text-align: center
    padding: 8px
    margin-bottom: 5px
    background: #1abc9c
    color: #fff
    position: relative
    .icon-delete
      font-size: 14px
      position: absolute
      right: 10px
</style>
