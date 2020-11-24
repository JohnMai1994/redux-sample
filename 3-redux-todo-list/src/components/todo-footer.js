import React, {Component} from 'react';

class TodoFooter extends Component {
    render() {
        return (
            <div>
                <button type="button">全部</button>
                <button type="button">未完成</button>
                <button type="button">已完成</button>

            </div>
        );
    }
}

export default TodoFooter;