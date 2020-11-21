import React, {Component} from 'react';
import store from "../store"

// 导入action构建函数
import {sendAction} from "../action"

class Home extends Component {

    handleClick = () => {
        // 触发onClick
        console.log("dispatch: ", store.getState())
        const action = sendAction();
        store.dispatch(action)
    }

    componentDidMount() {
        store.subscribe(() => {
            // 初始化的时候
            console.log("subscribe: ",store.getState())
            this.setState({})
        })
    }

    render() {
        return (
            <>
                <button onClick={this.handleClick}>
                    点我点我，发送一个action
                </button>
                <div>{store.getState().value}</div>
            </>
        );
    }
}

export default Home;