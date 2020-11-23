
// 3. 编写一个发送action的方法：返回的是一个json的数据
const sendAction = () => {
    return {
        type: "SEND_ACTION",
        value: "发送一个action"
    }
}

module.exports = {
    sendAction
}