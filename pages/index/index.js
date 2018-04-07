
//index.js
//获取应用实例
const app = getApp()
console.log('app:', wx.getUserInfo(), wx.canIUse('button.open-type.getUserInfo'),app);
// 这里就可以访问globalData的数据并且可以修改
app.globalData.testData++;
// let { getRoute } = require('../../utils/util.js');
import { getRoute } from '../../utils/util.js';
getRoute(666)
Page({
  data: {
    arrIndex: [
      {
        name: '666', age: 12
      },
      {
        name: '777', age: 13
      },
      {
        name: '888', age: 14
      }
    ],
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  onReady(){
    console.log('route:',this.route,getApp());
    getRoute(777)
  },
  onShareAppMessage: function () {
    return {
      title: '自定义转发标题',
      path: '/pages/index/index'
    }
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  hw(){
    wx.navigateTo({
      url: '/pages/activity/activity?a=1&b=2#/a=1&b=2',
      success:function(res){
        console.log('成功啦：',res)
      }
    })
  },
  onReachBottom(){
    console.log(1)
  },
  onTabItemTap(a){
    console.log('onTabItemTap',a)
  },
  onLoad: function () {
    console.log('onloadRoute:',this.route)
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  changeB(e){
    console.log(e)
    e.currentTarget.dataset.value=555;
  },
  toFather(e){
    console.log('toFather',e,e.detail)
  }
})
