
import './Pages.css'
import { useEffect,useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

import 'aos/dist/aos.css';
import Aos from 'aos'


const Page7 = () => {
  const imgRef=useRef(null)
  const imgRef2=useRef(null)

  useEffect(()=>{
    const el=imgRef.current;
    const tl=gsap.timeline({
      scrollTrigger:{
        trigger:el,
        start: "50% 50%",
        end: "bottom 50%",
        scrub:true,
        markers:false
      }
    })
    tl.to(el,{
      y:480, 
    })
  },[])

  useEffect(()=>{
    const el2=imgRef2.current;
    const tl2=gsap.timeline({
      scrollTrigger:{
        trigger:el2,
        start: "50% 50%",
        end: "bottom 50%",
        scrub:true,
        markers:false
      }
    })
    tl2.to(el2,{
      y:575, 
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
<div className='first7-div'>
<div data-aos="fade-left"  data-aos-duration="2000" className='upper-part'>
  <p>Biggest Classifieds</p>
  <h1 className='sevenh'>East Asia</h1>
  <p>Countries</p>
  </div>
<div data-aos="fade-up" className='lower-part'>
  <img src='/mobile-app-of-the-year-by-entrepreneur.png'/>
  <h1>ABC 23478</h1>
  <p>We are the best web development company in the world</p>
  <span>Coming soon <button>Skip</button></span>
  </div>
</div>
<div className='second7-div'>

<img 
     ref={imgRef2}
    src='/melltoo-img2.png'
       className="anm5"
    />

<img 
      ref={imgRef}
        src="/melltoo-img1.png"
        className="anm6"
      />

</div>
</div>



</div>

    </>
  )
}

export default Page7