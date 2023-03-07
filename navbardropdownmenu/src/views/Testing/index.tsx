import { SpringSummer2021, Backinbusiness } from "@/assets"
import Image from "next/image"

export default function Testing() {
    return (
        <div>{data.map((item: any) => (
            <>
                {console.log(item.image)}
            </>
        ))}</div>
    )
}



const data = [
    {
        image: { SpringSummer2021 },
        dropdown: false,
    },
    {
        image: { Backinbusiness },
        dropdown: false,
    },
]