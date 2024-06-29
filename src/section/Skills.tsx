import React from 'react'
import { CardDemo } from '../components/ui/animatedSkill'
import { Stack } from '../components/ui/Stack'
const Skills:React.FC = () => {
  
  return (
    <div className='mt-10'>
       <h2 className='text-white text-center uppercase text-3xl md:text-5xl lg:text-6xl font-monumented mb-20'>skills</h2>
      <div className='flex flex-wrap items-center md:justify-between justify-center '>
        <div className='mb-7'>
          <h3 className='text-white font-conthrax text-xl text-center'>Language</h3>
          <CardDemo/>
        </div>
        <div>
          <h3 className='text-white font-conthrax text-xl text-center'>stack and library</h3>
          <Stack/>
        </div>
      </div>
    </div>
  )
}

export default Skills