import axios from 'axios'
import moment from 'moment'
import { Message } from 'element-ui'
// 修改默认请求配置
axios.defaults.baseURL = '/api'
axios.defaults.headers.common['Access-AppId'] = 'web'
axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.headers.delete['Content-Type'] = 'application/json'
// 登录校验
// function signFormat (props) {
//   return md5(Object.keys(props).map(el => (el + '=' + props[el]).toLowerCase()).sort().join('&') + localStorage.token)
// }
// 请求头
// export function httpHeader (props, timeStamp) {
//   let sign = {
//     'Gddx-Access-Token': localStorage.token,
//     'Gddx-Access-Version': '0.1.0'
//   }
//   return {
//     ...props.headers,
//     'Gddx-Access-Sign': signFormat({
//       ...sign,
//       ...props.params,
//       ...props.data,
//       'Gddx-Access-TimeStamp': timeStamp
//     }),
//     'Gddx-Access-TimeStamp': timeStamp,
//     'Gddx-Access-Token': sign['Gddx-Access-Token'],
//     'Gddx-Access-Version': sign['Gddx-Access-Version']
//   }
// }

export function fetch (props) {
  const timeStamp = moment().format('x')
  return axios({ // 使用请求配置来传参
    ...props,
    // headers: httpHeader(props, timeStamp),
    headers: props.headers,
    params: { // get请求参数
      ...props.params,
      timeStamp: timeStamp
    }
  }).then((response) => {
    if (response) {
      if (response.data.code === 0) {
        return response.data.data || response.data
      } else if (response.data.code === 6) {
        Message({
          type: 'error',
          showClose: true,
          duration: 8000,
          message: response.data.data.map(item => {
            return `${item.code}:${item.message}`
          }).join('\n\r')
        })
        return false
      } else {
        throw Object({
          response: {
            status: response.data.code,
            statusText: response.data.message
          }
        })
      }
    }
  }).catch(({ response }) => {
    if (response) {
      const { status, statusText } = response
      if (status === 401 || status === 403) {
        window.location.href = '/#/login'
      } else {
        Message({
          type: 'error',
          showClose: true,
          message: status + ':' + statusText
        })
      }
    }
    return false
  })
}
// 特殊请求
export const httpGet = ({url, params}) => {
  return fetch({
    method: 'get',
    url,
    params
  })
}

export const httpPost = ({url, data}) => {
  return fetch({
    method: 'post',
    url,
    data
  })
}

const api = {
  install (Vue, options) {
    Vue.prototype.$fetch = fetch
    // Vue.prototype.$fetchAll = fetchAll
    Vue.prototype.$get = httpGet
    Vue.prototype.$post = httpPost
    // Vue.prototype.$patch = httpPatch
    // Vue.prototype.$put = httpPut
    // Vue.prototype.$httpDelete = httpDelete
  }
}

export default api
