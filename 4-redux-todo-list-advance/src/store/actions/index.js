import {ADD_TODO, CHANGE_DISPLAY, TOGGLE_COMPLETE, DEL_TODO, CHANGE_PRIORITY} from "./action-type/action-type";


const actions = {
    // 添加待办事项 data: todo json
    addTodo: function (data) {
        return {
            type: ADD_TODO,
            data
        }
    },
    // 更改完成状态 data:id
    toggleComplete: function (data) {
        return {
            type: TOGGLE_COMPLETE,
            data
        }
    },
    // 删除待办事项 data: id
    delTodo: function (data) {
        return{
            type: DEL_TODO,
            data
        }

    },
    // 改变显示状态 data: ALL, UNCOMPLETED, COMPLETED
    changeDisplay: function (data) {
        return {
            type: CHANGE_DISPLAY,
            data
        }
    },
    //
    changePriority: function (data) {
        return {
            type: CHANGE_PRIORITY,
            data
        }
    }

}

export default actions;