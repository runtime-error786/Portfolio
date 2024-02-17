import Image from "next/image";
import Pic from "../../../public/pic.jpg";

export default function Img() {
  return (
    <>
      <Image
        src={Pic}
        className="w-75 h-75 g1"
        alt="image is here"
        style={{ borderRadius: "50%", boxShadow: "0 0 50px rgba(0, 0, 0, 0.5)" }}
      />
    </>
  );
}
