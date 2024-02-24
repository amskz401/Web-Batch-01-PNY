import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: { count: 0 },
  reducers: {
    inc: (state, action) => {
      state.count += 1;
    },
    dec: (state, action) => {
      state.count -= 1;
    },
    add: (state, action) => {
      console.log(state, action);
      state.count += Number(action.value);
    },
    sub: (state, action) => {
      console.log(state, action);
      state.count -= Number(action.value);
    },
  },
});

export default counterSlice.reducers;

export const counterActions = counterSlice.actions;
