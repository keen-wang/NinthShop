<template lang='pug'>
.header-wrap
  slot(name='left')
  .header_title_text.ellipsis {{title}}
  slot(name='right')
</template>

<script>
/**
 * @name HeaderTop 头部
 */
export default {
  name: 'HeaderTop',
  props: {
    title: String
  },
  data () {
    return {

    }
  }
}
</script>

<style lang='sass' scoped>
.header-wrap
  width: 100%
  height: 50px
  background-color: #02a774
  color: #fff
  display: flex
  align-items: center
  justify-content: space-between
  .header_title_text
    text-align: center
    flex: 1
</style>
