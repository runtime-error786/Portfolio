import Image from "next/image";
import Pic from "../../../public/pic.jpg";

export default function Img() {
    return (
        <>
            <Image src={Pic} className={"rounded-5 " + (window.innerWidth > 425 ? 'w-75' : 'w-100')} alt="Profile picture" />
        </>
    )
}
