let startY
let moveY
let moveDistance

Page({
  data: {
    // 偏移值
    coverTransform: "translateY(0)",
    // 用户信息
    userInfo: {},
    // 历史记录
    recentPlayList: [],
    // 是否登录
    isLogin: false
  },

  onLoad: function (options) {
    const userInfo = wx.getStorageSync("user")
    if (userInfo) {
      this.setData({ userInfo })
      this.setData({ isLogin: true })
      this.getRecentPlayList(this.data.userInfo.userId)
    }
  },

  // 获取历史播放记录
  async getRecentPlayList(id) {
    const res = await wx.$api("/user/record", "GET", { uid: id, type: 0 })
    this.setData({ recentPlayList: res.allData.splice(0, 10) })
  },

  touchStart(e) {
    // 获取手指开始坐标
    startY = e.touches[0].clientY
  },
  touchMove(e) {
    // 获取手指移动的坐标
    moveY = e.touches[0].clientY
    moveDistance = moveY - startY
    if (moveDistance <= 0) return
    if (moveDistance >= 80) {
      moveDistance = 80
    }
    this.setData({ coverTransform: `translateY(${moveDistance}rpx)` })
  },
  touchEnd() {
    this.setData({ coverTransform: `translateY(0)` })
  },

  // 跳转至登录
  toLogin() {
    wx.navigateTo({ url: "/pages/login/login" })
  },

  // 退出登录
  loginOut() {
    wx.removeStorageSync('user')
    this.setData({ userInfo: {}, recentPlayList: [] })
    this.setData({ isLogin: false })
  }
})
