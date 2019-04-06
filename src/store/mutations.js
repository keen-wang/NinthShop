/**
 * 直接更新state的多个方法的对象
 */
import {
  RECEIVE_ADDRESS,
  RECEIVE_SHOPTYPES,
  RECEIVE_SHOPS
} from './mutation-types'

export default {
  [RECEIVE_ADDRESS] (state, {address}) {
    state.address = address
  },
  [RECEIVE_SHOPTYPES] (state, {shoptypes}) {
    state.shoptypes = shoptypes
  },
  [RECEIVE_SHOPS] (state, {shops}) {
    state.shops = shops
  }
}
