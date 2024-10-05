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
    if (largestX - minorX === largestY - minorY && playerTurn === this.numberOfPLayer) {
      let otherList = board.slice(minorY, largestY);
      otherList = otherList.map((row, indexY) => {
        let rows = row.slice(minorX, largestX);
        if (          
          (this.pos.x > x && this.pos.y < y) ||
          (this.pos.x < x && this.pos.y > y)
        ) {
          return rows.filter((p, indexX) => indexY + indexX === row.length - 1);
        }
        return rows.filter((p, indexX) => indexY === indexX);
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