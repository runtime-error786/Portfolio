
import Image from "next/image"
import Pic from "../../../public/pic.jpg"
export default function Img()
{
    return(
        <>
            <Image src={Pic} className="w-75 h-75 rounded-5 g1 " alt="image is here"></Image>
        </>
    )
}