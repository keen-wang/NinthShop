<template lang='pug'>
.app-wrapper
  router-view.router_view
  FooterGuide.footer_guide(
    v-if="mainPages.includes($route.path)")
</template>

<script>
/** */
import FooterGuide from './components/FooterGuide'
export default {
  name: 'App',
  components: {
    FooterGuide
  },
  data () {
    return {
      mainPages: ['/home', '/order', '/profile']
    }
  },
  mounted () {
    this.$store.dispatch('getAddress')
    this.$store.dispatch('getUserinfo')
    this.$store.dispatch('getAddresslist')
    // this.$store.dispatch('getShopTypes')
    // this.$store.dispatch('getShops')
  }
}
</script>

<style lang='sass' scoped>
.app-wrapper
  width: 100%
  height: 100%
  background: #f5f5f5
  .footer_guide
    position: fixed
    bottom: 0
</style>
