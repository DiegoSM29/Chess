import Image from "next/image";

export default class Pawn {
  constructor(numberOfPLayer) {
    this.name = "Peón";
    this.numberOfPLayer = numberOfPLayer
    this.pos = 0;
    this.image = <Image
      src={numberOfPLayer === 1 ? "/images/PeonBlanco.jpg" : "/images/PeonNegro.png"}
      alt="torre"
      width={numberOfPLayer === 1 ? 45 : 27}
      height={numberOfPLayer === 1 ? 45 : 27}
    />
  }
  canEat(pieceToEat) {
    console.log(pieceToEat)
    console.log(this)    
    return pieceToEat.numberOfPLayer !== this.numberOfPLayer && (this.numberOfPLayer === 1 ?
      (
        this.pos.y + 1 === pieceToEat.pos.y && this.pos.x + 1 === pieceToEat.pos.x ||
        this.pos.y + 1 === pieceToEat.pos.y && this.pos.x - 1 === pieceToEat.pos.x
      ) :
      (
        this.pos.y - 1 === pieceToEat.pos.y && this.pos.x + 1 === pieceToEat.pos.x ||
        this.pos.y - 1 === pieceToEat.pos.y && this.pos.x - 1 === pieceToEat.pos.x
      ))
  }

  canMove(y, x) {
    return this.numberOfPLayer === 1 ?
      this.pos.x === x && this.pos.y + 1 === y :
      this.pos.x === x && this.pos.y - 1 === y
  }

  updatePos(newPos) {
    this.pos = newPos;
  }
}