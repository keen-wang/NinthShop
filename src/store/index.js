/**
 * vuex 的核心管理对象
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {

}
const mutations = {

}
const actions = {

}
const getters = {

}
export default new Vuex.Store({
  state, // 状态对象
  mutations, // 包含多个更新state函数的对象
  actions, // 包含多个对应事件回调函数的对象
  getters //  包含多个getter计算属性函数的对象
})
