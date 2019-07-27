
import { INIT_DATA, CREATE_HOBIT, ADD_HOBIT, COMPLETE_HOBIT} from "./list.type.js"
const initDataAction = () => {
  return dispatch => {
    wx.request({
      url: 'http://localhost:9090/getList',
      success: (res) => {
        
        if(res.data.code===200){
          let data = res.data.data
        
          dispatch({ type: INIT_DATA, data })
        }
        

      }
    })
  }
}
const createHobitAction=(data)=>{
 
  return {type:CREATE_HOBIT,data}
}
const addHobitAction=(id)=>{
  return{type:ADD_HOBIT,id}
}
const completeHobitAction=(id)=>{
  return {type:COMPLETE_HOBIT,id}
}
export default {
  initDataAction,
  createHobitAction,
  addHobitAction,
  completeHobitAction
}