const initState={
    text:'我是用来测试异步操作的',
    sign:null
}

export const reducer = (state=initState,action) =>{
    switch (action.type) {
        case 'SUCCESS':
            return {...state,text:action.text,sign:'success'}
        case 'ERROR':
            return {...state,text:action.text,sign:'error'}
        default:
            return state
    }
}