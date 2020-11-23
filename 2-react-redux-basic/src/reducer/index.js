const initialState = {
    count : 0
}

export const reducer = (state = initialState, action) => {

    switch (action.type) {
        case "ADD_COUNT":
            return {count: state.count++}
        case "DEL_COUNT":
            return {count: state.count--}
        default:
            return state


    }


}

