"use client"

import { useEffect, useState } from "react";
import Square from "./square";
import { useSelector, useDispatch } from "react-redux";
import { movePiece, eatPiece } from "@/app/redux/slices/boardSlice";

const ChessBoard = () => {
  const [playerTurn, setPlayerTurn] = useState(1);
  const board = useSelector((state) => state.board.initialBoard);
  const dispatch = useDispatch();
  const [pieceSelected, setPieceSelected] = useState(null);
  const [positionSelected, setPositionSelected] = useState(null);  

  const getCurrentKing = (board) => {
    return board.map(row => row.filter(piece => piece?.name === "King" && piece.numberOfPlayer === playerTurn)).flat(Infinity)[0]
  }

  const simulateMove = (y, x, previousI, previousJ, newPiece) => {
    const newBoard = board.map(row => [...row]);
    newBoard[y][x] = newPiece;
    newBoard[previousI][previousJ] = null;
    newPiece.pos.x = x;
    newPiece.pos.y = y;
    return newBoard;
  }

  const updateBoard = (y, x) => {
    const currentPiece = board[y][x];
    if (currentPiece && !pieceSelected) {
      setPieceSelected(currentPiece);
      setPositionSelected([y, x]);
    } else if (!currentPiece && pieceSelected) {
      if (pieceSelected.canMove(y, x, playerTurn, board)) {
        const [previousI, previousJ] = positionSelected;        
        const newBoard = simulateMove(y, x, previousI, previousJ, pieceSelected);
        const currentKing = getCurrentKing(newBoard);
        const kingInCheck = currentKing.checkMate(currentKing.pos.y, currentKing.pos.x, newBoard).some(e => e);        
        if (!kingInCheck) {          
          dispatch(movePiece({ y, x, previousI, previousJ, pieceSelected }))
          setPlayerTurn(prevTurn => prevTurn === 1 ? 2 : 1);
        }
      }
      setPieceSelected(null);
      setPositionSelected(null);
    } else if (currentPiece && pieceSelected) {
      if (pieceSelected.canMove(y, x, playerTurn, board) && pieceSelected.canEat(currentPiece)) {
        const [previousI, previousJ] = positionSelected;
        const newBoard = simulateMove(y, x, previousI, previousJ, pieceSelected);
        const currentKing = getCurrentKing(newBoard);
        const kingInCheck = currentKing.checkMate(currentKing.pos.y, currentKing.pos.x, newBoard).some(e => e);
        if (!kingInCheck) {
          dispatch(eatPiece(currentPiece))
          dispatch(movePiece({ y, x, previousI, previousJ, pieceSelected }))
          setPlayerTurn(prevTurn => prevTurn === 1 ? 2 : 1);
        }
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
            let piecePicked;            
            if (pieceSelected && pieceSelected.pos.x === x && pieceSelected.pos.y === y) {
              piecePicked = true
            } else {
              piecePicked = false
            }            
            return (
              <button key={`${x}-${y}`} onClick={() => updateBoard(y, x)}>
                <Square y={y} x={x} piecePicked={piecePicked}>
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
