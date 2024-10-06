"use client"

import { useEffect, useState } from "react";
import Square from "./square";
import { useSelector, useDispatch } from "react-redux";
import { movePiece, eatPiece } from "@/app/redux/slices/boardSlice";

const ChessBoard = () => {

  // const [board, setBoard] = useState(initialBoard);
  // const count = useSelector((state) => state.counter.count);
  const [playerTurn, setPlayerTurn] = useState(1);
  const board = useSelector((state) => state.board.initialBoard);
  const dispatch = useDispatch();
  const [pieceSelected, setPieceSelected] = useState(null);
  const [positionSelected, setPositionSelected] = useState(null);  

  const updateBoard = (y, x) => {
    const currentPiece = board[y][x];
    if (currentPiece && !pieceSelected) {
      setPieceSelected(currentPiece);
      setPositionSelected([y, x]);
    } else if (!currentPiece && pieceSelected) {
      if (pieceSelected.canMove(y, x, playerTurn, board)) {
        const [previousI, previousJ] = positionSelected;
        dispatch(movePiece({ y, x, previousI, previousJ, pieceSelected }))
        setPlayerTurn(prevTurn => prevTurn === 1 ? 2 : 1);
      }
      setPieceSelected(null);
      setPositionSelected(null);
    }
    else if (currentPiece && pieceSelected) {
      if (pieceSelected.canMove(y, x, playerTurn, board) && pieceSelected.canEat(currentPiece)) {
        const [previousI, previousJ] = positionSelected;
        dispatch(eatPiece(currentPiece))
        dispatch(movePiece({ y, x, previousI, previousJ, pieceSelected }))
        setPlayerTurn(prevTurn => prevTurn === 1 ? 2 : 1);
      };
      setPieceSelected(null);
      setPositionSelected(null);
    }
  }

  return (
    <div className="w-full flex justify-center">
      <div className=" w-3/6 h-5/6 absolute mt-5 grid grid-cols-8 grid-rows-8">
        {board.map((ele, y) => (
          ele.map((square, x) => {
            square ? square.pos = { x, y } : null;
            let xd;
            if (pieceSelected && pieceSelected.pos.x === x && pieceSelected.pos.y === y) {
              xd = true
            } else {
              xd = false
            }
            return (
              <button key={`${x}-${y}`} onClick={() => updateBoard(y, x)}>
                <Square y={y} x={x} xdGa={xd}>
                  {square ? square.image : null}
                </Square>
              </button>
            )
          })
        ))}
      </div>
    </div>
  )
}

export default ChessBoard;
