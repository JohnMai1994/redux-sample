import React, {Component} from 'react';
import {connect} from "react-redux";
import actions from "../store/actions"

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
            id: parseInt(Math.random()* 10000),
            title: this.todoTitle.value,
            isComplete: false
        })
    }

    render() {
        return (
            <div>
                <div>您有 {this.getUnfinishedCount()} 件事情未完成</div>
                <div>
                    <label htmlFor="todo">待办项：</label>
                    <input type="text" name="todo" ref={(input) => this.todoTitle = input} />
                    <button type="button" onClick={this.addTodoClick}>添加</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps, actions)(TodoHeader);