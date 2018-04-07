var myBehavior = require('../../../assets/js/behavior.js')

Component({
  behaviors: [myBehavior],
  // externalClasses: ['my-class'],
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
  }
})