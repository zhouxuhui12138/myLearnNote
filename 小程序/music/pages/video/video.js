Page({
  data: {
    // 视频导航栏数据
    navList: [],
    // 导航栏id
    navId: null,
    // 视频数据
    videoList: [],
    // 当前播放视频的id
    videoId: '',
    // 存储视频播放进度
    videoTimeArr: [],
    // 是否下拉刷新
    isRefresher: false,
    // 页码
    offset: 1
  },

  onLoad: function (options) {
    this.getNavList()
  },

  // 获取视频导航栏数据
  async getNavList() {
    const res = await wx.$api("/video/group/list")
    this.setData({ navId: res.data[0].id })
    this.setData({ navList: res.data.splice(0, 14) })

    this.getVideoList(this.data.navId)
  },

  // 获取视频
  async getVideoList(id) {
    const { offset } = this.data
    wx.showLoading({
      title: '加载中',
    })
    const res = await wx.$api("/video/group", "GET", { id, offset })
    this.setData({ videoList: [...this.data.videoList ,...res.datas] })
    this.setData({ isRefresher: false })
    wx.hideLoading()
  },

  // 点击切换导航栏
  changeNav(e) {
    const navId = e.currentTarget.id
    this.setData({ navId })
    this.setData({ videoList: [] })
    this.getVideoList(this.data.navId)
  },

  // 视频播放回调
  onPlay(e) {
    const vid = e.currentTarget.id
    this.setData({ videoId: vid })

    var videoContext = wx.createVideoContext(vid)
    const { videoTimeArr } = this.data
    const playItem = videoTimeArr.find(item => item.vid === vid)
    if (playItem) {
      videoContext.seek(playItem.time)
    }
  },

  // 监听视频进度
  onTimeUpdate(e) {
    const { currentTime } = e.detail
    const { videoTimeArr } = this.data
    let videoTime = {
      vid: e.currentTarget.id,
      time: currentTime
    }

    // 当前正在播放的对象
    const playItem = videoTimeArr.find(item => item.vid === videoTime.vid)

    if (playItem) {
      // 重新赋值
      playItem.time = currentTime
    } else {
      videoTimeArr.push(videoTime)
    }

    this.setData({ videoTimeArr })
  },

  // 视频播放结束
  onEnd(e) {
    const { videoTimeArr } = this.data

    const index = videoTimeArr.findIndex(item => item.vid === e.currentTarget.id)
    videoTimeArr.splice(index, 1)

    this.setData({ videoTimeArr })
  },

  // 下拉刷新
  onRefresher() {
    this.getVideoList(this.data.navId)
  },

  // 触底刷新
  onTolower() {
    this.setData({
      offset: this.data.offset += 1
    })
    this.getVideoList(this.data.navId)
  }
})
