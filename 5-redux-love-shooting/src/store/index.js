import {createStore} from "redux";
import {reducer} from "./reducer";


const initialState = {
    isSend: false
}

export const store = createStore(reducer, initialState)