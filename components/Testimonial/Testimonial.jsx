import React from 'react';
import Image from 'next/image';
import { Profile1 } from '@/public/img/imgConf';

const TestimonialPage = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-10 max-sm:p-5 ">
      <div className="flex flex-col justify-center items-center gap-0">
        <h1 className="font-bold text-3xl">Testimonial</h1>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>

      <div className="flex flex-col justify-center items-center p-28 rounded-full bg-gray-300/10 gap-5 mb-5 bg-white shadow-sm">
        <p className="font-bold max-sm:text-center ">I really like this marketing agency, They are very profesional and know how to get job</p>
        <div className="avatar">
          <div className="w-10 rounded-full max-sm:w-8">
            <Image src={Profile1} alt="image"></Image>
          </div>
        </div>
        <p className="text-xs">
          Jesiie , <span className="text-gray-400 ">10 Januari 2024</span>
        </p>
      </div>
    </div>
  );
};

export default TestimonialPage;
