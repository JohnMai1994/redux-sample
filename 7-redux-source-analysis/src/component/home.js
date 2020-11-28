import React, {Component} from 'react';
import store from "../store"

// 导入action构建函数
import {sendAction} from "../action"

class Home extends Component {
    // 2. 触发onClick
    handleClick = () => {
        console.log("dispatch: ", store.getState())
        // 3. 使用sendAction来获取action的值，通常是固定的
        const action = sendAction();
        // 4. 通过dispatch方法，把新的action告诉给store，然后store调用reducer方法，来更改store数据
        store.dispatch(action)
    }

    // 5. 初始化状态
    componentDidMount() {
        // 6. store的监听方法
        store.subscribe(() => {
            // 初始化的时候
            console.log("subscribe: ",store.getState())
            // 7. 需要更改渲染的内容，一定需要使用setState
            this.setState({})
        })

    }

    render() {
        return (
            <>
                {/*1. 创建一个更改状态的trigger*/}
                <button onClick={this.handleClick}>
                    点我点我，发送一个action
                </button>
                {/*8. 通过使用store.getState()获取到最新的状态*/}
                <div>{store.getState().value}</div>
            </>
        );
    }
}

export default Home;