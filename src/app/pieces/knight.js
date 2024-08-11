import Image from "next/image";

export default class Knight {
  constructor(numberOfPLayer){
    this.name = "Caballo";
    this.numberOfPLayer = numberOfPLayer;
    // this.initialPos = initialPos;
    this.image = <Image src={numberOfPLayer === 1 ? "/images/CaballoBlanco.png" : "/images/CaballoNegro.png"} alt="torre" width={55} height={55}/>   
  }
  canMove(board){
    
  }
  changePos(newPos){
    this.pos = newPos;
  }
}