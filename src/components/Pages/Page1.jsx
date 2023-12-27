
import './Pages.css'
import { useEffect,useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

import 'aos/dist/aos.css';

const Page1 = () => {
  const imgRef=useRef(null)
  const imgRef2=useRef(null)

  useEffect(()=>{
    const el=imgRef.current;
    const tl=gsap.timeline({
      scrollTrigger:{
        trigger:el,
        start: "100",
        end: "675",
        scrub:true,
        markers:false
      }
    })
    tl.to(el,{
      y:500, 
    })
  },[])

  useEffect(()=>{
    const el2=imgRef2.current;
    const tl2=gsap.timeline({
      scrollTrigger:{
        trigger:el2,
        start: "100",
        end: "675",
        scrub:true,
        markers:false
      }
    })
    tl2.to(el2,{
      y:500, 
    })
  },[])
  return (
    <>
           {/* for laptop */}
        
<div className='lap-content'>

  <div className="component-first">
  <div className='first1-div'>
  <div data-aos="fade-left"  data-aos-duration="2000"  className='upper-part'>
    <h1 className='oneh'>25M+ Downloads</h1>
    <p>on appstore and & google playstore</p>
    </div>
    <div data-aos="fade-up"  className='lower-part'>
    <img style={{height:70,width:240}} src='/world-communication-awards-for-best-digital-experience.png'/>
    <h1>ABC 123</h1>
    <p>We are the best web development company in the world</p>
    <span>view case study-<button>Skip</button></span>
    </div>
  </div>
  <div className='second1-div'>
 
  <img 
     ref={imgRef2}
    src='/nexgtv-entertainment-mobile-app-development.png'
       className="anm3"
    />

<img 
      ref={imgRef}
        src="/nexgtv-mobile-app-ui-design.png"
        className="anm4"
      />

  </div>
  </div>


  
  </div>
  

    </>
    
  )
}

export default Page1