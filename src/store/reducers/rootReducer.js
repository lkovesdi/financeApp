import userReducer from "./user_reducers";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  user: userReducer
});

export default rootReducer;
