import './Pages.css'
import { useEffect,useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

import 'aos/dist/aos.css';
import Aos from 'aos'


const Page5 = () => {

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
        start: "2700",
        end: "3325",
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
        start: "2900",
        end: "3325",
        scrub:true,
        markers:false
      }
    })
    tl2.to(el2,{
      y:500, 
    })
  },[])

  useEffect(()=>{
    const el3=imgRef3.current;
    const tl3=gsap.timeline({
      scrollTrigger:{
        trigger:el3,
        start: "2900",
        end: "3325",
        scrub:true,
        markers:false
      }
    })
    tl3.to(el3,{
      y:-500, 
    })
  },[])

  useEffect(()=>{
    const el4=imgRef4.current;
    const tl4=gsap.timeline({
      scrollTrigger:{
        trigger:el4,
        start: "3000",
        end: "3325",
        scrub:true,
        markers:false
      }
    })
    tl4.to(el4,{
      y:500, 
    
    })
  },[])

  useEffect(()=>{
    const el5=imgRef5.current;
    const tl5=gsap.timeline({
      scrollTrigger:{
        trigger:el5,
        start: "2700",
        end: "3325",
        scrub:true,
        markers:false
      }
    })
    tl5.to(el5,{
      y:-300, 
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
<div className='first5-div'>
<div data-aos="fade-left"  data-aos-duration="2000" className='upper-part'>
  <p>Text Headline</p>
  <h1 className='fiveh'>Text Headline</h1>
  <p>Footer Headline</p>
  </div>
<div data-aos="fade-up" className='lower-part'>
  <h1>ABC 567</h1>
  <p>We are the best web development company in the world</p>
  <span>view case study-<button>Skip</button></span>
  </div>
</div>
<div className='second5-div'>

<div className='twoimge'>
    <img 
     ref={imgRef1}
       src='/karavan-social-networking-app-screen.png'
       className="anm15"
     />

     <img 
      ref={imgRef2}
        src="/social-networking-app-case-study.png"
        className="anm16"
      />
      </div>
  <div className='imgetwo'>
      <img 
      ref={imgRef3}
        src="/karavan_2.png"
        className="anm17"
      />
      <img 
      ref={imgRef4}
        src="/karavan-social-networking-app-screen-2.png"
        className="anm18"
      />
      </div>
      
      <img 
      ref={imgRef5}
        src="/developers-for-social-media-app.png"
        className="anm19"
      />
      

</div>
</div>



</div>

    </>
  )
}

export default Page5