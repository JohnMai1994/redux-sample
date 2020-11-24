import React, {Component} from 'react';

class TodoHeader extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div>您有 xx 件事情未完成</div>
                <div>
                    <label htmlFor="todo">代办项：</label>
                    <input type="text" name="todo"/>
                    <button type="button" >添加</button>
                </div>
            </div>
        );
    }
}

export default TodoHeader;