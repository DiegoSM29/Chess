import Image from "next/image";

export default class King {
  constructor(numberOfPLayer){
    this.name = "King";
    this.numberOfPLayer = numberOfPLayer;
    this.pos = {x: 0, y: 0};
    this.image = <Image src={numberOfPLayer === 1 ? "/images/ReyBlanco.png" : "/images/ReyNegro.png"} alt="torre" width={40} height={25}/>   
  }
  canMove(y, x, playerTurn, board){
    if (this.numberOfPLayer === playerTurn) {
      let posibleY = [this.pos.y + 1, this.pos.y - 1, this.pos.y];
      let posibleX = [this.pos.x + 1, this.pos.x - 1, this.pos.x];
      let copyBoard = board.map(row => {
        return row.filter(piece => piece && piece.numberOfPLayer !== this.numberOfPLayer);
      });
      copyBoard = copyBoard.filter(e => e.length > 0);
      let posibleAtacksEnemy = copyBoard.map(row => {        
        return row.some(piece => {
          if (piece.name === "King"){            
            let posibleYOtherKing = [piece.pos.y + 1, piece.pos.y - 1, piece.pos.y];
            let posibleXOtherKing = [piece.pos.x + 1, piece.pos.x - 1, piece.pos.x];
            return posibleYOtherKing.includes(y) && posibleXOtherKing.includes(x)            
          }else if (piece.name === "Pawn"){
            if (piece.numberOfPLayer === 2){
              return (
                piece.pos.x + 1 === x && piece.pos.y - 1 === y ||
                piece.pos.x - 1 === x && piece.pos.y - 1 === y
              )
            }else{
              return (
                piece.pos.x + 1 === x && piece.pos.y + 1 === y ||
                piece.pos.x - 1 === x && piece.pos.y + 1 === y
              )
            } 
          }
          return piece.canMove(y, x, piece.numberOfPLayer, board)
        });
      });            
      return posibleY.includes(y) && posibleX.includes(x) && !posibleAtacksEnemy.some(e => e);
    }
    return false;
  }

  changePos(newPos){
    this.pos = newPos;
  }

  canEat(pieceToEat) {
    return pieceToEat.numberOfPLayer !== this.numberOfPLayer
  }
}