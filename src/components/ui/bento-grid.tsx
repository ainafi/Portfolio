import { cn } from "../../utils/cn";
import { useState } from "react";
import {motion} from 'framer-motion'
export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  const [isHover, setIsHover] = useState<string | boolean>(false);

  const handleHover = () => {
    setIsHover(true);
  };

  return (
    <motion.div
    whileInView={{x:[-100,0],opacity:[1],}} transition={{duration:1,ease:"easeInOut"}} 
    onMouseEnter={handleHover}
    onMouseLeave={()=>setIsHover(false)}
      className={cn(
        `row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input shadow-none p-4 border-white/[0.2] border border-transparent flex flex-col items-center justify-center space-y-4 ${isHover ? 'gradient' : ''}`,
        className
      )}
    >
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200 text-center">
        {icon}
        <div className="font-conthrax text-white font-bold text-xl capitalize mb-4 md:text-4xl">
          {title}
        </div>
        <div className="font-poppins text-white text-sm md:text-[16px]">
          {description}
        </div>
      </div>
    </motion.div>
  );
};
