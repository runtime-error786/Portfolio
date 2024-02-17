import React from 'react';
import { Anton } from 'next/font/google'
import "./g.css";

const Kani1 = Anton({
    weight: '400',
    subsets: ['latin'],
})
export default function Exp({fw}) {
    return (
        <div ref={fw} className="container-fluid d-flex justify-content-center align-items-center mt-5 pt-5">
            <div className="row ">
                <h1 className={`text-center ${Kani1.className} k1 mt-2`}>Services</h1>
                <div className='row align-items-center justify-content-center mt-5 negative-gutter'> {/* Centering the row */}
                    <div className="text-center justify-content-center align-align-items-center d-flex col-lg-3 col-md-6 col-sm-12 mb-3">
                        <div className="card text-center ms-md-5">
                            <div className="card-body">
                                <h5 className={`card-title ${Kani1.className}`}>UI/UX Design</h5>
                                <p className="card-text">Elevate your digital presence with our expertly crafted UI designs, tailored to captivate your audience and drive engagement.
                                    Transform your vision into reality with our interactive prototyping services, offering a glimpse into the intuitive user experiences we create</p>
                            </div>
                        </div>
                    </div>
                    <div className="text-center justify-content-center align-align-items-center d-flex col-lg-3 col-md-6 col-sm-12 mb-3">
                        <div className="card text-center ms-md-5" >
                            <div className="card-body">
                                <h5 className={`card-title ${Kani1.className}`}>Website Design</h5>
                                <p className="card-text">Empower your web presence with our frontend development expertise, harnessing the capabilities of React.js for stunning user interfaces. Rely on our backend development prowess to build robust APIs with Node.js and Express.js, ensuring seamless data management</p>
                            </div>
                        </div>
                    </div>
                    <div className="text-center justify-content-center align-align-items-center d-flex col-lg-3 col-md-6 col-sm-12 mb-3">
                        <div className="card text-center  ms-md-5">
                            <div className="card-body">
                                <h5 className={`card-title ${Kani1.className}`}>Application Design</h5>
                                <p className="card-text">Accelerate your mobile app development journey with React Native, delivering cross-platform experiences without compromising on performance. Optimize your React Native apps for speed and efficiency, ensuring smooth animations and responsive interactions on every device.</p>
                            </div>
                        </div>
                    </div>
                    <div className="text-center justify-content-center align-align-items-center d-flex col-lg-3 col-md-6 col-sm-12 mb-3">
                        <div className="card text-center  ms-md-5">
                            <div className="card-body">
                                <h5 className={`card-title ${Kani1.className}`}>Windows Form(GUI)</h5>
                                <p className="card-text">I offer expert Graphical User Interface (GUI) services, crafting intuitive designs that elevate user experience and streamline interaction with software applications. From wireframing to final implementation, I ensure seamless navigation and visually appealing interfaces.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
