<template lang='pug'>
cube-form.form-login(
  :model='model'
  :schema='schema'
  :immediate-validate='false'
  :options='options'
  @submit='submitHandler'
  @reset='resetHandler'
  @validate='validateHandler')
</template>

<script>
/**
* @name 登录表单
 */
export default {
  name: 'FormLogin',
  data () {
    return {
      // form表单
      validity: {},
      valid: undefined,
      model: {}, // 数据源
      schema: { // 模式用于定义表单中的各个字段，可以选择是否分组。

        fields: [
          {
            modelKey: 'username',
            type: 'input',
            label: '用户名',
            props: {
              placeholder: '请输入'
            },
            rules: {
              required: true
            }
          },
          {
            modelKey: 'password',
            type: 'input',
            label: '密码',
            props: {
              type: 'password',
              placeholder: '请输入',
              eye: { open: false, reverse: false }
            },
            rules: {
              required: true
            }
          },
          {
            type: 'submit',
            label: '登录'
          },
          {
            type: 'reset',
            label: '重置'
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
      console.log('提交')
      this.$post({
        url: '/userinfo/check',
        data: {
          username: this.model.username,
          password: this.model.password
        }
      }).then(data => {
        console.log(data)
      })
    },
    resetHandler (e) {
      console.log('重置', e)
    }
  }
}
</script>

<style lang='sass' scoped>

</style>
