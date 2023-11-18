import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const initialState = {
  todoList: [],
  todoList2: [],
  status: "idle",
};
export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todoList.push(action.payload);
    },
    // updateTodo: (state, action) => {
    //   state.todoList2 = action.payload;
    // },
    // updateStatus: (state) => {
    //   state.status = "success";
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.pending, (state) => {
      state.status = "pending";
    });

    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.todoList2 = action.payload;
      state.status = "success";
    });

    builder.addCase(fetchTodos.rejected, (state) => {
      state.status = "error";
    });
  },
});

//Redux Thunk

export const fetchTodos = createAsyncThunk("fetchTodos", async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos`);
  const data = await response.json();
  return data;
});

// export const fetchTodos = () => {
//   return async (dispatch) => {
//     const response = await fetch(`https://jsonplaceholder.typicode.com/todos`);
//     const data = await response.json();
//     dispatch(todoSlice.actions.updateTodo(data));
//     dispatch(todoSlice.actions.updateStatus());
//   };
// };
