const initialState = {value: "开始默认值"}
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