
import './Pages.css'
import { useEffect,useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

import 'aos/dist/aos.css';
import Aos from 'aos'


const Page3 = () => {
  const imgRef=useRef(null)
  const imgRef2=useRef(null)

  useEffect(()=>{
    const el=imgRef.current;
    const tl=gsap.timeline({
      scrollTrigger:{
        trigger:el,
        start: "1450",
        end: "2025",
        scrub:true,
        markers:false
      }
    })
    tl.to(el,{
      y:-500, 
    })
  },[])

  useEffect(()=>{
    const el2=imgRef2.current;
    const tl2=gsap.timeline({
      scrollTrigger:{
        trigger:el2,
        start: "1450",
        end: "2025",
        scrub:true,
        markers:false
      }
    })
    tl2.to(el2,{
      y:500, 
    })
  },[])

   // text animation
   useEffect(()=>{
    Aos.init();
  },[])

  return (
    <>
               <div className='lap-content'>

<div className="component-first">
<div className='first3-div'>
<div data-aos="fade-left"  data-aos-duration="2000" className='upper-part'>
  <p>Powered by Advance</p>
  <img src='/nasa-mobile-app.png'/>
<p>Algorithms</p>
</div>

<div data-aos="fade-up" className='lower-part'>
  <h1>ABC 345</h1>
  <p>We are the best web development company in the world</p>
  <span>comming Soon <button>Skip</button></span>
  </div>
</div>
<div className='second3-div'>

<img 
     ref={imgRef2}
    src='/nasa-fitness-tracking-mobile-app.png'
       className="anm8"
    />

<img 
      ref={imgRef}
        src="/measure-total-body-weight-through-fitness-app.png"
        className="anm9"
      />

</div>
</div>



</div>

    </>
  )
}

export default Page3