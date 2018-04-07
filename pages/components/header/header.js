Component({
  externalClasses: ['my-class'],
  options:{
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  properties:{
    propData:{
      type:"String",
      value:"444"
    }
  },
  data:{
    titleData:'data里面默认的'
  },
  created(){
    console.log('created',getApp())
  },
  ready(){
    console.log('组件ready了吗')
  },
  onLoad(){
    console.log('组件onload了吗')
    
  },
  methods:{
    hasC(e){
      this.setData({
        titleData:'data里面默认的22'
      });
      // 一般不要改他们 ，用 setData 来做
      // this.data.titleData = 11
      var index = e.target.dataset.index
      var myEventDetail = {
        index: index,
        arr:[1,2,3]
      } // detail对象，提供给事件监听函数
      var myEventOptions = {
        a:1
      }
      // var myEventOption = {} // 触发事件的选项
      this.setData({
        selected: index
      })
      this.triggerEvent('onChildToFather', myEventDetail,myEventOptions)
      
    }
  }
})