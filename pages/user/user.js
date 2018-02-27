// pages/user/user.js
var App = getApp()
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    userInfo: null
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onReady: function(){
      this.setData({
        userInfo: App.globalData.userInfo
      })
    }
  }
})
