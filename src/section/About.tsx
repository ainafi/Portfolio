import React from 'react'
import Aina from "../assets/image/aina.png"
const About:React.FC = () => {
  return (
    <div className='md:pt-20 pt-5'>
      <h2 className='text-white text-center uppercase text-3xl md:text-5xl lg:text-6xl font-monumented '>about me </h2>
      <div className='flex items-center flex-wrap md:justify-center'>
        <img className='py-5' src={Aina} alt="" />
        <div className='max-w-md'>
          <h4 className='text-white font-poppins font-semibold mb-5 text-center md:text-start'>Hi! I'm Aina Finaritra Razanamino.</h4>
          <p className='text-white font-poppins text-[16px]'>I'm a passionate computer science student at ENI Fianarantsoa and i’m full-stack developer with a knack for translating ideas into captivating and functional web applications. I thrive at the intersection of design and development, wielding the power of code to bring stunning user interfaces to life..</p>
        </div>
      </div>
    </div>
  )
}

export default About