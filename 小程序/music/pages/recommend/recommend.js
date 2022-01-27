import PubSub from 'pubsub-js'

Page({
  data: {
    // 日期
    day: "",
    mouth: "",
    // 每日推荐数据
    recommendList: [],
    // 当前歌曲的下标
    index: 0
  },

  onLoad: function (options) {
    const user = wx.getStorageSync("user")
    if (!user) {
      wx.showToast({
        title: "请先登录",
        success: result => {
          wx.reLaunch({
            url: "/pages/login/login"
          })
        }
      })
    }

    // 更新时间
    this.setData({
      day: new Date().getDate(),
      mouth: new Date().getMonth() + 1
    })

    this.getRecommendList()

    // 订阅事件
    PubSub.subscribe('change-music', (_, type) => {
      let { index, recommendList} = this.data
      if (type === 'next') {
        (index === recommendList.length - 1) && (index = -1)
        index++
      } else {
        (index === 0) && (index = recommendList.length)
        index--
      }
      this.setData({ index })
      const musicId  = recommendList[index].id
      // 发布
      PubSub.publish('music-id', musicId)
    })
  },

  // 请求每日推荐数据
  async getRecommendList() {
    const res = await wx.$api("/recommend/songs")
    this.setData({
      recommendList: res.recommend
    })
  },

  toDetail(e) {
    const { id } = e.currentTarget
    const { index } = e.target.dataset
    this.setData({ index })
    wx.navigateTo({
      url: `/pages/songDetail/songDetail?id=${id}`
    })
  }
})
