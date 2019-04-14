<template lang='pug'>
.profile-wrap
  ProfileHeader(:userinfo='userinfo')
//-  666{{userinfo.userid||'请先登录'}}
</template>

<script>
/**
 * @name 个人主页
 */
import { mapState } from 'vuex'
import ProfileHeader from './ProfileHeader'
export default {
  name: 'profile',
  components: {
    ProfileHeader
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapState(['userinfo'])
  }
}
</script>

<style lang='sass' scoped>
.profile-wrap
  width: 100%
  height: calc(100% - 50px)
  background: #dfdfdf
  overflow: auto
</style>
