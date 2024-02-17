import React from 'react';
import { Anton} from 'next/font/google'

const Kani1 = Anton({
  weight: '400',
  subsets: ['latin'],
})
export default function Skill({ fw }) {
  return (
    <>
      <div className="container-fluid  mb-2 pb-5 pt-5" ref={fw}>
        <div className="row ">
          <div className="col-12 text-center">
            <h2 className={`${Kani1.className} k1 pt-3`}>Technical Skills</h2>
            <div className="container">
              <div className="skill">
                <span className="skill-name">HTML</span>
                <div className="progress">
                  <div className="progress-bar bg-success  progress-bar-striped progress-bar-animated" role="progressbar" style={{ width: '100%' }} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100}>100%</div>
                </div>
              </div>
              <div className="skill">
                <span className="skill-name">CSS</span>
                <div className="progress">
                  <div className="progress-bar bg-info progress-bar-striped progress-bar-animated" role="progressbar" style={{ width: '86%' }} aria-valuenow={86} aria-valuemin={0} aria-valuemax={100}>86%</div>
                </div>
              </div>
              <div className="skill">
                <span className="skill-name">JavaScript</span>
                <div className="progress">
                  <div className="progress-bar bg-warning progress-bar-striped progress-bar-animated" role="progressbar" style={{ width: '80%' }} aria-valuenow={80} aria-valuemin={0} aria-valuemax={100}>80%</div>
                </div>
              </div>
              <div className="skill">
                <span className="skill-name">React JS</span>
                <div className="progress">
                  <div className="progress-bar bg-info progress-bar-striped progress-bar-animated" role="progressbar" style={{ width: '85%' }} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100}>85%</div>
                </div>
              </div>
              <div className="skill">
                <span className="skill-name">Next JS</span>
                <div className="progress">
                  <div className="progress-bar bg-danger progress-bar-striped progress-bar-animated" role="progressbar" style={{ width: '57%' }} aria-valuenow={57} aria-valuemin={0} aria-valuemax={100}>57%</div>
                </div>
              </div>
              <div className="skill">
                <span className="skill-name">Node JS</span>
                <div className="progress">
                  <div className="progress-bar bg-warning progress-bar-striped progress-bar-animated" role="progressbar" style={{ width: '83%' }} aria-valuenow={83} aria-valuemin={0} aria-valuemax={100}>83%</div>
                </div>
              </div>
              <div className="skill">
                <span className="skill-name">React Native</span>
                <div className="progress">
                  <div className="progress-bar bg-warning progress-bar-striped progress-bar-animated" role="progressbar" style={{ width: '85%' }} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100}>85%</div>
                </div>
              </div>
              <div className="skill">
                <span className="skill-name">Typescript</span>
                <div className="progress">
                  <div className="progress-bar bg-danger progress-bar-striped progress-bar-animated" role="progressbar" style={{ width: '45%' }} aria-valuenow={45} aria-valuemin={0} aria-valuemax={100}>45%</div>
                </div>
              </div>
              <div className="skill">
                <span className="skill-name">Python</span>
                <div className="progress">
                  <div className="progress-bar bg-danger progress-bar-striped progress-bar-animated" role="progressbar" style={{ width: '47%' }} aria-valuenow={47} aria-valuemin={0} aria-valuemax={100}>47%</div>
                </div>
              </div>
            </div>
          
            </div>
            
         
        </div>
      </div>
    </>
  );
}
