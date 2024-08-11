import { configureStore } from '@reduxjs/toolkit';
import counterReducer  from "../redux/slices/counterSlice";
import boardReducer from "../redux/slices/boardSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    board: boardReducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})