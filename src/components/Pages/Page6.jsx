
import './Pages.css'
import { useEffect,useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

import 'aos/dist/aos.css';
import Aos from 'aos'


const Page6 = () => {
  const imgRef=useRef(null)


  useEffect(()=>{
    const el=imgRef.current;
    const tl=gsap.timeline({
      scrollTrigger:{
        trigger:el,
        start: "3625",
        end: "4000",
        scrub:true,
        markers:false
      }
    })
    tl.to(el,{
    y:-500
     
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
<div className='first6-div'>
<div data-aos="fade-left"  data-aos-duration="2000" className='upper-part'>
  <p>Developing ERP Solution for</p>
  <h1 className='sixh'>Text headline</h1>
  <p>in furniture industry</p>
  </div>
<div data-aos="fade-up" className='lower-part'>
  <h1>ABC 678</h1>
  <p>We are the best web development company in the world</p>
  <span>view case study-<button>Skip</button></span>
  </div>
</div>
<div className='second6-div'>


<img 
      ref={imgRef}
        src="/erp-app-development-service.png"
        className="anm7"
      />


</div>
</div>



</div>

    </>
  )
}

export default Page6