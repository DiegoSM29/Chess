import Image from "next/image";

export default class King {
  constructor(numberOfPLayer){
    this.name = "Rey";
    this.numberOfPLayer = numberOfPLayer;
    // this.initialPos = initialPos;
    this.image = <Image src={numberOfPLayer === 1 ? "/images/ReyBlanco.png" : "/images/ReyNegro.png"} alt="torre" width={40} height={25}/>   
  }
  canMove(board){
    
  }
  changePos(newPos){
    this.pos = newPos;
  }
}