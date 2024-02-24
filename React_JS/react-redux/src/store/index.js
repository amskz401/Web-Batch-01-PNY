import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
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
      state.count += Number(action.payload);
    },
    sub: (state, action) => {
      console.log(state, action);
      state.count -= Number(action.payload);
    },
  },
});

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

export default store;

export const counterActions = counterSlice.actions;
