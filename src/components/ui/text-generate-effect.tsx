"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "../../utils/cn";

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 2,
        delay: stagger(0.7),
      }
    );
  }, [animate]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          const gradientClass =
            word.toLowerCase() === "designer"
              ? "text-gradient"
              : word.toLowerCase() === "developer"
              ? "text-gradiente"
              : "text-white";
          return (
            <motion.span
              key={word + idx}
              className={`${gradientClass} opacity-0`}
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div className=" text-white text-[40px] md:text-5xl lg:text-6xl text-center font-monumented tracking-wide capitalize">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
