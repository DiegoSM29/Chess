import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    incrementByAmount: (state, action) => {
      const [num1, num2, num3, num4] = action.payload;
      state.count += num4;
    }
  }
}) 

export const {increment, decrement, incrementByAmount} = counterSlice.actions;

export default counterSlice.reducer;