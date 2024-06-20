import { combineReducers, createStore } from "redux";
import countReducer from "./reducers/countReducer";
import jobReducer from "./reducers/todolistReducer";
const rootReducer = combineReducers({
    countReducer,
    jobReducer,
})
const store = createStore(rootReducer);
export default store;