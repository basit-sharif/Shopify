"use client"
import { Reviewer } from "@/components/typesAndArrays"
import { ReviewerTypes } from "@/components/typesAndArrays"
import { Review } from "@/components/assets/images"
import Image from "next/image"
import { useState } from "react"

export default function Slider() {
    let isDragging = false;
    let tabBox: any;
    const isBrowser = () => typeof window !== "undefined";

    if (isBrowser()) {
        tabBox = document.querySelector(".scrollGrab");
    }

    function mouseMoves(e: any) {
        if (!isDragging) return;
        if (tabBox) {
            tabBox.scrollLeft -= e.movementX;
        }
    };
    function mouseDown() {
        isDragging = true
    }

    function mouseUp() {
        isDragging = false
    }


    let [active, setActive] = useState(0);
    const dotClickHandler = (e: any) => {
        const dotNum = e.target.getAttribute("data-key");
        setActive((active = parseInt(dotNum)));
    };



    return (
        <div className="py-16 space-y-14 bg-primary">
            <div className="text-center w-full h-full">
                <h2>Don't take our word for it</h2>
            </div>
            <div className="px-4">
                <div onMouseMove={mouseMoves} onMouseDown={mouseDown} onMouseUp={mouseUp} className="relative scrollGrab cursor-grab text-center flex overflow-x-hidden">
                    {Reviewer.map((item: ReviewerTypes, index: number) =>
                        <div key={index + 2} className="relative flex flex-col flex-shrink-0 justify-center items-center w-full sm:w-4/12 space-y-5 bg-white h-80 px-2">
                            <div className="absolute inset-0 z-20"></div>
                            <div className="w-20">
                                <Image src={Review} alt="Review" />
                            </div>
                            <h4>{item.heading}</h4>
                            <div className="flex flex-col items-center space-y-1 ">
                                <Image src={item.picture} className="reviewerImg" width={1000} height={1000} alt="image" />
                                <h3>{item.name}</h3>
                                <p>{item.post}</p>
                            </div>
                        </div>
                    )}
                        <div className=" fixed left-1/2 scale-y-110 -translate-x-1/2 right-1/2 z-20 mx-auto bg-white flex flex-col flex-shrink-0 justify-center items-center w-full sm:w-4/12 space-y-5 h-80 px-2">
                            <div className="z-20"></div>
                            <div className="w-20">
                                <Image src={Review} alt="Review" />
                            </div>
                            <h4>{Reviewer[active].heading}</h4>
                            <div className="flex flex-col items-center space-y-1 ">
                                <Image src={Reviewer[active].picture} className="reviewerImg" width={1000} height={1000} alt="image" />
                                <h3>{Reviewer[active].name}</h3>
                                <p>{Reviewer[active].post}</p>
                            </div>
                        </div>
                </div>
                <div className="flex flex-row w-full items-center justify-center space-x-1 mt-6">
                    {Reviewer.map((item:ReviewerTypes , index:number)=>
                        <input
                        key={index+10} 
                        className="cursor-pointer" 
                        type="radio" 
                        name="reviewr"
                        id=""
                        data-key={index}
                        onClick={dotClickHandler}
                        />
                    )}
                </div>
            </div>
        </div>
    )
}