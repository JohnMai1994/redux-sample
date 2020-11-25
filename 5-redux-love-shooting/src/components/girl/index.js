import React, {Component} from 'react';
import "../../App.css"
// 导入资源图片
import defaultImg from "../../asserts/image/beauty.jpg"
import receiveImg from "../../asserts/image/reject.gif"
import {connect} from "react-redux";

class Girl extends Component {


    render() {
        return (
            <div className="girl">
                <img src={this.props.isSend? receiveImg : defaultImg} style={{width: "300px", height: "300px"}}  alt=""/>
            </div>
        );
    }
}

export default connect((state) => state)(Girl);