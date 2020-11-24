import React, {Component} from 'react';
import {connect} from "react-redux";



class TodoList extends Component {
    constructor() {
        super();
    }


    filterDisplay() {
        return this.props.todos.filter(item => {
            switch (this.props.display) {
                case "completed":
                    return item.isComplete;
                case "uncompleted":
                    return !item.isComplete;
                case "all":
                default:
                    return true
            }
        })
    }


    getTodos() {
        return this.filterDisplay().map((todo, index) => {
            return (
                <li key={index}>
                    <input type="checkbox" value={todo.id} checked={todo.isComplete} />
                    {
                        todo.isComplete ? <del>{todo.title}</del> : <span>{todo.title}</span>
                    }
                    <button type="button" data-id={todo.id}>删除</button>
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

const mapStateToProps = (state ) => {
    return state
}

export default connect(mapStateToProps)(TodoList);