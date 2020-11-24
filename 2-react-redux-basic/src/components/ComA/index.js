import React, {Component} from 'react';
import {connect} from "react-redux";

class ComA extends Component {

    handleAddClick = () => {
        console.log("1.点击+按钮")
        this.props.sendAddAction();

    }

    handleDelClick = () => {
        console.log("1.点击-按钮")
        this.props.sendDelAction()
    }

    render() {
        return (
            <>
                <button onClick={this.handleAddClick}>
                    +
                </button>

                <button onClick={this.handleDelClick}>
                    -
                </button>
            </>
        );
    }
}

const mapStateToProps = (dispatch) => {

    return {
        sendAddAction: () => {
            console.log("2.调用dispatch方法")
            dispatch({type: "ADD_COUNT"})
        },
        sendDelAction: () => {
            console.log("2.调用dispatch方法")
            dispatch({type: "DEL_COUNT"})
        }
    }
}


export default connect(null, mapStateToProps)(ComA);