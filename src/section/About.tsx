import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Aina from '../assets/image/aina.png'
gsap.registerPlugin(ScrollTrigger);
const About:React.FC = () => {
  const aboutRef=useRef<HTMLHeadingElement>(null)
  const ainaRef=useRef<HTMLHeadingElement>(null)
  const textRef=useRef<HTMLHeadingElement>(null)
  useGSAP(()=>{
    gsap.from(aboutRef.current,{
      scrollTrigger: {
        trigger: aboutRef.current,
        start: "top bottom",
        scrub: 1.9
        
      },
      xPercent:40
    })
    gsap.from(ainaRef.current,{
      scrollTrigger: {
        trigger: ainaRef.current,
        start: "top bottom",
        scrub: 1.9
        
      },
      yPercent:-20
    })
    gsap.from(textRef.current,{
      scrollTrigger: {
        trigger: ainaRef.current,
        start: "top bottom",
        scrub: 1.9
        
      },
      yPercent:100
    })
  },[])
  return (
    <div className='md:pt-20 pt-5'>
      <h2 ref={aboutRef} className='text-white text-center uppercase text-3xl md:text-5xl lg:text-6xl font-monumented '>about me </h2>
      <div className='flex items-center flex-wrap md:justify-center'>
        <img ref={ainaRef} className='py-5' src={Aina} alt="" />
        <div ref={textRef} className='max-w-md'>
          <h4 className='text-white font-poppins font-semibold mb-5 text-center md:text-start'>Hi! I'm Aina Finaritra Razanamino.</h4>
          <p className='text-white font-poppins text-[16px]'>I'm a passionate computer science student at ENI Fianarantsoa and i’m full-stack developer with a knack for translating ideas into captivating and functional web applications. I thrive at the intersection of design and development, wielding the power of code to bring stunning user interfaces to life..</p>
        </div>
      </div>
    </div>
  )
}

export default About