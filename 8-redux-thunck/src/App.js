import {Provider} from "react-redux";
import {store} from "./store";
import Example from "./components/example";
import React from "react";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Example/>
      </div>
    </Provider>

  );
}

export default App;
