import { RevealWrapper } from  'next-reveal'

export default function FOOT()
{
    return(
        <>
                <div style={{overflowX:"hidden"}}>

        <RevealWrapper style={{ overflowX: 'hidden' }}  origin='left: ' delay={0} duration={1000} distance='50px' reset={true} viewOffset={{top:  0,  right:0,  bottom:  10,  left:15}}>

            <div className="mt-5 d-flex justify-content-center align-items-center" style={{backgroundColor:"#192a56",height:"40px"}}>
            <h6 style={{color:"white"}}>Developed with love by Mustafa Rizwan</h6>
            </div>
            </RevealWrapper>
            </div>
        </>
    )
}