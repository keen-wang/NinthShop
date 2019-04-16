<template lang='pug'>
.page-header
  .tittle {{title||'-'}}
  .left.iconfont.icon-left(@click="goBack")
  .right
</template>

<script>
/**
 * @name 页面头部
 */
export default {
  name: 'PageHeader',
  props: {
    path: String,
    title: String
  },
  data () {
    return {}
  },
  methods: {
    goBack () {
      if (!this.path) this.$router.go(-1)
      else this.$router.push(this.path)
    }
  }
}
</script>

<style lang='sass' scoped>
.page-header
  width: 100%
  height: 44px
  line-height: 44px
  font-size: 16px
  background-color: #1abc9c
  color: #fff
  text-align: center
  padding-left: 50px
  padding-right: 50px
  box-sizing: border-box
  position: relative
  div
    float: left
    height: 100%
  .left
    // background-color: gray
    width: 50px
    margin-left: -100%
    position: relative
    left: -50px
  .tittle
    display: inline-block
    // background-color: blue
    width: 100%
  .right
    // background-color: red
    width: 50px
    margin-right: -100%
</style>
