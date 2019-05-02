/**
 * @desc 间接更新state的多个方法对象
 */
import {
  RECEIVE_ADDRESS,
  RECEIVE_ADDRESSLIST,
  RECEIVE_SHOPTYPES,
  RECEIVE_SHOPS,
  RECEIVE_USERINFO,
  RESET_USERINFO
} from './mutation-types'
import { httpGet } from '../api'
import { Toast } from 'cube-ui'

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
    let address = {}
    if (state.addresslist.length !== 0) {
      address = state.addresslist[0]
    }
    commit(RECEIVE_ADDRESS, {address})
  },
  async getAddresslist ({commit, state}) {
    const toast = Toast.$create({
      txt: '疯狂加载中...',
      time: 0,
      mask: true
    })
    toast.show()
    await httpGet({
      url: '/address'
    }).then(res => {
      toast.hide()
      if (!res) return
      console.log('shoptypes', res)
      const addresslist = res.addressList
      if (addresslist.length !== 0) {
        state.address = addresslist[0]
      }
      commit(RECEIVE_ADDRESSLIST, {addresslist})
    })
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
