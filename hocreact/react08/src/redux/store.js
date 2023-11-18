import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./slices/counterSlice";
import { todoSlice } from "./slices/todoSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    todo: todoSlice.reducer,
  },
});
