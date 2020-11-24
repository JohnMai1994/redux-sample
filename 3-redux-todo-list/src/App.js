import React from "react";
import TodoFooter from "./components/todo-footer";
import TodoHeader from "./components/todo-header";
import TodoList from "./components/todo-list";
import {Provider} from "react-redux";
import store from "./store";

function App() {
    return (
        <Provider store={store}>
            <TodoHeader/>
            <TodoList/>
            <TodoFooter/>
        </Provider>

    );
}

export default App;
