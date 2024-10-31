import Image from "next/image";

export default class Knight {
  constructor(numberOfPLayer){
    this.name = "Knight";
    this.numberOfPLayer = numberOfPLayer;
    this.pos = 0;    
    this.image = <Image src={numberOfPLayer === 1 ? "/images/CaballoBlanco.png" : "/images/CaballoNegro.png"} alt="torre" width={55} height={55}/>   
  }
  canEat(pieceToEat) {
    return pieceToEat.numberOfPLayer !== this.numberOfPLayer
  }
  canMove(y, x, playerTurn, board){
    return (
      this.numberOfPLayer === playerTurn && 
      (
        this.pos.y + 2 === y && this.pos.x + 1 === x ||
        this.pos.y + 2 === y && this.pos.x - 1 === x ||
        this.pos.y - 2 === y && this.pos.x + 1 === x ||
        this.pos.y - 2 === y && this.pos.x - 1 === x ||
        this.pos.y + 1 === y && this.pos.x + 2 === x ||
        this.pos.y + 1 === y && this.pos.x - 2 === x ||
        this.pos.y - 1 === y && this.pos.x + 2 === x ||
        this.pos.y - 1 === y && this.pos.x - 2 === x
      )
    )
  }
  changePos(newPos){
    this.pos = newPos;
  }
}