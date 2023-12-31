import {
  combineReducers,
  legacy_createStore as createStore,
  applyMiddleware,
} from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import thunk from "redux-thunk";
import { counterReducer } from "./reducers/counterReducer";
import { todoReducer } from "./reducers/todoReducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  todo: todoReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

//Kỹ thuật tách Reducer
//rootReducer
// -- counterReducer
// -- todoReducer
// ==> Gom các reducer thành rootReducer bằng cách sử dụng hàm combineReducers()

//Action Creator --> Gom action thành 1 hàm để tái sử dụng
