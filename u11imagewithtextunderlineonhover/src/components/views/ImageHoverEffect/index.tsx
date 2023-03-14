import Image from "next/image";

export default function ImageHoverEffect() {
    return (
        <div className="w-full p-2 sm:p-12">
            <div className="mx-auto max-w-7xl grid grid-cols-2 sm:grid-cols-4 p-4">
                <div className="cursor-pointer col-span-2 sm:col-start-1 sm:col-end-3">
                    <div className="relative group">
                        <Image src="https://cdn.shopify.com/s/files/1/2091/0251/collections/mens-Stocksy_txpd2ea9debXoZ100_Medium_222225-edited_1512x.jpg?v=1500224081" className="max-h-80 object-cover" width={1000} height={1000} alt="image" />
                        <div className="absolute bottom-7 left-6">
                            <h2>
                                Men
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="cursor-pointer relative group w-full">
                    <Image src="https://cdn.shopify.com/s/files/1/2091/0251/collections/pullovers_720x.jpg?v=1500223091" className="image-prop" width={1000} height={1000} alt="image" />
                    <div className="absolute bottom-7 left-6">
                        <h2>
                            Pullovers
                        </h2>
                    </div>
                </div>
                <div className="cursor-pointer relative group w-full">
                    <Image src="https://cdn.shopify.com/s/files/1/2091/0251/collections/bags_720x.jpg?v=1500223658" className="image-prop" width={1000} height={1000} alt="image" />
                    <div className="absolute bottom-7 left-6">
                        <h2>
                            Bags
                        </h2>
                    </div>
                </div>
                <div className="cursor-pointer relative group w-full bg-pink-500">
                    <Image src="https://cdn.shopify.com/s/files/1/2091/0251/collections/camp_720x.jpg?v=1500223599" className="image-prop" width={1000} height={1000} alt="image" />
                    <div className="absolute bottom-7 left-6">
                        <h2>
                            Camp
                        </h2>
                    </div>
                </div>
                <div className="cursor-pointer relative group w-full bg-yellow-800">
                    <Image src="https://cdn.shopify.com/s/files/1/2091/0251/collections/backpacks_720x.jpg?v=1500223563" className="image-prop" width={1000} height={1000} alt="image" />
                    <div className="absolute bottom-7 left-6">
                        <h2>
                            Backpacks
                        </h2>
                    </div>
                </div>
                <div className="cursor-pointer relative group col-span-2 sm:col-start-3 sm:col-end-5 bg-black">
                    <Image src="https://cdn.shopify.com/s/files/1/2091/0251/collections/womens-edited_1512x.jpg?v=1500224178" className="max-h-80 object-cover" width={1000} height={1000} alt="image" />
                    <div className="absolute bottom-7 left-6">
                        <h2>
                            Women
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    )
}
