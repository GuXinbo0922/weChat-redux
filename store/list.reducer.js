import { INIT_DATA, CREATE_HOBIT, ADD_HOBIT, COMPLETE_HOBIT} from "./list.type.js"
let data={
  data:{},
  hobitList:[],
  objectiveList:[],
  checkedHobit:[],
  checkedObjective:[],
};
let list=(state=data,action)=>{
  let newState=JSON.parse(JSON.stringify(state))
  switch(action.type){
    case INIT_DATA:{
      // console.log(action.data)
      let {data}=action
      newState.data=data
      newState.hobitList=data.hobitList
      newState.objectiveList = data.objectiveList
      newState.checkedHobit = newState.hobitList.filter(item => item.isChecked)
      newState.checkedObjective = newState.objectiveList.filter(item => item.isChecked)
      //console.log(newState.hobitList, newState.objectiveList)
        return newState
    }
    case CREATE_HOBIT:{
      let {data}=action
      newState.hobitList.push({ id: newState.hobitList.length+1,title:data,isChecked:false})
      return newState;
    }
    case ADD_HOBIT:{
      let {id}=action
      let index = newState.hobitList.findIndex(item=>item.id===id)
      //console.log(index)
      newState.hobitList[index].isChecked=true;
      newState.checkedHobit = newState.hobitList.filter(item => item.isChecked)
      newState.checkedHobit.map(item=>item.isComplete=false)
      console.log(newState.checkedHobit)
      return newState;
    }
    case COMPLETE_HOBIT:{
      let {id}=action
      let index=newState.checkedHobit.findIndex(item=>item.id===id)
      newState.checkedHobit[index].isComplete=true
      return newState
    }
    default:
      return state;
  }
  
};
export default list;