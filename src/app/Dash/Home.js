import Image from "next/image";
import Img from "./Img";

export default function Home() {
    return (
        <div className="container-fluid d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
            <div className="row m-sm-5 p-sm-5">
                <div className="col-lg-7  text-center mt-lg-5 mt-md-2 pt-lg-1 mb-md-5">
                    <h4 className="as1">Hello, It&apos;s Me</h4>
                    <h1 className="as2">Mustafa Rizwan</h1>
                    <h4 >And I am <span className="as3">Full Stack Developer</span></h4>
                </div>
                <div className="col-lg-5  text-center">
                   <Img />
                </div>
            </div>
        </div>
    );
}
