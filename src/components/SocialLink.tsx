import React from 'react'
import Github from "../assets/image/github.png"
import Facebook from "../assets/image/facebook.png"
import Linkedin from "../assets/image/linkedin.png"

const SocialLink:React.FC = () => {
  return (
    <div className='flex items-center mt-5'>
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