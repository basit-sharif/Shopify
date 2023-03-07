"use client"
import { logo } from "@/assets"
import Image from "next/image"
import { RiArrowDropDownLine } from 'react-icons/ri';
import { FiSearch } from 'react-icons/fi';
import { RiShoppingBagLine } from 'react-icons/ri';
import { CgMenuLeftAlt } from 'react-icons/cg';
import { BsFacebook } from 'react-icons/bs';
import { FaTwitter } from 'react-icons/fa';
import { NavbarItemType } from "@/typesandArrays/NavbarItems";
import { Jost } from 'next/font/google'
import { useState } from "react"
import DropDownMenu from "./DropDownMenu";
import OffCanvasSidebarMobile from "./OffCanvasSidebarMobile";
import { subMenuType } from "@/typesandArrays/NavbarItems";

const inter = Jost({ subsets: ['latin'] })

interface typeofNavItems {
  navItem: Array<NavbarItemType>,
}

export default function NavbarView({ navItem }: typeofNavItems) {
  const [sidebar, setSidebar] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  return (
    <main className={`w-full py-7 bg-transparent`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
        <div className={`${sidebar === true ? "blur-sm" : "blur-0"} cursor-pointer`}>
          <Image src={logo} alt="motion" />
        </div>
        <ul className="hidden md:flex text-white space-x-10">
          {navItem && navItem.map((item: { label: string, dropdown: boolean, child?: Array<subMenuType> }, index: number) => (
            <div key={index + 700} className={`flex items-center cursor-pointer group ${item.child ? "hover:bg-white hover:text-black" : ""} py-3 px-4 `}>
              <h4 className={`${inter.className}`}>
                {item.label}
              </h4>
              <div className="mt-1">
                {item.dropdown ? <RiArrowDropDownLine size={25} /> : ""}
              </div>
              <div className={`invisible ${item.child ? "group-hover:visible hover:visible" : "invisible"}  `}>
                <DropDownMenu item={item} />
              </div>
            </div>
          ))}
        </ul>
        <div className="flex text-white space-x-6 sm:space-x-5">
          <FiSearch className="cursor-pointer" size={25} />
          <div onClick={() => { setSidebar(!sidebar) }}>
            <CgMenuLeftAlt className="block md:hidden cursor-pointer" size={30} />
          </div>
          <RiShoppingBagLine className="cursor-pointer" size={25} />
        </div>
      </div>
      <OffCanvasSidebarMobile data={navItem} sidebar={sidebar} setSidebar={setSidebar} />
    </main>
  )
}



// whitespace-nowrap