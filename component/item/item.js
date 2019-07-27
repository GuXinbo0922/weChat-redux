// component/item/item.js
import { connect } from "../../libs/wechat-weapp-redux.min.js"
import { bindActionCreators } from "../../libs/redux.min.js"
import listAction from "../../store/list.action.js"
Component(connect(state => {
  return {
    hobitList: state.list.hobitList
  }
}, dispatch => {
  return bindActionCreators(listAction, dispatch)
})({
  /**
   * 组件的属性列表
   */
  properties: {
    item:Object
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    addHobit(e){
      let { id } = e.currentTarget.dataset
      this.triggerEvent("addHobit",id)
    }
  }
}))
