import { useRef } from "react";
import { Kanit } from 'next/font/google'
import Img from "./ImgAb";
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

export default function About({ fw }) {
  return (
    <div style={{overflowX:"hidden"}}>

    <RevealWrapper style={{ overflowX: 'hidden' }}  origin='left: ' delay={0} duration={1000} distance='50px' reset={true}>

    <div className="container pt-5" ref={fw}>
      <section className="row">
        <div className="col-lg-12 text-center pt-3">
          <h1 className={`${Kani1.className} k1 pb-5 mb-5`}>About Me</h1>
         
        </div>
        <div className="col-lg-6 text-center">
          <Img />
        </div>
        <div className="col-lg-6">
          <div className="text-center">
          <h1 className={`as3 ${Kani.className}`}>Full Stack Developer</h1>
            <p>I am a skilled web and app developer with 1 year of experience in the industry. My passion lies in creating captivating website and app designs and implementing them through front-end development. I take pride in staying up to date with current design trends and leveraging my creativity to produce visually appealing and user-friendly websites. Throughout my career, I have developed a deep understanding of user experience (UX) and user interface (UI) principles. I strive to create intuitive and seamless browsing experiences. I believe that a well-designed website and app should not only look visually appealing but also provide a smooth and enjoyable interaction for visitors. When starting a new project, I thoroughly research and analyze the target audience and client&apos;s specific requirements. This enables me to tailor my design to meet their expectations and deliver a unique online presence that aligns with their brand identity.</p>
          </div>
        </div>
      </section>
    </div>
    </RevealWrapper>
    </div>
  );
}
