import React, {Component} from 'react';
import {connect} from "react-redux";
import actions from "../store/actions";

class TodoHeader extends Component {

    constructor(props) {
        super(props);
    }

    getUnfinishedCount = () => {
        return this.props.todos.filter((item) => {
            return !item.isComplete
        }).length
    }


    addTodoClick = (event) => {
        this.props.addTodo({
            id: parseInt(Math.random() * 10000),
            isComplete: false,
            title: this.todoTitle.value,
            priority: this.todoPriority.value,
            date: this.todoDate.value
        })
    }

    render() {
        return (
            <div>
                <div>您有 {this.getUnfinishedCount()} 件事情未完成</div>
                <div>
                    <label htmlFor="todo">待办事项：</label>
                    <input type="text" name="todo" ref={(input) => this.todoTitle = input}/>
                    <label htmlFor="todo-date">  日期：</label>
                    <input type="date" name="todo-date" ref={(input) => this.todoDate = input}/>
                    <label htmlFor="todo-priority">优先级：</label>
                    <select name="todo-priority" id="todo-priority" ref={(input) => this.todoPriority = input}>
                        <option value="HIGH">High</option>
                        <option value="MID">Mid</option>
                        <option value="LOW">Low</option>
                    </select>

                    <button type="button" onClick={this.addTodoClick}> 添加</button>
                </div>

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return state
}

export default connect(mapStateToProps, actions)(TodoHeader);