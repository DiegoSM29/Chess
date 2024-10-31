import Image from "next/image";

export default class Pawn {
  constructor(numberOfPLayer) {
    this.name = "Pawn";
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
    return pieceToEat.numberOfPLayer !== this.numberOfPLayer
  }

  canMove(y, x, playerTurn, board) {
    if (board[y][x]) {
      return (playerTurn === this.numberOfPLayer &&
        (this.numberOfPLayer === 1 ?
          (
            this.pos.y + 1 === y && this.pos.x + 1 === x ||
            this.pos.y + 1 === y && this.pos.x - 1 === x
          ) :
          (
            this.pos.y - 1 === y && this.pos.x + 1 === x ||
            this.pos.y - 1 === y && this.pos.x - 1 === x
          )
        )
      )
    } else {
      return (
        (playerTurn === this.numberOfPLayer && (
          this.numberOfPLayer === 1 ?
            this.pos.x === x && this.pos.y + 1 === y :
            this.pos.x === x && this.pos.y - 1 === y
        )
        ))
    }
  }

  updatePos(newPos) {
    this.pos = newPos;
  }
}