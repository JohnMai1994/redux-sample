import React, {Component} from 'react';
import {connect} from "react-redux";
import actions from "../store/actions";
import {ALL, COMPLETED, UNCOMPLETED} from "../store/actions/action-type/action-type";

class TodoList extends Component {
    constructor() {
        super();
    }

    todoChange = (event) => {
        this.props.toggleComplete(event.target.value)
    }

    delClick = (event) => {
        console.log(event)
        this.props.delTodo(event.target.dataset.id)
    }

    filterDisplay() {
        return this.props.todos.filter(item => {
            switch (this.props.display) {
                case COMPLETED:
                    return item.isComplete;
                case UNCOMPLETED:
                    return !item.isComplete;
                case ALL:
                default:
                    return true
            }
        })
    }


    getTodos() {
        return this.filterDisplay().map((todo, index) => {
            return (
                <li key={index}>
                    <input type="checkbox" value={todo.id} checked={todo.isComplete} onChange={this.todoChange}/>
                    {
                        todo.isComplete ? <del>{todo.title}</del> : <span>{todo.title}</span>
                    }
                    <button type="button" data-id={todo.id} onClick={this.delClick}>删除</button>
                </li>

            )
        })


    }

    render() {
        return (
            <div>
                <ul>
                    {
                        this.getTodos()
                    }
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps, actions)(TodoList);