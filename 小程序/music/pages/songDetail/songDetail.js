const App = getApp()
import PubSub from "pubsub-js"
import dayjs from "dayjs"

Page({
  data: {
    isPlay: false, // 是否播放
    musicDetail: [], // 音乐详情
    musicId: null, // 当前音乐的id
    currentTime: "00.00", // 实时音乐时间
    allTime: "00.00", // 音乐总时长
    currentWidth: "0" // 进度条宽度
  },

  onLoad: function (options) {
    const { id } = options
    this.setData({ musicId: id })
    this.getMusicDetail(id)

    // 音乐控制器
    this.backAudioManager = wx.getBackgroundAudioManager()
    this.backAudioManager.onPlay(() => {
      this.setData({ isPlay: true })
      App.data.isMusicPlay = true
      App.data.musicId = id
    })
    this.backAudioManager.onPause(() => {
      this.setData({ isPlay: false })
      App.data.isMusicPlay = false
    })
    this.backAudioManager.onStop(() => {
      this.setData({ isPlay: false })
      App.data.isMusicPlay = false
    })
    // 结束后切换下一首
    this.backAudioManager.onEnded(() => {
      // 发布事件
      PubSub.publish("change-music", 'next')
      // 订阅事件
      PubSub.subscribe("music-id", async (_, id) => {
        this.getMusicDetail(id)
        this.backAudioManager.stop()
        this.playControl(true, id, true)
        PubSub.unsubscribe("music-id")
      })
      this.setData({
        currentWidth: "0",
        currentTime: "00.00"
      })
    })

    if (App.data.isMusicPlay && App.data.musicId === id) {
      this.setData({ isPlay: true })
    }

    // 监听音乐播放进度
    this.backAudioManager.onTimeUpdate(() => {
      const currentTime = dayjs(this.backAudioManager.currentTime * 1000).format("mm:ss")
      const currentWidth = (this.backAudioManager.currentTime / this.backAudioManager.duration) * 450
      this.setData({ currentTime, currentWidth })
    })
  },

  // 请求歌曲详情
  async getMusicDetail(id) {
    const res = await wx.$api(`/song/detail?ids=${id}`)
    // 格式化音乐总时长
    const allTime = dayjs(res.songs[0].dt).format("mm:ss")
    this.setData({
      musicDetail: res.songs[0],
      allTime
    })
    wx.setNavigationBarTitle({
      title: res.songs[0].name
    })
  },

  // 播放
  play() {
    this.setData({
      isPlay: !this.data.isPlay
    })
    const { isPlay, musicId } = this.data
    this.playControl(isPlay, musicId)
  },

  // 播放管理器
  async playControl(isPlay, musicId, isChange) {
    if (isPlay) {
      if (!this.musicLink || isChange) {
        const res = await wx.$api(`/song/url?id=${musicId}`)
        this.musicLink = res.data[0].url
      }
      this.backAudioManager.src = this.musicLink
      this.backAudioManager.title = this.data.musicDetail.name
    } else {
      this.backAudioManager.pause()
    }
  },

  // 切换歌曲
  changeMusic(e) {
    const { id: type } = e.currentTarget
    // 发布事件
    PubSub.publish("change-music", type)
    // 订阅事件
    PubSub.subscribe("music-id", async (_, id) => {
      this.getMusicDetail(id)
      this.backAudioManager.stop()
      this.playControl(true, id, true)
      PubSub.unsubscribe("music-id")
    })
  }
})
