import Image from "next/image";

export default class Bishop {
  constructor(numberOfPLayer ){
    this.numberOfPLayer = numberOfPLayer;
    this.name = "Alfil";
    // this.initialPos = initialPos;
    this.image = <Image src={numberOfPLayer === 1 ? "/images/AlfilBlanco.png" : "/images/AlfilNegro.png"} alt="torre" width={32} height={32}/>   
  }
  canMove(board){
    
  }
  changePos(newPos){
    this.pos = newPos;
  }
}