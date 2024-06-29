import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';

const Loading: React.FC = () => {
  const [counter, setCounter] = useState<number>(0);

  const updateCounter = () => {
    setCounter((prevCounter) => {
      let newCounter = prevCounter + Math.floor(Math.random() * 10) + 1;
      if (newCounter > 100) {
        newCounter = 100;
      }
      if (newCounter < 100) {
        const delay = Math.floor(Math.random() * 200) + 50;
        setTimeout(updateCounter, delay);
      }
      return newCounter;
    });
  };

  useEffect(() => {
    updateCounter();
    gsap.to(".load", 1.5, {
      delay: 1.2,
      height: 0,
      stagger: {
        amount: 0.5
      },
      ease: "power4.inOut"
    });
  }, []);

  return (
    <div className="flex justify-center items-center overflow-hidden fixed">
      {[...Array(12)].map((_, index) => (
        <div key={index} className="load w-[200px] h-screen bg-black" />
      ))}
      <div className="absolute left-0 bottom-0">
        <h2 className="text-white font-monumented text-5xl">{counter}</h2>
      </div>
    </div>
  );
};

export default Loading;
