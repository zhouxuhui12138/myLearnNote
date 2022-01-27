//app.js
import request from './utils/request'

App({
  data: {
    isMusicPlay: false, // 是否有音乐再播放
    musicId: '' // 音乐的id
  },
  onLaunch: function(options){
    wx.$api = request
  },
  onShow: function(options){

  },
  onHide: function(){

  },
  onError: function(msg){

  },
  //options(path,query,isEntryPage)
  onPageNotFound: function(options){

  },
  globalData: {
    
  }
});
