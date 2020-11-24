
// 1. 初始化store的状态
const initialState = {
    count : 0
}

// 2. 编写reducer
export const reducer = (state = initialState, action) => {
    console.log("3.调用reducer方法", state,action)
    switch (action.type) {
        case "ADD_COUNT":
            console.log("使用add count")
            return {count: state.count + 1} // 不知道为啥不能使用+1方法
        case "DEL_COUNT":
            console.log("使用del count")
            return {count: state.count - 1}
        default:
            return state


    }


}

