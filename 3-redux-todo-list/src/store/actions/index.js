import {ADD_TODO, CHANGE_DISPLAY, DEL_TODO, TOGGLE_COMPLETE} from "./action-type/action-type";

// 定义actionCreators
// 返回一个大对象，里面封装了所有的定义actionCreator

let actions = {
    // 添加一条待办事项，data参数就是一条待办的数据
    addTodo: function (data) {
        return {type: ADD_TODO, data}
    },
    // 更改完成状态，此处data传id
    toggleComplete: function (data) {
        return {type: TOGGLE_COMPLETE, data}
    },
    // 删除待办事项数据，此处data传id
    delTodo: function (data) {
        return {type: DEL_TODO, data}
    },
    // 更改显示待办事项，data为以下三个值（all, uncompleted, completed）
    changeDisplay: function (data) {

        return {type: CHANGE_DISPLAY, data}
    }

}

export default actions