
// 2. 初始化state的值，
const initialState = {value: "开始默认值"}

// 3. 编写reducer，
//      state: 最开始是无值的，
//      action:只是传入需要操作的步骤，
//      使用switch：根据action的type来return不用的state
//      切记：reducer中返回的是state，唯一可以更改store的地方
const rootReducer = (state = initialState, action) => {
    console.log("reducer: ", state)
    // 触发reducer
    switch (action.type) {
        case "SEND_ACTION":
            return Object.assign({}, state, {value: action.value})
        default:
            return state
    }

}

module.exports = {
    rootReducer
}