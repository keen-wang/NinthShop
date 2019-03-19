<template lang='pug'>
.app-wrapper
  h1 新零售
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
  display: flex
  flex-direction: column
  .router_view
    flex: 1
</style>
