import { Profile1 } from '@/public/img/imgConf';
import React from 'react';
import Image from 'next/image';
import dataTeam from './dataTeam';

const TeamPage = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-20 p-20 max-sm:p-0 ">
      <div className="hero bg-base-100">
        <div className="hero-content flex flex-col  ">
          <h1 className="text-3xl font-bold">Our Team</h1>
          <p>Dons team</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-5 justify-center items-center p-20  max-sm:p-10">
        {dataTeam.map((team) => (
          <div className="card w-96 shadow-xl center bg-white" key={team.id}>
            <div className="card-body pt-10 pb-10 flex flex-col items-center justify-center gap-3">
              <div className="avatar">
                <div className="w-24 rounded-full">
                  <Image src={team.image} alt="image"></Image>
                </div>
              </div>
              <h3 className="card-title">{team.nameTeam}</h3>
              <p>{team.job}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamPage;
