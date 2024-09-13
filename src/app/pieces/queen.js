import Image from "next/image";

export default class Queen {
  constructor(numberOfPLayer){
    this.name = "Reyna";
    this.numberOfPLayer = numberOfPLayer;
    // this.initialPos = initialPos;
    this.image = <Image src={numberOfPLayer === 1 ? "/images/ReinaBlanca.png" : "/images/ReinaNegra.png"} alt="torre" width={65} height={65}/>   
  }
  canMove(board){
    
  }
  changePos(newPos){
    this.pos = newPos;
  }
}