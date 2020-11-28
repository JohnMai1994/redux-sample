import {combineReducers, createStore} from "../redux"

import {rootReducer, secondReducer} from "../reducer"
import applyMiddleware from "../redux/applyMiddleware";


// 创建一个中间键middleware
const logger = (store) => (next) => (action) => {
    // debugger
    console.group(action.type);
    console.info('dispatching', action)
    let result = next(action);
    console.log('next state', store.getState())
    console.groupEnd(action.type)
    return result
}


// 1. 使用redux lib里面的createStore， 创建store
export default createStore(rootReducer, {value: "开始默认值"}, applyMiddleware(logger))