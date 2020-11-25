import React, {Component} from 'react';
import {ALL, COMPLETED, UNCOMPLETED, LOW, HIGHT, MID} from "../store/actions/action-type/action-type";
import {connect} from "react-redux";
import actions from "../store/actions";

// const initialState = {
//     display: ALL,
//     priority: ALL,
//     todos: [
//         {
//             id: parseInt(Math.random() * 10000),
//             isComplete: false,
//             title: "学习redux",
//             priority: HIGHT,
//             date: "2020-11-24"
//         },
//         {
//             id: parseInt(Math.random() * 10000),
//             isComplete: true,
//             title: "劳资不学了",
//             priority: LOW,
//             date: "2020-11-24"
//         },
//         {
//             id: parseInt(Math.random() * 10000),
//             isComplete: false,
//             title: "学习abc",
//             priority: MID,
//             date: "2020-11-24"
//         },
//
//     ]
//
// }

class TodoList extends Component {
    constructor(props) {
        super(props);
    }

    todoChange = (event) => {
        this.props.toggleComplete(event.target.value)
    }

    delTodoClick = (event) => {

        this.props.delTodo(event.target.dataset.id)
    }

    filterDisplay = () => {
        return this.props.todos
            // 这里是filter 完成 未完成的
            .filter((item) => {
                switch (this.props.display) {
                    case COMPLETED:
                        return item.isComplete
                    case UNCOMPLETED:
                        return !item.isComplete
                    case ALL:
                    default:
                        return true
                }
            })
            // 这里是filter 优先级的
            .filter((item) => {
                switch (this.props.priority) {
                    case HIGHT:
                        return item.priority === HIGHT
                    case MID:
                        return item.priority === MID
                    case LOW:
                        return item.priority === LOW
                    case ALL:
                    default:
                        return true
                }
            })
    }

    getTodo = () => {
        return this.filterDisplay().map((todo, index) => {
            return (
                <tr key={index}>
                    <td>{index}</td>
                    <td>{todo.date}</td>
                    <td>
                        {
                            todo.isComplete ? <del>{todo.title}</del> : <span>{todo.title}</span>
                        }
                    </td>
                    <td>{todo.priority}</td>
                    <td><input type="checkbox" value={todo.id} checked={todo.isComplete} onChange={this.todoChange}/></td>
                    <td><button type="button" data-id={todo.id} onClick={this.delTodoClick}>删除</button> </td>
                </tr>
            )
        })


    }



    render() {
        return (
            <table>
                <tr>
                    <th>#ID</th>
                    <th>日期</th>
                    <th>活动/计划</th>
                    <th>优先级</th>
                    <th>完成情况</th>
                    <th></th>
                </tr>
                {
                    this.getTodo()
                }
            </table>
        );
    }
}

export default connect((state) => state, actions)(TodoList);