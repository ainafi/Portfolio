import React, { useRef } from 'react'
import Github from "../assets/image/github.png"
import Facebook from "../assets/image/facebook.png"
import Linkedin from "../assets/image/linkedin.png"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const SocialLink:React.FC = () => {
  const tl=gsap.timeline()
  const socialLinkRef=useRef<HTMLHeadingElement>(null)
  useGSAP(()=>{
    tl.staggerFrom("#link a",1.8,{
      opacity:0,
      y:30,
      delay:.4,
      stagger:.22,
      ease: "elastic",
    })
    tl.to(socialLinkRef.current,{
      scrollTrigger:{
        trigger:socialLinkRef.current,
        start:"top center",
        scrub:4,
      },
      yPercent:-20
    })
  },[])
  return (
    <div ref={socialLinkRef} id="link" className='flex items-center mt-5'>
        <a href="">
            <img className='w-6 mr-4' src={Github} alt="" />
        </a>
        <a href="">
            <img className='w-3 mr-4' src={Facebook} alt="" />
        </a>
        <a href="">
            <img className='w-6 mr-4' src={Linkedin} alt="" />
        </a>
    </div>
  )
}

export default SocialLink

// 