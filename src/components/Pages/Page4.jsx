
import './Pages.css'
import { useEffect,useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

import 'aos/dist/aos.css';
import Aos from 'aos'


const Page4 = () => {
  const imgRef1=useRef(null)
  const imgRef2=useRef(null)
  const imgRef3=useRef(null)
  const imgRef4=useRef(null)
  const imgRef5=useRef(null)

  useEffect(()=>{
    const el1=imgRef1.current;
    const tl1=gsap.timeline({
      scrollTrigger:{
        trigger:el1,
        start: "2025",
        end: "2700",
        scrub:true,
        markers:false
      }
    })
    tl1.to(el1,{
      y:-500, 
    })
  },[])

  useEffect(()=>{
    const el2=imgRef2.current;
    const tl2=gsap.timeline({
      scrollTrigger:{
        trigger:el2,
        start: "2025",
        end: "2700",
        scrub:true,
        markers:false
      }
    })
    tl2.to(el2,{
      y:200, 
    })
  },[])

  useEffect(()=>{
    const el3=imgRef3.current;
    const tl3=gsap.timeline({
      scrollTrigger:{
        trigger:el3,
        start: "2025",
        end: "2700",
        scrub:true,
        markers:false
      }
    })
    tl3.to(el3,{
      y:-300, 
    })
  },[])

  useEffect(()=>{
    const el4=imgRef4.current;
    const tl4=gsap.timeline({
      scrollTrigger:{
        trigger:el4,
        start: "2025",
        end: "2700",
        scrub:true,
        markers:false
      }
    })
    tl4.to(el4,{
      y:200, 
      x:-200, 
    })
  },[])

  useEffect(()=>{
    const el5=imgRef5.current;
    const tl5=gsap.timeline({
      scrollTrigger:{
        trigger:el5,
        start: "2025",
        end: "2700",
        scrub:true,
        markers:false
      }
    })
    tl5.to(el5,{
      y:-200, 
      x:-200, 
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
<div className='first4-div'>
<div data-aos="fade-left"  data-aos-duration="2000" className='upper-part'>
  <p>Rendering</p>
  <h1 className='fourh'>UX Strategy</h1>
  <p>and UI design</p>
  </div>

<div data-aos="fade-up" className='lower-part'>
  <h1>ABC 456</h1>
  <p>We are the best web development company in the world</p>
  <span>view case study-<button>Skip</button></span>
  </div>
</div>
<div className='second4-div'>

<div className='fiveimg'>
    <img 
     ref={imgRef1}
       src='/pizza_box.png'
       className="anm10"
     />

     <img 
      ref={imgRef2}
        src="/domi-img1.png"
        className="anm11"
      />
      <img 
      ref={imgRef3}
        src="/ux-strategy-for-mobile-app-devlopment.png"
        className="anm12"
      />
      <img 
      ref={imgRef4}
        src="/dominos-bread.png"
        className="anm13"
      />
      <img 
      ref={imgRef5}
        src="/dominos-bread1.png"
        className="anm14"
      />
      </div>

</div>
</div>



</div>

    </>
  )
}

export default Page4