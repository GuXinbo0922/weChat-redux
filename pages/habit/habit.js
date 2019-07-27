// pages/habit/habit.js
import { connect } from "../../libs/wechat-weapp-redux.min.js"
import { bindActionCreators } from "../../libs/redux.min.js"
import listAction from "../../store/list.action.js"
Page(connect(state => {
  return {
    checkedHobit: state.list.checkedHobit
  }
}, dispatch => {
  return bindActionCreators(listAction, dispatch)
})({

  /**
   * 页面的初始数据
   */
  data: {
    isShow:"none"
  },
  addHobit(){
    wx.navigateTo({
      url: '../../pages/addHabit/addHabit',
    })
  },
  showMask(e){
    let {id}=e.currentTarget.dataset
    console.log(id)
    wx.setStorageSync("hobitId", id)
    this.setData({
      isShow:"block"
    })
  },
  changeMask(e){
   
    let show = e.detail   
    let id = wx.getStorageSync("hobitId")
    //如果确定 就设置成完成
    if(show){
      //console.log(show) 
      this.completeHobitAction(id)
      this.setData({
        isShow: "none"
      })
    }else{
      this.setData({
        isShow: "none"
      })
    }
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

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

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