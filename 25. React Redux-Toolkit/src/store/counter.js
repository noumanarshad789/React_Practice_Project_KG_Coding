import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { counter: 0 },
  reducers: {
    increment: (state) => {
      state.counter++;
    },
    decrement: (state) => {
      state.counter--;
    },
    add: (state, action) => {
      state.counter += Number(action.payload);
    },
    subtraction: (state, action) => {
      state.counter -= Number(action.payload);
    },
  },
});


export const counterAction = counterSlice.actions;
export default counterSlice