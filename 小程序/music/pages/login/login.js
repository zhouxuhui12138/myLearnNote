import request from "../../utils/request"
Page({
  data: {
    phone: "15078338313", // 手机号
    password: "zxh04551" // 密码
  },

  onLoad: function (options) {},

  async login() {
    // 前端验证
    const { phone, password } = this.data
    {
      if (!phone) {
        wx.showToast({
          title: "手机号不能为空",
          icon: "error"
        })
        return
      }
      if (!/^1[3456789]\d{9}$/.test(phone)) {
        wx.showToast({
          title: "手机号码有误",
          icon: "error"
        })
        return
      }
      if (!password) {
        wx.showToast({
          title: "密码不能为空",
          icon: "error"
        })
        return
      }
    }

    const res = await request("/login/cellphone", "GET", { phone, password })
    if (res.code === 200) {
      wx.showToast({ title: "登录成功" })
      wx.setStorageSync("user", res.profile)
      wx.reLaunch({
        url: "/pages/user/user"
      })
    } else if (res.code === 400 || res.code === 502) {
      wx.showToast({
        title: "手机号或密码错误",
        icon: "error"
      })
    } else {
      wx.showToast({
        title: "登录失败",
        icon: "error"
      })
    }
  },

  // 处理警告
  handlerErr() {}
})
