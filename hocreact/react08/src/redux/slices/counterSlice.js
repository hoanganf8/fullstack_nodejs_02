import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  count: 0,
};
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action) => {
      //type: counter/increment
      state.count = state.count + action.payload;
    },
    decrement: (state, action) => {
      //type: counter/decrement
      state.count = state.count - action.payload;
    },
  },
});
