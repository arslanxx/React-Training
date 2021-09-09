import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import usersReducer from "./user/userReducer";
const store = createStore(usersReducer, applyMiddleware(thunk));
export default store;
