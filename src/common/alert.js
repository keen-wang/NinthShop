
import { Popup } from 'cube-ui'

export const status = {
  success: {
    bgColor: '#f0f9eb',
    color: '#67c23a',
    icon: 'success'
  },
  normal: {
    bgColor: '#f4f4f5',
    color: '#909399',
    icon: 'info'
  },
  warning: {
    bgColor: '#fdf6ec',
    color: '#e6a23c',
    icon: 'warning'
  },
  error: {
    bgColor: '#fef0f0',
    color: '#f56c6c',
    icon: 'error'
  }
}
export function showPopup (msg, type) {
  const {bgColor, color, icon} = status[type || 'normal']
  const temp = `<div style="
          color: ${color};
          background: ${bgColor};
          border: 1px solid ${color};
          padding: 10px 20px;
          opacity: 0.9;
          border-radius: 5px
          ">
          <i class="iconfont icon-${icon}"></i>
          ${msg}
        </div>`
  var popup = Popup.$create({
    type: 'my-popup',
    content: temp,
    mask: false
    // $props: {
    //   // mask: false,
    // }
  }).show()
  setTimeout(() => {
    popup.hide()
  }, 1000)
}
