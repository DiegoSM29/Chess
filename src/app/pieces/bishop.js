import Image from "next/image";
export default class Bishop {

  constructor(numberOfPLayer) {
    this.numberOfPLayer = numberOfPLayer;
    this.pos = 0;
    this.name = "Alfil";
    // this.initialPos = initialPos;
    this.image = <Image src={numberOfPLayer === 1 ? "/images/AlfilBlanco.png" : "/images/AlfilNegro.png"} alt="Alfil" width={32} height={32} />
  }
  canMove(y, x, playerTurn, board) {
    let minorY = Math.min(this.pos.y, y) + 1;
    let largestY = Math.max(this.pos.y, y);
    let minorX = Math.min(this.pos.x, x) + 1;
    let largestX = Math.max(this.pos.x, x);
    if (largestX - minorX === largestY - minorY) {
      let otherList = board.slice(minorY, largestY);
      otherList = otherList.map((e, i) => {
        e = e.slice(minorX, largestX);
        if (          
          (this.pos.x > x && this.pos.y < y) ||
          (this.pos.x < x && this.pos.y > y)
        ) {
          return e.filter((p, o) => i + o === e.length - 1);
        }
        return e.filter((p, o) => i === o);
      });
      return !otherList.flat(Infinity).some(e => e);
    }
    return false;
  }

  changePos(newPos) {
    this.pos = newPos;
  }
  canEat(pieceToEat) {
    return pieceToEat.numberOfPLayer !== this.numberOfPLayer
  }
}