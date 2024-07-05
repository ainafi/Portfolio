import React, { useEffect } from 'react';
import Logo from "../assets/image/logo.png";
import gsap from 'gsap';
import Resume from "../assets/resume Aina.pdf"
const Navbar: React.FC = () => {
  useEffect(() => {
    const tl = gsap.timeline();
    tl.to("#nav img", {
      opacity: 1,
      y: 50,
      duration: 1.2,
      ease: "power1.out",
    })
    .to("#nav a", {
      opacity: 1,
      y: 50,
      duration: 1.7,
      ease: "power1.out",
      stagger: 0.1
    }, "-=0.9"); 
  }, []);

  return (
    <div id="nav" className="flex justify-between items-center pb-8">
      <img className="w-[150px]" src={Logo} alt="Logo" />
      <a target='__blank' href={Resume} className="text-white font-poppins text-[18px] capitalize flex items-center">
        resume
        <span className="mr-4 p-2">
          <svg width="28" height="16" viewBox="0 0 28 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M27.7071 8.70711C28.0976 8.31658 28.0976 7.68342 27.7071 7.29289L21.3431 0.928932C20.9526 0.538408 20.3195 0.538408 19.9289 0.928932C19.5384 1.31946 19.5384 1.95262 19.9289 2.34315L25.5858 8L19.9289 13.6569C19.5384 14.0474 19.5384 14.6805 19.9289 15.0711C20.3195 15.4616 20.9526 15.4616 21.3431 15.0711L27.7071 8.70711ZM0 9H27V7H0V9Z" fill="white"/>
          </svg>
        </span>
      </a>
    </div>
  );
};

export default Navbar;
