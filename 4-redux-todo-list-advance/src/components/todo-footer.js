import React, {Component} from 'react';
import {ALL, COMPLETED, HIGHT, LOW, UNCOMPLETED, MID} from "../store/actions/action-type/action-type";

class TodoFooter extends Component {
    render() {
        return (
            <div >
                <button type="button" data-display={ALL}>全部</button>
                <button type="button" data-display={UNCOMPLETED}>未完成</button>
                <button type="button" data-display={COMPLETED}>已完成</button>

                
                <button type="button" data-display={HIGHT}>高</button>
                <button type="button" data-display={MID}>中</button>
                <button type="button" data-display={LOW}>低</button>


            </div>
        );
    }
}

export default TodoFooter;