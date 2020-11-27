import React from "react";
import Home from "./component/home";


// 写在最开始：这里是根据网上https://juejin.cn/post/6844903728298852366
// 对于redux源码分析进行的魔改，redux的版本是5.0.1，还木有引入typescript，新版是有typescript还不知道怎么弄。
// 欢迎各位对我进行吊打！；）
// ps: 如果你直接使用redux，会缺少symbol-observable这个库，所以
function App() {
  return (
    <>
      <h3>Hello World</h3>
        <Home/>
    </>
  );
}

export default App;
