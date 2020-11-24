import React from "react";
import TodoFooter from "./components/todo-footer";
import TodoHeader from "./components/todo-header";
import TodoList from "./components/todo-list";

function App() {
  return (
    <div className="App">
      <TodoHeader/>
      <TodoList/>
      <TodoFooter/>

    </div>
  );
}

export default App;
