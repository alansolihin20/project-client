import React from 'react';
import DataService from './data';
import Image from 'next/image';

const ServicePage = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-5 mt-10 p-20 max-sm:p-0 ">
      <h1 className="font-bold text-2xl">Our Service</h1>
      <p className="max-sm:p-5 max-sm:font-xs max-sm:text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. At, ex excepturi. In velit repudiandae sed.</p>
      <div className="flex flex-wrap items-center justify-center gap-5 p-20  max-sm:p-10">
        {DataService.map((item) => (
          <div className="card w-96 bg-base-100 shadow-xl image-full" key={item.id}>
            <figure>
              <Image src={item.image} alt="image" className="max-h-64"></Image>
            </figure>
            <div className="card-body">
              <h2 className="card-title justify-end">{item.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicePage;
