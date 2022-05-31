
import * as types from "./types";

const INITIAL_STATE = {
    products: null
};

export default(state = INITIAL_STATE, action: any) => {
    switch(action.type){
        case types.GET_ALL_CATEGORY: {
            return {
                ...state,
                products: action?.payload,
            }
        }
        default:
            return state;
    }
}