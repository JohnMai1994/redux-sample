import React, {Component} from 'react';
import {connect} from "react-redux";

class ComA extends Component {

    handleClick = () => {
        this.props.sendAction();
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                +
            </button>
        );
    }
}

const mapStateToProps = (dispatch) => {
    return {
        sendAction : () => {
            dispatch({type: "ADD_COUNT"})
        }
    }
}


export default connect(null, mapStateToProps)(ComA);