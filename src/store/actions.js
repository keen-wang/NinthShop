/**
 * @desc 间接更新state的多个方法对象
 */
import {
  RECEIVE_ADDRESS,
  RECEIVE_SHOPTYPES,
  RECEIVE_SHOPS,
  RECEIVE_USERINFO,
  RESET_USERINFO
} from './mutation-types'
import { httpGet } from '../api'

export default{
  recordUser ({commit, state}, userinfo) {
    commit(RECEIVE_USERINFO, {userinfo})
  },
  async logout ({commit, state}) {
    await httpGet({
      url: '/userinfo/logout'
    }).then(res => {
      if (!res) return
      commit(RESET_USERINFO)
    })
  },
  async getUserinfo ({commit, state}) {
    await httpGet({
      url: '/userinfo'
    }).then(res => {
      if (!res) return
      console.log('shoptypes', res)
      const userinfo = res
      commit(RECEIVE_USERINFO, {userinfo})
    })
  },
  getAddress ({commit, state}) {
    // const geahash = state.latitudu + ',' + state.longitude
    const address = '蜜汁地址'
    commit(RECEIVE_ADDRESS, {address})
  },
  getShopTypes ({commit}) {
    httpGet({
      url: '/shoptype'
    }).then(res => {
      if (!res) return
      console.log('shoptypes', res)
      const shoptypes = res
      commit(RECEIVE_SHOPTYPES, {shoptypes})
    })
  },
  getShops ({commit}) {
    httpGet({
      url: '/shopinfo/all'
    }).then(res => {
      if (!res) return
      console.log('shoptypes', res)
      const shops = res
      commit(RECEIVE_SHOPS, {shops})
    })
  }
}
