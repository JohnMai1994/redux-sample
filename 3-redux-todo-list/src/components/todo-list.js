import React, {Component} from 'react';


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

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = initState
    }


    filterDisplay() {
        return this.state.todos.filter(item => {
            switch (this.state.display) {
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

export default TodoList;