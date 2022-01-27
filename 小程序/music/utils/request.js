import config from "./config"

export default (url, method="GET", data) => {
  return new Promise((resolve, reject) => {
    wx.request({
      url: config.baseURL + url,
      data,
      method,
      header: {
        // includes查找字符串是否包括查询的字符 如有返回true
        cookie: wx.getStorageSync('cookies') ? wx.getStorageSync('cookies').find(item => item.includes('MUSIC_U')) : ''
      },
      success: res => {
        if (url === '/login/cellphone') {
          wx.setStorageSync('cookies', res.cookies)
        }
        resolve(res.data)
      },
      fail: err => {
        reject(err)
      }
    })
  })
}
