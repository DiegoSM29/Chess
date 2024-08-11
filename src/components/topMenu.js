"use client";

import Link from "next/link";
import { useState } from "react";
import { menuLinks } from "@/app/constants/constants";

const TopMenu = () => {

  const [isCurrentPage, setIsCurrentPage] = useState("/");

  return (    
    <nav className="w-full flex justify-center bg-gradient-to-r from-primary to-secondary sticky top-0" > 
      <ul className="flex items-center">
        {menuLinks.map(({href, label}) => (                    
          <li key={href} className={`font-serif m-7 text-3xl md:text-2xl xl:text-3xl ${isCurrentPage === href ? "text-tertiary" : null}`}> 
            <Link href={href} onClick={() => setIsCurrentPage(href)}> {label} </Link>                        
          </li>
        ))}                
      </ul>
    </nav>          
  )
}

export default TopMenu;