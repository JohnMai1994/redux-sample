import {
    ADD_TODO,
    TOGGLE_COMPLETE,
    DEL_TODO,
    CHANGE_DISPLAY,
    COMPLETED,
    UNCOMPLETED,
    ALL,
    HIGHT,
    LOW,
    MID
} from "../actions/action-type/action-type";
import {act} from "@testing-library/react";

const initialState = {
    display: ALL,
    priority: ALL,
    todos: [
        {
            id: parseInt(Math.random() * 10000),
            isComplete: false,
            title: "学习redux",
            priority: HIGHT,
            date: "2020-11-24"
        },
        {
            id: parseInt(Math.random() * 10000),
            isComplete: true,
            title: "劳资不学了",
            priority: LOW,
            date: "2020-11-24"
        },
        {
            id: parseInt(Math.random() * 10000),
            isComplete: false,
            title: "学习abc",
            priority: MID,
            date: "2020-11-24"
        },

    ]

}

export const reducer = (state = initialState, action) => {

    let newState;
    switch (action.type) {
        case ADD_TODO:
            newState = {
                todos: [
                    ...state.todos,
                    action.data
                ]
            }
            break
        case TOGGLE_COMPLETE:
            newState = {
                todos: state.todos.map((item) => {
                    if (item.id == action.data) {
                        console.log(item.id)
                        item.isComplete = !item.isComplete
                    }
                    return item
                })
            }
            break
        case DEL_TODO:
            newState = {
                todos: state.todos.filter((item) => {
                    return item.id != action.data
                })
            }
            break;
        case CHANGE_DISPLAY:
            newState = {
                display: action.data.display,
                priority: action.data.priority,
                todos: [...state.todos]
            }
            break
        default:
            newState = state
    }
    return newState
}

