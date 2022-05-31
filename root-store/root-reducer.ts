import {combineReducers} from "redux";
import product_reducer from './pages/product/reducers'

const rootReducer = combineReducers({
    product_reducer: product_reducer,
})
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
