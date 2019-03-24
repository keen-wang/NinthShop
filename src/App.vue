<template lang='pug'>
.app-wrapper
  router-view.router_view
  FooterGuide.footer_guide
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
    }
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
