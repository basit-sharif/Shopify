import Image from "next/image";
import { subMenuType, everysubMenuType, everysubMenuContentType } from "@/typesandArrays/NavbarItems";

export default function DropDownMenu({ item }: { item: { label: string, dropdown: boolean, child?: Array<subMenuType> } }) {

    let underLineWidth: any;

    return (
        <div className={`invisible group-hover:visible hover:visible group-hover:translate-y-0 group-hover:opacity-100  opacity-0 -translate-y-3 group-hover:duration-300 ease-out absolute top-[4.06rem] left-0 right-0 ${item.label == "About" ? "bg-transparent shadow-none" : " bg-white"} shadow-lg `}>
            {/* <div className={`invisible group-hover:visible hover:visible group-hover:translate-y-0 group-hover:opacity-100  opacity-0 -translate-y-3 group-hover:duration-300 ease-out bg-white absolute top-[4.06rem] left-0 right-0 ${item.label == "About" ? "md:left-[27rem] lg:left-[43.05rem] w-36 py-0" : " "} shadow-lg `}> */}
            {item.child && item.child.map((subItem: subMenuType, index: number) =>
                <div key={index + 100} className={`max-w-6xl  ${item.label == "About" ? "absolute -top-5" : "w-11/12"} text-black flex justify-between  mx-auto  ${item.label == "About" ? "py-1" : "py-14 "} space-x-7`}>
                    {subItem.firstMenu && subItem.firstMenu.map((subsubItem: everysubMenuType, index: number) => (
                        <div key={index + 200} className="translate-y-3 group-hover:translate-y-0 duration-200 space-y-3 ">
                            <h3 className={`relative after:bg-black after:content-[' '] after:h-[2px] after:w-[0%] after:left-0 after:-bottom-1 after:absolute after:rounded-3xl after:duration-300 hover:after:w-[${subsubItem.underLineWidth}] `}>{subsubItem.heading}</h3>
                            <div className="w-40">
                                {subsubItem.content && subsubItem.content.map((subsubsubItem: everysubMenuContentType, index: number) => (
                                    <h4 key={index} className="leading-10 hover:ml-2 duration-200">
                                        {subsubsubItem.label}
                                    </h4>
                                )
                                )}
                            </div>
                        </div>
                    ))}
                    {subItem.secondMenu && subItem.secondMenu.map((subsubItem: everysubMenuType, index: number) => (
                        <div key={index + 300} className={`translate-y-10 group-hover:translate-y-0 duration-300`}>
                            <h3>{subsubItem.heading}</h3>
                            {subsubItem.content && subsubItem.content.map((subsubsubItem: everysubMenuContentType, index: number) => {
                                underLineWidth = (subsubsubItem.underLineWidth === "3.4rem" ? 'hover:after:w-15' : subsubsubItem.underLineWidth === "6.6rem" ? "hover:after:w-18" : subsubsubItem.underLineWidth === "3.7rem" ? "hover:after:w-17" : subsubsubItem.underLineWidth === "2.4rem" ? "hover:after:w-13" : "");
                                return (
                                    <h3 key={index + 400} className={`leading-10 relative after:bg-black after:h-[2px] after:w-[0%] after:left-0 after:bottom-1 after:absolute after:rounded-3xl after:duration-300 ${underLineWidth}`}>
                                        <div className="">
                                            {subsubsubItem.label}
                                        </div>
                                    </h3>
                                )
                            })}
                        </div>
                    ))}
                    {subItem.fourthMenu && subItem.fourthMenu.map((subsubItem: everysubMenuType, index: number) => (
                        <div key={index + 200} >
                            {/* <div key={index + 200} className="absolute top-0 right-0"> */}
                            <h3 className="relative after:bg-black after:content-[' '] after:h-[2px] after:w-[0%] after:left-0 after:-bottom-1 after:absolute after:rounded-3xl after:duration-300 hover:after:w-[4.5rem] ">{subsubItem.heading}</h3>
                            <div className="w-40 bg-white px-4 py-1">
                                {subsubItem.content && subsubItem.content.map((subsubsubItem: everysubMenuContentType, index: number) => (
                                    <h4 key={index} className="translate-y-3 group-hover:translate-y-0 duration-200 leading-10 hover:ml-2">
                                        {subsubsubItem.label}
                                    </h4>
                                )
                                )}
                            </div>
                        </div>
                    ))}
                    <div className="grid grid-cols-2 space-x-4">
                        {subItem.thirdMenu && subItem.thirdMenu.map((subsubItem: everysubMenuType, index: number) => (
                            <div key={index + 500} className={`translate-y-14 group-hover:translate-y-0 duration-500 md:w-44 lg:w-60 text-center `}>
                                {subsubItem.content && subsubItem.content.map((subsubsubItem: everysubMenuContentType, index: number) => (
                                    <div className="py-2" key={index + 600}>
                                        {subsubsubItem.image ? <Image src={subsubsubItem.image} alt="Come" /> : ""}
                                        <h3>{subsubsubItem.label}</h3>
                                    </div>
                                )
                                )}
                                <h5>{subsubItem.heading}</h5>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}



{/* <div key={index + 100} className={`max-w-6xl border-2 border-transparent ${item.label == "About" ? "max-w-[20.70rem] md:max-w-[20.85rem] 2xl:max-w-[20.95rem] lg:max-w-[21.15rem] relative":"w-11/12"} text-black flex justify-between  mx-auto  ${item.label == "About" ? "py-1" : "py-14 "} space-x-7`}> */ }