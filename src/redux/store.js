import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import mySaga from "../redux/saga";
import usersReducer from "./user/userReducer";
const sagaMiddleware = createSagaMiddleware();
// const store = createStore(
//   usersReducer,
//   composeWithDevTools(
//     applyMiddleware(thunk)
//     // other store enhancers if any
//   )
// );
const store = createStore(
  usersReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

// then run the saga
sagaMiddleware.run(mySaga);
export default store;
