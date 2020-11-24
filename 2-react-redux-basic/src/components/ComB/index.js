import React, {Component} from 'react';
import {connect} from "react-redux";

class ComB extends Component {
    render() {
        console.log("5. 组件中ComB显示")
        return (
            <div>
                {this.props.count}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log("4. 返回状态",state)
    return state
}


export default connect(mapStateToProps)(ComB);