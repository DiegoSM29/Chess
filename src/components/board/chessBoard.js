"use client"

import { useEffect, useState } from "react";
import Square from "./square";
import { useSelector, useDispatch } from "react-redux";
import { movePiece } from "@/app/redux/slices/boardSlice";

const ChessBoard = () => {

  // const [board, setBoard] = useState(initialBoard);
  // const count = useSelector((state) => state.counter.count);
  const board = useSelector((state) => state.board.initialBoard);
  const dispatch = useDispatch();
  const [pieceSelected, setPieceSelected] = useState(null);
  const [positionSelected, setPositionSelected] = useState(null);

  // useEffect(() => {
  // console.log(board);
  // },[board])

  const updateBoard = (y, x) => {
    const currentPiece = board[y][x];
    if (currentPiece && !pieceSelected) {
      setPieceSelected(currentPiece);
      setPositionSelected([y, x]);
    } else if (!currentPiece && pieceSelected) {
      if (pieceSelected.canMove(y, x)) {
        const [previousI, previousJ] = positionSelected;
        dispatch(movePiece({ y, x, previousI, previousJ, pieceSelected }))
      }
      setPieceSelected(null);
      setPositionSelected(null);
    }
    else if (currentPiece && pieceSelected) {
      if (pieceSelected.canEat(currentPiece)) alert("Puede comer");
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
