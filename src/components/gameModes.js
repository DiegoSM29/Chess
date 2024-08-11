import Image from "next/image";
import Link from "next/link";

const GameMode = ({title, description, href}) => {
  return (
    <Link 
      className="h-32 flex items-center rounded-lg bg-gradient-to-r from-sky-800 to cyan-700 mt-5 w-9/12 mx-auto hover:bg-sky-900 hover:translate-x-2.5 hover:text-white cursor-pointer shadow-lg shadow-blue-800 text-gray-500"
      href={href}
    >
      
      <Image src={"/images/gaa.jfif"} width={170} height={1} alt="Foto xd" className="flex justify-self-start rounded-md ml-2"/>
      <section className="w-full grid justify-end mr-10">
        <h1 className="font-bold font-sans text-xl"> {title} </h1>
        <h2> {description} </h2>
      </section>
    </Link>
  )
}

export default GameMode;