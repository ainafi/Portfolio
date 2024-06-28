import React from 'react';
import { Spotlight } from '../components/ui/Spotlight';
import Navbar from '../components/Navbar';
import Wave from '../assets/image/wave .png';
import SocialLink from '../components/SocialLink';
import { TextGenerateEffect } from '../components/ui/text-generate-effect';

const Hero: React.FC = () => {
  const words = `interactive designer and developer`;

  return (
    <div className='relative md:h-screen '>
      <Navbar />
      <div className='pb-20 pt-36 relative'>
        <Spotlight className=' -top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='white' />
        <Spotlight className=' top-10 left-full h-[80vh]' fill='#E3007E' />
        <Spotlight className='top-28 -left-80 h-[80vh] w-[50vw]' fill='#4C3BCF' />
      </div>

      <div className='flex justify-center relative my-20 md:mt-[15rem]'>
        <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center absolute bottom-11 '>
          <h2><TextGenerateEffect words={words} className='' /></h2>
          <div className='flex items-center'>
            <img className='w-3 md:w-5' src={Wave} alt="" />
            <p className='text-white font-poppins text-sm md:tracking-wide md:text-lg lg:text-2xl mt-3 md:mt-8'>
              Hi there i’m full stack developer and UI/UX designer
            </p>
          </div>
          <SocialLink />
        </div>
      </div>
    </div>
  );
};

export default Hero;
