import { combineReducers } from "redux";
import users from "./users_reducer";

const RootReducer = combineReducers({
  users
});

export default RootReducer;
