
import Boy from "./components/boy";
import Girl from "./components/girl";
import {Boy2} from "./components/boy2";
import {Provider} from "react-redux";
import {store} from "./store";

function App() {
  return (
      <Provider store={store}>
          {/*<Boy/>*/}
          <Girl/>
          <Boy2/>
      </Provider>

  );
}

export default App;
