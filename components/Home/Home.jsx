import { Group, Work } from '@/public/img/imgConf';
import React from 'react';
import Image from 'next/image';
import { LiaSpotify } from 'react-icons/lia';
import { FaGooglePay } from 'react-icons/fa';
import { BsMicrosoft } from 'react-icons/bs';
import { SiNetflix } from 'react-icons/si';

const HomePage = () => {
  return (
    <div className="">
      <div className="flex flex-row  items-center p-20 max-lg:flex-col ">
        <div className="flex flex-col gap-5 items-start justify-center max-lg w-1/2 pl-40 max-lg:p-10 max-lg:w-full max-sm:items-center ">
          <div className="border border-black p-2 rounded-2xl">
            <p className="text-xs">Lorem ipsum dolor sit amet.</p>
          </div>
          <h1 className="text-5xl font-bold w-2/3 leading-tight max-lg:w-full max-lg:text-center">
            DIGITAL MARKETING SOLUTIONS <span className="text-gray-300">FOR AMBITIUS BRANDS</span>
          </h1>
          <p className="text-xs w-2/3 font-bold max-lg:w-full max-lg:text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis totam, itaque corrupti rem molestias maxime.</p>
          <div className="rounded-2xl flex flex-row gap-5 ">
            <button className="btn btn-neutral max-lg:btn-sm">Get Started</button>
            <button className="max-lg:text-xs">Read Succes Stories</button>
          </div>
        </div>
        <div className=" w-1/2 flex items-center justify-center">
          <Image src={Work} alt="group" className="w-3/5  max-lg:hidden "></Image>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-10 ">
        <p className="font-bold text-lg">Support</p>
        <div className="flex flex-row justify-center items-center gap-20 text-gray-400 max-sm:w-4/5 ">
          <LiaSpotify size={60} />
          <FaGooglePay size={60} />
          <BsMicrosoft size={40} />
          <SiNetflix size={40} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
