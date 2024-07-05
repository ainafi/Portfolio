import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const Bar: React.FC = () => {
  const scrollRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    gsap.to("#bar", {
      opacity: 1,
      x:10,
      duration: 2,
      ease: "expo.inOut",
      delay: 1
    });
    gsap.to(scrollRef.current, {
      scrollTrigger: {
        trigger: scrollRef.current,
        start: "top center",
        scrub: 1.9
        
      },
      xPercent: -50,
      ease:"sine.inOut"
    });
  }, []);

  return (
    <div id='bar' className='flex items-center p-5 bg-black h-[50px] md:h-[100px] -rotate-12 md:-rotate-3 w-full text-nowrap overflow-hidden absolute left-0 md:top-[600px] top-[440px] opacity-0'>
      <h2 id="title" ref={scrollRef} className='text-white font-conthrax w-full capitalize md:text-[35px] text-center'>
        Aina Finaritra Razanamino - Aina Finaritra Razanamino - Aina Finaritra Razanamino - Aina Finaritra Razanamino -
      </h2>
    </div>
  );
};

export default Bar;
