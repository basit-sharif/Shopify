import { GrClose } from 'react-icons/gr';
import { BsFacebook } from 'react-icons/bs';
import { FaTwitter } from 'react-icons/fa';
import Expand from './Expand';
import { NavbarItemType } from '@/typesandArrays/NavbarItems';

export default function OffCanvasSidebarMobile({ data, sidebar, setSidebar }: any) {
    return (
      <>
        <div onMouseLeave={() => { setSidebar(false) }} className={`${sidebar ? "visible" : "invisible"} flex-col items-end fixed top-0 right-0 px-2 w-80 h-screen overflow-y-auto bg-white `}>
          {/* For Animate : absolute ${sidebar ? "translate-x-0 " : "translate-x-full"} transition-all duration-500  */}
          <div className="flex justify-end w-full border-b-2 cursor-pointer py-5 transition duration-75 " >
            <div onClick={() => { setSidebar(!sidebar) }} className="p-4 active:bg-gray-200">
              <GrClose />
            </div>
          </div>
          <ul className=" w-full">
            {data.map((item: NavbarItemType, index: number) =>
              <li key={index}>
                <Expand items={item} sidebar={sidebar} setSidebar={setSidebar}/>
                {/* <Expand label={item.label} dropdown={item.dropdown} child={item.child}/> */}
              </li>
            )}
          </ul>
          <div className="cursor-pointer flex justify-start w-full p-4 space-x-5 " >
            <BsFacebook size={25} />
            <FaTwitter size={25} />
          </div>
        </div>
      </>
    )
  }