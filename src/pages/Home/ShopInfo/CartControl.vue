<template lang='pug'>
.control-wrap
  transition(name="move")
    .iconfont.icon-remove(
      v-if="goods.quantity"
      @click="updateFoodCount(false)")
  .cart-count(v-if="goods.quantity") {{goods.quantity}}
  .iconfont.icon-add(
    @click="updateFoodCount(true)")
</template>

<script>
/**
 * @name CartControl
 */
export default {
  name: 'CartControl',
  props: {
    goods: Object
  },
  data () {
    return {}
  },
  methods: {
    updateFoodCount (isAdd) {
      // this.$store.dispatch('updateFoodCount', {isAdd, goods: this.goods})
      // console.log('更新商品数量', isAdd)
      if (isAdd) this.$emit('addGoods')
      else this.$emit('subGoods')
    }
  }
}
</script>

<style lang='sass' scoped>
.control-wrap
  display: inline-block
  vertical-align: middle
  div
    display: inline-block
  .cart-count
    color: #555
    width: 8vw
    height: 6vw
    text-align: center
    vertical-align: middle
  .icon-add,.icon-remove
    background-color: #fff
    color: #02a774
    font-size: 6vw
  .icon-remove
    &.move-enter-active,&.move-leave-active
      transition: all 0.3s
    &.move-enter,&.move-leave-to
      opacity: 0
      transform: translateX(15px) rotate(180deg)
</style>
