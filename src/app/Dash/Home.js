import Image from "next/image";
import { Kanit } from 'next/font/google'
import Img from "./Img";
import { RevealWrapper } from  'next-reveal'
const Kani = Kanit({
    weight: '400',
    subsets: ['latin'],
})
import { Anton} from 'next/font/google'

const Kani1 = Anton({
  weight: '400',
  subsets: ['latin'],
})
export default function Home({ fw }) {
    return (
        <div style={{overflowX:"hidden"}}>

       
        <RevealWrapper  origin='left: ' delay={0} duration={1000} distance='50px' reset={true} >

        <div ref={fw} className="container-fluid d-flex justify-content-center align-items-center">
            <div className="row m-sm-5 p-sm-5">
                <div className="col-lg-7  text-center mt-lg-5 mt-md-2 pt-lg-1 mb-md-5 mt-5 pt-5">
                    <h4 className="as1 mt-lg-5">Hello, It&apos;s Me</h4>
                    <h1 className={`as2 ${Kani1.className}`}>Mustafa Rizwan</h1>
                    <h4 >And I am <span className="as3">Full Stack Developer</span></h4>
                    <p>with extensive experience for over one year. My expertise lies in creating frontend and backend apps.</p>
                    <div className="d-flex justify-content-center mb-2"> {/* Centering the button */}
                        <button className="n1">
                            <a href="https://www.facebook.com/profile.php?id=100011190823060">
                                <svg viewBox="0 0 16 16" fill="currentColor" id="facebook">
                                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"></path>
                                </svg>
                            </a>
                        </button>
                        <button className="n1">
                            <a href="https://www.linkedin.com/in/mustafa-rizwan-bbb752276/">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="1em"
                                    height="2.8em"
                                    viewBox="0 0 512 512"
                                    stroke-width="0"
                                    fill="currentColor"
                                    stroke="currentColor"
                                    class="w-5 h-5"
                                >
                                    <path
                                        d="M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32zm-273.3 373.43h-64.18V205.88h64.18zM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43 0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43zm264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44-17.74 0-28.24 12-32.91 23.69-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44 42.13 0 74 27.77 74 87.64z"
                                    ></path>
                                </svg>
                            </a>
                        </button>
                        <button className="n1">
                            <a href="https://github.com/runtime-error786?tab=repositories">
                                <svg fill="black" viewBox="0 0 496 512" height="2.6em"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
                            </a>
                        </button>
                    </div>
                    <div className="d-flex justify-content-center mb-2"> {/* Centering the button */}
                        <a href="/Mustafa_Rizwan_CV.pdf" download="Mustafa_Rizwan_CV.pdf" className="btn1">
                            <svg height="24" width="17" fill="#FFFFFF" viewBox="0 0 24 24" data-name="Layer 1" id="Layer_1" className="sparkle">
                                <path d="M10,21.236,6.755,14.745.264,11.5,6.755,8.255,10,1.764l3.245,6.491L19.736,11.5l-6.491,3.245ZM18,21l1.5,3L21,21l3-1.5L21,18l-1.5-3L18,18l-3,1.5ZM19.333,4.667,20.5,7l1.167-2.333L24,3.5,21.667,2.333,20.5,0,19.333,2.333,17,3.5Z"></path>
                            </svg>
                            <span className="text">Download CV</span>
                        </a>
                    </div>
                </div>
                <div className="col-lg-5 d-flex justify-content-center align-items-center text-center">
                    <Img />
                </div>
            </div>
        </div>
        </RevealWrapper>
        </div>
    );
}