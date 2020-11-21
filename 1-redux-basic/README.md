### Redux入门案例
1. 构建action, 通过创建一个函数，然后返回一个对象，注意需要携带type属性
2. 构建reducer，用来响应action，然后通过returen把数据传回给store
3. 利用createStore来构建store，构建的时候传递我们写好的reducer（目的：以后所有的action都会经过store，然后被reducer处理）
4. 利用store.subscribe()注册监听
5. 当我们利用store.dispatch()发送一个action的时候就能触发我们的监听了，在里面利用store.getState()就能拿到值
