import React from 'react'
import { CardDemo } from '../components/ui/animatedSkill'
import { Stack } from '../components/ui/Stack'
import { Database } from '../components/ui/Database'
import { Tools } from '../components/ui/Tools'
import {motion} from 'framer-motion'
const Skills:React.FC = () => {
  
  return (
    <div className='mt-10'>
       <motion.h2 
       whileInView={{x:[-100,0],opacity:[1],}}
        transition={{duration:1,ease:"easeIn"}}
       className='text-white text-center uppercase text-3xl md:text-5xl lg:text-6xl font-monumented mb-20'>skills</motion.h2>
      <div
      className='flex flex-wrap items-center md:justify-between justify-center '>
        <div className='mb-7'>
          <h3 className='text-white font-conthrax text-xl text-center'>Language</h3>
          <CardDemo/>
        </div>
        <div>
          <h3 className='text-white font-conthrax text-xl text-center'>stack and library</h3>
          <Stack/>
        </div>
        
      </div>
      <div className='flex flex-wrap items-center md:justify-between justify-center '>
        <div className='mb-7'>
          <h3 className='text-white font-conthrax text-xl text-center'>Database</h3>
          <Database/>
        </div>
        <div>
          <h3 className='text-white font-conthrax text-xl text-center'>Tools</h3>
          <Tools/>
        </div>
        
      </div>
    </div>
  )
}

export default Skills