//app.js

App({
  onShow(){
    console.log('onshow',this.route);
  },
  onHide(){
    console.log('onhide')
  },
  onLaunch: function () {
    console.log('onlaunch:',this.route)
    wx.showToast({
      title: '微信登录失败',
      duration: 2000
    });
    wx.checkSession({
      success:function(res){
        console.log('auth',res)
      }
    });


    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        console.log('login:',res);
        
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              console.log('getUserInfo',res)
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  onReady(){
    console.log('route:',this.route)
  },
  globalData: {
    isShow:false,
    userInfo: null,
    testData:0
  }
})