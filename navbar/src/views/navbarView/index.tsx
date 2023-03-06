import { logo } from "@/assets"
import Image from "next/image"
import { RiArrowDropDownLine } from 'react-icons/ri';
import { FiSearch } from 'react-icons/fi';
import { RiShoppingBagLine } from 'react-icons/ri';
import { CgMenuLeftAlt } from 'react-icons/cg';
import { NavbarItemType } from "@/typesandArrays/NavbarItems";
import { Jost } from 'next/font/google'

const inter = Jost({ subsets: ['latin'] })


interface typeofNavItems {
  navItem: Array<NavbarItemType>,
}

export default function NavbarView({ navItem }: typeofNavItems) {
  return (
    <main className="w-full py-7 bg-transparent ">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
        <div className="cursor-pointer">
          <Image src={logo} alt="motion" />
        </div>
        <ul className="hidden md:flex text-white space-x-10">
          {navItem && navItem.map((item: { label: string, dropdown: boolean }, index: number) => (
            <div key={index} className="flex items-center cursor-pointer">
              <h4 className={inter.className}>
                {item.label}
              </h4>
              <div className="mt-1">
                {item.dropdown ? <RiArrowDropDownLine size={25} /> : ""}
              </div>
            </div>
          ))}
        </ul>
        <div className="flex text-white space-x-6 sm:space-x-8">
          <FiSearch className="cursor-pointer" size={25} />
          <CgMenuLeftAlt className="block md:hidden cursor-pointer" size={30} />
          <RiShoppingBagLine className="cursor-pointer" size={25} />
        </div>
      </div>

    </main>
  )
}