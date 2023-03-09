"use client"
import { logo, logo2 } from "@/assets"
import Image from "next/image"
import { RiArrowDropDownLine } from 'react-icons/ri';
import { FiSearch } from 'react-icons/fi';
import { RiShoppingBagLine } from 'react-icons/ri';
import { CgMenuLeftAlt } from 'react-icons/cg';
import { BsFacebook } from 'react-icons/bs';
import { FaTwitter } from 'react-icons/fa';
import { NavbarItemType } from "@/typesandArrays/NavbarItems";
import { Jost } from 'next/font/google'
import { useEffect, useState } from "react"
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
  const [navbarcolor, setNavbarcolor] = useState(false);
  const [opacityForScroll, setOpacityForScroll] = useState(100);
  const [translate, setTranslate] = useState("translate-y-0");

  const isBrowser = (): boolean => typeof window !== "undefined";

  useEffect(() => {
    return () => {
      if (window.scrollY >= 401) {
        setTranslate("-translate-y-32");
        setOpacityForScroll(0);
        window.setTimeout(() => {
          setOpacityForScroll(100)
          setTranslate("translate-y-0");
        }, 10);
      }
    }
  }, [
    isBrowser() && window.scrollY >= 401
  ])


  if (isBrowser()) {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 401) {
        setNavbarcolor(true);
      } else {
        setNavbarcolor(false);
      }
    })
  }


  return (
    <main className={`w-full py-4 bg-transparent ${navbarcolor ? `${translate} duration-500  bg-white fixed border-y-2 h-20 opacity-${opacityForScroll}` : "bg-transparent "}`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
        <div className={` cursor-pointer`}>
          {navbarcolor ? <Image src={logo2} alt="motion" /> :
            <Image src={logo} alt="motion" />
          }
        </div>
        <ul className={`hidden md:flex flex-wrap space-x-10 text-gray-100 ${navbarcolor ? "text-gray-900" : ""}`}>
          {navItem && navItem.map((item: { label: string, dropdown: boolean, child?: Array<subMenuType> }, index: number) => (
            <div key={index + 700} className={`flex items-center cursor-pointer group ${item.child ? "hover:bg-white hover:text-black" : ""} py-3 px-4 `}>
              <h4 className={`${inter.className}`}>
                {item.label}
              </h4>
              <div className="mt-1">
                {item.dropdown ? <RiArrowDropDownLine size={25} /> : ""}
              </div>
              <div >
                {/* <div className={` invisible ${item.child ? " " : "invisible"}  `}> */}
                <DropDownMenu item={item} />
              </div>
            </div>
          ))}
        </ul>
        <div className={`flex text-gray-100 ${navbarcolor && "text-gray-900"} space-x-6 sm:space-x-5`}>
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