import {Provider} from "react-redux";
import store from "./store"
import ComA from "./components/ComA";
import ComB from "./components/ComB";

function App() {
  return (
   <Provider store={store}>
       <ComA/>
       <ComB/>

   </Provider>
  );
}

export default App;
