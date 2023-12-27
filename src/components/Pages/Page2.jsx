import './Pages.css'
import { useEffect,useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

import 'aos/dist/aos.css';
import Aos from 'aos'

const Page2 = () => {
  const imgRef=useRef(null)
  const imgRef2=useRef(null)


  useEffect(()=>{
    const el=imgRef.current;
    const tl=gsap.timeline({
      scrollTrigger:{
        trigger:el,
        start: "970",
        end: "1350",
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
        start: "970",
        end: "1350",
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
<div className='first2-div'>
<div data-aos="fade-left"  data-aos-duration="2000" className="upper-part">
  <p>The Next Big</p>
  <h1 className='twoh'>blockchain</h1>
  <p2>Revolution</p2>
  </div>
<div data-aos="fade-up"  className="lower-part" >
  <h1>ABC 123</h1>
  <p>We are the best web development company in the world</p>
  <span>Cooming soon <button>Skip</button></span>
  </div>
</div>
<div className='second2-div'>

<img 
     ref={imgRef2}
    src='/veme-blockchain-app-developed.png'
       className="anm1"
    />

<img 
      ref={imgRef}
        src="/veme-app-ui-design.png"
        className="anm2"
      />

</div>
</div>



</div>

    </>
  )
}

export default Page2