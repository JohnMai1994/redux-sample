import {ADD_TODO, CHANGE_DISPLAY, DEL_TODO, TOGGLE_COMPLETE, ALL, COMPLETED, UNCOMPLETED} from "../actions/action-type/action-type";


// 定义默认状态
const initState = {
    display : "all",  // 显示状态（all, uncompleted, completed）
    todos: [
        {
            id: parseInt(1),
            isComplete: false,
            title: "学习redux"
        },
        {
            id: parseInt(2),
            isComplete: true,
            title: "学习react"
        },
        {
            id: parseInt(3),
            isComplete: false,
            title: "学习antd"
        },

    ]

}

/*
* 定义reducer,封装了更新state的逻辑
* */

export const reducer = (state = initState, action) => {
    let newState;
    console.log(action)
    switch (action.type) {
        case ADD_TODO:
            newState = {
                todos: [
                    ...state.todos,
                    action.data
                ]
            };
            break;
        case TOGGLE_COMPLETE:
            newState = {
                todos: state.todos.map(item => {
                    if (item.id == action.data) {
                        item.isComplete = !item.isComplete
                    }
                    return item
                })
            }
            break;
        case DEL_TODO:
            newState = {
                todos: state.todos.filter(todo => todo.id != action.data)
            }
            break
        case CHANGE_DISPLAY:
            newState = {
                display: action.data,
                todos: [...state.todos]
            }
            console.log("newstate", newState)
            break

        default:
            newState = state;
            break
    }
    return newState;
}
