"use client"
import Image from 'next/image';
import { useState } from 'react';
import { RiArrowDropDownLine } from 'react-icons/ri';

export default function Expand({ items , sidebar, setSidebar }: any) {

    const [isrotate, setrotate] = useState(false)
    const [isdropdown, setDropdown] = useState(false);
    return (
        <div className={`rounded-sm border-b-2 p-4 active:bg-gray-200 w-full ${isdropdown ? `${items.heightToDisplay === 60 ? "h-[60rem]" : items.heightToDisplay === 52 ? "h-[52rem]" : "h-[12rem]"}` : "h-16"} transition-all duration-500`}>
            <div onClick={() => { setrotate(!isrotate); setDropdown(!isdropdown); }} className="cursor-pointer flex justify-between ">
                <h4>{items.label}</h4>
                {items.dropdown ? <div className={`rotate-0 ${isrotate ? "rotate-180" : "rotate-0"} duration-300`}><RiArrowDropDownLine size={30} /></div> : ""}
            </div>
            <div className={`${isdropdown ? "visible" : "hidden"} pl-5`}>
                {items.child && items.child.map((item: any, index: number) => (
                    <div key={index + 800} className={`space-y-5 py-3 `}>
                        <div className={`${sidebar ? "visible" : "invisible"}`}>
                            {item.firstMenu && item.firstMenu.map((subitem: any, index: number) => (
                                <div key={index + 900} className="space-y-3">
                                    <h4>{subitem.heading}</h4>
                                    {subitem.content.map((data: any, index: number) => (
                                        <div key={index + 1000}>
                                            <h4>
                                                {data.label}
                                            </h4>
                                        </div>
                                    ))}
                                </div>
                            ))}
                            {item.secondMenu && item.secondMenu.map((subitem: any, index: number) => (
                                <div key={index + 900} className="space-y-3">
                                    <h4>{subitem.heading}</h4>
                                    {subitem.content.map((data: any, index: number) => (
                                        <div key={index + 1000}>
                                            <h4>
                                                {data.label}
                                            </h4>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                        <div className={`${sidebar ? "visible" : "invisible"} space-y-3`}>
                            {item.thirdMenu && item.thirdMenu.map((subitem: any, index: number) => (
                                <div key={index + 500} className="md:w-44 lg:w-60 text-center ">
                                    {subitem.content && subitem.content.map((subsubsubItem: any, index: number) => (
                                        <div className="py-2" key={index + 600}>
                                            {subsubsubItem.image ? <Image src={subsubsubItem.image} alt="Come" /> : ""}
                                            <h3>{subsubsubItem.label}</h3>
                                        </div>
                                    )
                                    )}
                                    <h5>{subitem.heading}</h5>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}