import { combineReducers } from "redux";
import { toDoReducer } from "./reducer-todo";


const rootReducer = combineReducers({
    toDoReducer
});

export default rootReducer;