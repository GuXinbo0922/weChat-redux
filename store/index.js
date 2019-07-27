import {createStore,combineReducers,applyMiddleware} from "../libs/redux.min.js"
import thunk from "../libs/redux-thunk.min.js"
import list from "./list.reducer.js"
let reducer=combineReducers({
  list
})
let store=createStore(reducer,applyMiddleware(thunk))
export default store;