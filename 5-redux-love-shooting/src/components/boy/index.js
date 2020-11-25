import React, {Component, useState} from 'react';
// 导入静态图，还需要导入gif图片
import "../../App.css"
import defaultImg from "../../asserts/image/mao.png"
import sending from "../../asserts/image/mao.gif"
import {connect, useDispatch, useSelector} from "react-redux";
import {actions} from "../../store/action";

class Boy extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isSend: false
        }
    }

    handleClick = () => {
        let {isSend} = this.state;
        this.setState({
            isSend: !isSend
        })
        this.props.changeAction();
    }

    render() {
        return (
            <div className="boy">
                <img src={this.state.isSend ? sending :defaultImg} style={{width: "300px", height: "300px"}} alt=""/>
                <div>
                    <button onClick={this.handleClick}>发射爱心</button>
                </div>
            </div>
        );
    }
}




export default connect(null, actions)(Boy);