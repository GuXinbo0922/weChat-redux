// pages/addHabit/addHabit.js
import {connect} from "../../libs/wechat-weapp-redux.min.js"
import {bindActionCreators} from "../../libs/redux.min.js"
import listAction from "../../store/list.action.js"
Page(connect(state=>{
  return{
    hobitList: state.list.hobitList
  }
},dispatch=>{
  return bindActionCreators(listAction,dispatch)
})({

  /**
   * 页面的初始数据
   */
  data: {
    iptVal:""
  },
  changeVal(e){

    this.setData({
      iptVal: e.detail.value
    })
  },
  createHobit(){
    //console.log(this.data.iptVal)
    let data = this.data.iptVal
    if(data.length){
      this.createHobitAction(data)
    }
    
    this.setData({
      iptVal:""
    })
  },
  addHobit(e){
    let id=e.detail
    this.addHobitAction(id)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.initDataAction()
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
    console.log(this.data.hobitList)
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
}))