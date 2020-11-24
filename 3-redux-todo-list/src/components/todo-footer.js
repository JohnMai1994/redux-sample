import React, {Component} from 'react';
import {ALL, UNCOMPLETED, COMPLETED} from "../store/actions/action-type/action-type";
import {connect} from "react-redux"
import actions from "../store/actions";

class TodoFooter extends Component {

    changeDisplayClick = (event) => {
        this.props.changeDisplay(event.target.dataset.display)
    }


    render() {
        return (
            <div onClick={this.changeDisplayClick}>
                <button type="button" data-display={ALL}>全部</button>
                <button type="button" data-display={UNCOMPLETED}>未完成</button>
                <button type="button" data-display={COMPLETED}>已完成</button>

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps, actions)(TodoFooter);