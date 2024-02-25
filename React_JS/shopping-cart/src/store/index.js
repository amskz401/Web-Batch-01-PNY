import { configureStore, createSlice } from "@reduxjs/toolkit";

const itemsList = createSlice({
  name: "items",
  initialState: [],
  reducers: {
    getItems: (state, action) => {
      state.concat(action.payload);
    },
  },
});

export const myStore = configureStore({
  reducer: {
    items: itemsList.reducer,
  },
});

export const itemsListActions = itemsList.actions;
