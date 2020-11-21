const sendAction = () => {
    return {
        type: "SEND_ACTION",
        value: "发送一个action"
    }
}

module.exports = {
    sendAction
}