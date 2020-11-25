import {CHANGE_STATUS} from "../action/action-type/action-type";

const initialState = {
    isSend: false
}

export const reducer = (state = initialState, action) => {

    let newState;
    switch (action.type) {
        case CHANGE_STATUS:
            newState = {
                isSend: !state.isSend
            }
            break
        default:
            newState = state;
    }
    return newState;

}