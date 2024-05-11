"use client"
import Link from "next/link";
import Image from "next/image";

import { cn } from "../../lib/utils";
import HomeButton from "./HomeButton";
import NavBarSearchInput from "./NavbarSearchInput";


const Navbar = () => {
  // Replace with your auth of choice, e.g. Clerk: const { userId } = auth();


  return (
    <nav
      className={cn(
        " h-18  inset-x-0 top-0 z-30 w-screen  transition-all"
      )}
    >
      <div className="">
      <div className="  flex flex-col sm:flex-row items-center justify-center md:justify-between py-4  ">
        <div className="w-2/3 md:w-1/2 flex items-center justify-center ">
          <HomeButton />
        </div>
        
        <div className="w-full md:w-1/2 flex items-center  justify-center ">
          <div className="w-full sm:px-4 lg:w-2/3" >
            <NavBarSearchInput />
          </div>
        
        </div>
      </div>
    </div>
    </nav>
  );
};

export default Navbar;
