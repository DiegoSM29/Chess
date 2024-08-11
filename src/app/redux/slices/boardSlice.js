import { createSlice } from "@reduxjs/toolkit";
import { initialBoard } from "@/app/constants/constants";

const initialState = {
  initialBoard
};

export const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    movePiece: (state, action) => {    
      const {y, x, previousI, previousJ, pieceSelected} = action.payload;
      state.initialBoard[y][x] = pieceSelected;
      state.initialBoard[previousI][previousJ] = null; 
    }
  }
}) 

export const {movePiece} = boardSlice.actions;

export default boardSlice.reducer;