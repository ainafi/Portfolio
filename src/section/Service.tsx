import React from 'react';
import { BentoGrid, BentoGridItem } from '../components/ui/bento-grid';

const Service: React.FC = () => {
  const items = [
    {
      title: "UI UX designer",
      description: "Offer UI/UX design services for websites and mobile apps. You can create wireframes, prototypes, and high-fidelity mockups for clients.",
      className: "md:col-span-2",
    },
    {
      title: "front-end",
      description: "Develop the front-end of websites and applications based on designs provided by clients or created by you",
      className: "md:col-span-1",
    },
    {
      title: "web site  revamp service",
      description: "develop the front end of websites and applications based on design provided by client or created by you.",
      className: "md:col-span-1",
    },
    {
      title: "landing page",
      description: "Specialize in creating high-converting landing pages for businesses.",
      className: "md:col-span-2",
    },
  ];

  return (
    <div className='pt-10 md:pt-16'>
      <h2 className='text-white text-center uppercase text-3xl md:text-5xl lg:text-6xl font-monumented mb-20'>what i do</h2>
      <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            className={item.className}
          />
        ))}
      </BentoGrid>
    </div>
  );
};

export default Service;
