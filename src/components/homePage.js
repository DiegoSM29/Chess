import GameMode from "./gameModes";
import { gameModes } from "@/app/constants/constants";

const HomePage = () => {

  return(
    <div className="w-full mt-3 grid gap-5">
      {gameModes.map(({title, description, href}) => (
        <GameMode 
          key = {title} 
          title = {title} 
          description = {description} 
          href = {href}
        />
      ))}
    </div>
  )
}

export default HomePage;