import { createSlice } from "@reduxjs/toolkit";

const MoneySlice = createSlice({
  name: "money",
  initialState: 0,
  reducers: {
    increment(state, action) {
      return state + action.payload;
    },
    decrement(state, action) {
      return state - action.payload;
    },
  },
});

export const { increment, decrement } = MoneySlice.actions;
export default MoneySlice.reducer;
