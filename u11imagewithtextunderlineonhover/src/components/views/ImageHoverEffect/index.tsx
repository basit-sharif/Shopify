"use client"
import Image from "next/image";
import { useState } from "react";
import { ImageData, ImageDataType } from "@/components/typesAndArrays/ImageData";

export default function ImageHoverEffect() {
    let [scalingAnimation, setScalingAnimation] = useState("scale-125");

    const isBrowser = (): boolean => typeof window !== "undefined";

    if (isBrowser()) {
        window.addEventListener("scroll", () => {
            if (window.scrollY >= 200) {
                setScalingAnimation("scale-100");
            } else {
                setScalingAnimation("scale-125");
            }
        })
    }


    return (
        <div className="w-full p-3 sm:p-12">
            <div className="mx-auto max-w-7xl grid grid-cols-2 sm:grid-cols-4 overflow-hidden">

                {/* This is static */}

                {/* <div className="cursor-pointer relative group w-full overflow-hidden col-span-2 sm:col-start-1 sm:col-end-3">
                        <Image src="https://cdn.shopify.com/s/files/1/2091/0251/collections/mens-Stocksy_txpd2ea9debXoZ100_Medium_222225-edited_1512x.jpg?v=1500224081" className={`max-h-80 object-cover ${scalingAnimation} duration-1000`} width={1000} height={1000} alt="image" />
                        <div className="dullness"></div>
                        <div className="absolute bottom-4 sm:bottom-7 left-4 sm:left-6">
                            <h2>
                                Men
                            </h2>
                        </div>
                </div>
                <div className="cursor-pointer relative group w-full overflow-hidden">
                    <Image src="https://cdn.shopify.com/s/files/1/2091/0251/collections/pullovers_720x.jpg?v=1500223091" className={`image-prop ${scalingAnimation} duration-1000`} width={1000} height={1000} alt="image" />
                    <div className="dullness"></div>
                    <div className="absolute bottom-4 sm:bottom-7 left-4 sm:left-6">
                        <h2>
                            Pullovers
                        </h2>
                    </div>
                </div>
                <div className="overflow-hidden cursor-pointer relative group w-full">
                    <Image src="https://cdn.shopify.com/s/files/1/2091/0251/collections/bags_720x.jpg?v=1500223658" className={`image-prop ${scalingAnimation} duration-1000`} width={1000} height={1000} alt="image" />
                    <div className="absolute bottom-4 sm:bottom-7 left-4 sm:left-6">
                        <h2>
                            Bags
                        </h2>
                    </div>
                </div>
                <div className="overflow-hidden cursor-pointer relative group w-full">
                    <Image src="https://cdn.shopify.com/s/files/1/2091/0251/collections/camp_720x.jpg?v=1500223599" className={`image-prop ${scalingAnimation} duration-1000`} width={1000} height={1000} alt="image" />
                    <div className="dullness"></div>
                    <div className="absolute bottom-4 sm:bottom-7 left-4 sm:left-6">
                        <h2>
                            Camp
                        </h2>
                    </div>
                </div>
                <div className="overflow-hidden cursor-pointer relative group w-full">
                    <Image src="https://cdn.shopify.com/s/files/1/2091/0251/collections/backpacks_720x.jpg?v=1500223563" className={`image-prop ${scalingAnimation} duration-1000`} width={1000} height={1000} alt="image" />
                    <div className="dullness"></div>
                    <div className="absolute bottom-4 sm:bottom-7 left-4 sm:left-6">
                        <h2>
                            Backpacks
                        </h2>
                    </div>
                </div>
                <div className="overflow-hidden cursor-pointer relative group w-full col-span-2 sm:col-start-3 sm:col-end-5 bg-black">
                    <Image src="https://cdn.shopify.com/s/files/1/2091/0251/collections/womens-edited_1512x.jpg?v=1500224178" className={`max-h-80 object-cover ${scalingAnimation} duration-1000`} width={1000} height={1000} alt="image" />
                    <div className="dullness"></div>
                    <div className="absolute bottom-4 sm:bottom-7 left-4 sm:left-6">
                        <h2>
                            Women
                        </h2>
                    </div>
                </div> */}


                {/* This is dynamic */}

                {ImageData.map((item: ImageDataType, index: number) =>
                    <div key={index + 2} className={`${item.colSpan} ${item.TabColStart} ${item.TabColSpanEnd} overflow-hidden cursor-pointer relative group w-full`}>
                        <Image src={item.imageUrl} className={`${item.maxHeight ? "max-h-80 object-cover" : "image-prop"} ${scalingAnimation} duration-1000`} width={1000} height={1000} alt="image" />
                        <div className="dullness"></div>
                        <div className="absolute bottom-4 sm:bottom-7 left-4 sm:left-6">
                            <h2>
                                {item.label}
                            </h2>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
