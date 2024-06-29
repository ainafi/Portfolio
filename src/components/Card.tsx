import React from "react";
import { CardBody, CardContainer, CardItem } from "../components/ui/3dCard";

interface ProjectProps {
  title: string;
  Stack: string[];
  Demo: string;
  link: string;
}

const CardProject: React.FC<ProjectProps> = ({ title, Stack, Demo, link }) => {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] h-auto w-full md:w-[550px] rounded-xl p-4 px-10 border md:mr-[2rem]">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white font-conthrax"
        >
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {title}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <img className="rounded-xl" src={Demo} alt={title} />
        </CardItem>
        <CardItem translateZ="100" className="w-5 mt-4 flex">
          {Stack.map((stackItem, index) => (
            <img className="mr-4" key={index} src={stackItem} alt="stack" />
          ))}
        </CardItem>
        <div className="flex justify-between items-center mt-10">
          <CardItem
            translateZ={20}
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            <a className="text-[20px] capitalize  font-poppins" target="__blank"  href={link}>demo</a>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
};

export default CardProject;
