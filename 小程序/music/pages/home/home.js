import request from "../../utils/request"
Page({
  /**
   * 页面的初始数据
   */
  data: {
    // 轮播图数据
    bannerList: [],
    // 推荐列表数据
    recommendList: [],
    // 排行榜数据
    topList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getBannerList()
    this.getRecommendList()
    this.getTopList()
  },

  // 请求轮播图数据
  async getBannerList() {
    const res = await request("/banner", "GET", { type: 2 })
    this.setData({ bannerList: res.banners })
  },

  // 请求推荐列表数据
  async getRecommendList() {
    const res = await request("/personalized", "GET", { limit: 10 })
    this.setData({ recommendList: res.result })
  },

  // 请求排行榜数据
  async getTopList() {
    const topList = []
    for (let i = 0; i < 5; i++) {
      const res = await request("/top/list", "GET", { idx: i })
      const topListItem = { name: res.playlist.name, tracks: res.playlist.tracks.splice(0, 3) }
      topList.push(topListItem)
      this.setData({ topList })
    }
  },

  // 跳转至每日推荐
  toRecommend() {
    wx.navigateTo({
      url: "/pages/recommend/recommend"
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {}
})
