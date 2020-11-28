//注释import {createStore} from 'redux'
//新增
import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {reducer} from "./reducer"

//注释 const store = createStore(rootReducer)
//新增
export const store = createStore(reducer,applyMiddleware(thunk))