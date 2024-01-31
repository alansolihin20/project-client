import React from 'react';
import { BsTelephone, BsTwitterX } from 'react-icons/bs';
import { MdOutlineEmail, MdFacebook } from 'react-icons/md';
import { SiTorbrowser } from 'react-icons/si';
import { FaInstagram } from 'react-icons/fa6';
import { FaLinkedin } from 'react-icons/fa';

const SupportPage = () => {
  return (
    <div>
      <div className="flex flex-row justify-evenly items-center w-full p-20 gap-20 max-sm:flex-col  max-sm:p-5 ">
        <div className="flex flex-col gap-5 ">
          <h3 className="font-bold text-3xl mb-5">Get in touch</h3>
          <div className="flex flex-row gap-2 justify-start items-center">
            <SiTorbrowser size={20} />
            <p>dons.com</p>
          </div>
          <div className="flex flex-row gap-2 justify-start items-center">
            <BsTelephone size={20} />
            <p>+62-81219923870</p>
          </div>
          <div className="flex flex-row gap-2 justify-start items-center">
            <MdOutlineEmail size={20} />
            <p>dons@gmail.com</p>
          </div>

          <p className="font-bold mt-5">Follow Us</p>

          <div className="flex flex-row gap-5 ">
            <div className="w-10 h-10 bg-gray-200 flex justify-center items-center rounded-2xl">
              <FaInstagram size={20} />
            </div>
            <div className="w-10 h-10 bg-gray-200 flex justify-center items-center rounded-2xl">
              <BsTwitterX size={15} />
            </div>
            <div className="w-10 h-10 bg-gray-200 flex justify-center items-center rounded-2xl">
              <FaLinkedin size={20} />
            </div>
            <div className="w-10 h-10 bg-gray-200 flex justify-center items-center rounded-2xl">
              <MdFacebook size={20} />
            </div>
          </div>
        </div>

        <div className="p-10 bg-white rounded-xl ">
          <form>
            <div className="form-control w-96 max-sm:w-72">
              <label className="label font-bold"> Full Name</label>
              <input type="text" className="w-full text input input-bordered " placeholder="Full Name" />
            </div>
            <div className="form-control">
              <label className="label font-bold">Email</label>
              <input type="text" className="w-full text input input-bordered" placeholder="Email" />
            </div>
            <div className="form-control">
              <label className="label font-bold">Message</label>
              <textarea className="textarea input-bordered" placeholder="Message"></textarea>
            </div>
            <div className="modal-action">
              <button className="btn btn-neutral" type="button">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SupportPage;
