import Image from "next/image";

export default class King {
  constructor(numberOfPlayer){
    this.name = "King";
    this.numberOfPlayer = numberOfPlayer;
    this.pos = {x: 0, y: 0};
    this.image = <Image src={numberOfPlayer === 1 ? "/images/ReyBlanco.png" : "/images/ReyNegro.png"} alt="torre" width={40} height={25}/>   
  }
  canMove(y, x, playerTurn, board){
    if (this.numberOfPlayer === playerTurn) {
      let posibleY = [this.pos.y + 1, this.pos.y - 1, this.pos.y];
      let posibleX = [this.pos.x + 1, this.pos.x - 1, this.pos.x];
      let posibleAtacksEnemy = this.checkMate(y, x, board);
      return posibleY.includes(y) && posibleX.includes(x) && !posibleAtacksEnemy.some(e => e);
    }
    return false;
  }

  changePos(newPos){
    this.pos = newPos;
  }

  canEat(pieceToEat) {
    return pieceToEat.numberOfPlayer !== this.numberOfPlayer
  }

  checkMate(y, x, board){
    let copyBoard = board.map(row => {
      return row.filter(piece => piece && piece.numberOfPlayer !== this.numberOfPlayer);
    });
    copyBoard = copyBoard.filter(e => e.length > 0);
    let posibleAtacksEnemy = copyBoard.map(row => {        
      return row.some(piece => {
        if (piece.name === "King"){            
          let posibleYOtherKing = [piece.pos.y + 1, piece.pos.y - 1, piece.pos.y];
          let posibleXOtherKing = [piece.pos.x + 1, piece.pos.x - 1, piece.pos.x];
          return posibleYOtherKing.includes(y) && posibleXOtherKing.includes(x)            
        }else if (piece.name === "Pawn"){
          if (piece.numberOfPlayer === 2){
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
        return piece.canMove(y, x, piece.numberOfPlayer, board)
      });
    }); 
    return posibleAtacksEnemy;
  }
}