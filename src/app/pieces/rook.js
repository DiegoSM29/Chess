import Image from "next/image";

export default class Rook {
  constructor(numberOfPLayer) {
    this.numberOfPLayer = numberOfPLayer
    this.name = "Torre";
    this.pos = 0;
    this.image = <Image src={numberOfPLayer === 1 ? "/images/TorreBlanca.jpg" : "/images/TorreNegra.jpg"} alt="torre" width={55} height={55} />
  }
  canEat(pieceToEat) {
    return pieceToEat.numberOfPLayer !== this.numberOfPLayer
  }
  canMove(y, x, playerTurn, board) {    
    if (playerTurn === this.numberOfPLayer && this.pos.y === y && this.pos.x !== x) {
      let minorX = Math.min(this.pos.x, x) + 1;
      let largestX = Math.max(this.pos.x, x);
      return !board[y].slice(minorX, largestX).some(e => e);       
    } else if (playerTurn === this.numberOfPLayer && this.pos.x === x && this.pos.y !== y) {
      let minorY = Math.min(this.pos.y, y) + 1;
      let largestY = Math.max(this.pos.y, y);           
      let isThereSomePiece = board.map(e => {
        e = e.filter((piece,posPiece) => posPiece === x ? e : null);
        return e;
      });      
      return !isThereSomePiece.flat(Infinity).slice(minorY, largestY).some(e => e);
    } else {
      return false
    }
  }
  changePos(newPos) {
    this.pos = newPos;
  }
}