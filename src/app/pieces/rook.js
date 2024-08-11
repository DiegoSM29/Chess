import Image from "next/image";

export default class Rook {
  constructor(numberOfPLayer){
    this.numberOfPLayer = numberOfPLayer
    this.name = "Torre";
    // this.initialPos = initialPos;  
    this.image = <Image src={numberOfPLayer === 1 ? "/images/TorreBlanca.jpg" : "/images/TorreNegra.jpg"} alt="torre" width={55} height={55}/>   
  }
  canEat(pieceToEat) {    
    return pieceToEat.pos.y - 1 === this.pos.y && pieceToEat.pos.x === this.pos.x             
  }
  changePos(newPos){
    this.pos = newPos;
  }
}