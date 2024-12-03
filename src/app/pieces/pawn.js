import Image from "next/image";

export default class Pawn {
  constructor(numberOfPlayer) {
    this.name = "Pawn";
    this.numberOfPlayer = numberOfPlayer
    this.pos = 0;
    this.image = <Image
      src={numberOfPlayer === 1 ? "/images/PeonBlanco.jpg" : "/images/PeonNegro.png"}
      alt="torre"
      width={numberOfPlayer === 1 ? 45 : 27}
      height={numberOfPlayer === 1 ? 45 : 27}
    />
  }
  canEat(pieceToEat) {
    return pieceToEat.numberOfPlayer !== this.numberOfPlayer
  }

  canMove(y, x, playerTurn, board) {
    if (board[y][x]) {
      return (playerTurn === this.numberOfPlayer &&
        (this.numberOfPlayer === 1 ?
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
        (playerTurn === this.numberOfPlayer && (
          this.numberOfPlayer === 1 ?
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