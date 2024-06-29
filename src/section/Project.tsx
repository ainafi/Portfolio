import React from 'react';
import { ProjectData } from '../utils/Data';
import CardProject from '../components/Card';

const Project: React.FC = () => {
  return (
    <div className=" items-center mt-10 flex-wrap">
      <h2 className="text-white text-center mr-5 uppercase text-3xl md:text-3xl lg:text-4xl font-monumented ">
        my realisation
      </h2>
      <div className='flex flex-wrap justify-center'>
        {ProjectData.map((item) => (
          <CardProject key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Project;
