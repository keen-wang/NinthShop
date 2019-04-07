<template lang='pug'>
.profile-wrap 666{{userinfo.userid||'请先登录'}}
</template>

<script>
/**
 * @name 个人主页
 */
import { mapState } from 'vuex'
export default {
  name: 'profile',
  data () {
    return {}
  },
  computed: {
    ...mapState(['userinfo'])
  }
}
</script>

<style lang='sass' scoped>

</style>
