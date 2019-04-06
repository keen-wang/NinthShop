/**
 * @desc 间接更新state的多个方法对象
 */
import {
  RECEIVE_ADDRESS,
  RECEIVE_SHOPTYPES,
  RECEIVE_SHOPS
} from './mutation-types'
import { httpGet } from '../api'

export default{
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
