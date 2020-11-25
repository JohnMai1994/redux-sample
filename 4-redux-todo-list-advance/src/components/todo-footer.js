import React, {Component} from 'react';
import {ALL, COMPLETED, HIGHT, LOW, UNCOMPLETED, MID} from "../store/actions/action-type/action-type";
import {connect} from "react-redux";
import actions from "../store/actions";


class TodoFooter extends Component {

    changeDisplay = (event) => {
        this.props.changeDisplay(event.target.dataset.display)
    }

    changePriority = (event) => {
        this.props.changePriority(event.target.dataset.display)
    }

    render() {
        return (
            <>
                <div onClick={this.changeDisplay}>
                    <button type="button" data-display={ALL}>全部</button>
                    <button type="button" data-display={UNCOMPLETED}>未完成</button>
                    <button type="button" data-display={COMPLETED}>已完成</button>
                </div>
                <div onClick={this.changePriority}>
                    <button type="button" data-display={HIGHT}>高</button>
                    <button type="button" data-display={MID}>中</button>
                    <button type="button" data-display={LOW}>低</button>
                </div>

            </>
        );
    }
}

export default connect(null, actions)(TodoFooter);