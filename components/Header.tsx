import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ModeToggle } from "./ModeToggle";
import SearchInput from "./SearchInput";

function Header() {
  return (
    <header className="fixed z-20 flex items-center justify-between w-full p-5 bg-gradient-to-t from-gray-200/0 via-gray-900/25 to-gray-900 ">
      <Link href={"/"} className="mr-10">
        <Image
          src={"https://links.papareact.com/a943ae"}
          alt="Disney logo"
          width={120}
          height={100}
          className="cursor-pointer invert-0 dark:invert"
        />
      </Link>

      <div className="flex space-x-2">
        <SearchInput/>
        <ModeToggle/>        
      </div>
    </header>
  );
}

export default Header;