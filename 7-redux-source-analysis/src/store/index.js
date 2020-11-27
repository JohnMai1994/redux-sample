import {createStore} from "../redux"

import {rootReducer} from "../reducer"

// 1. 使用redux lib里面的createStore， 创建store
export default createStore(rootReducer)