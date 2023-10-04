import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const FindUs = () => {
  return (
    <div>
      <h2 className=' text-left font-semibold text-xl mb-3 mt-7'>Find Us On</h2>
      <div className='   '>
        <div className='flex items-center gap-3 border p-4 '>
          <div className=' flex items-center justify-center bg-[#F3F3F3] w-7 h-7 rounded-full relative '>
            <FaFacebook></FaFacebook>
          </div>
          Facebook
        </div>
        <div className='flex items-center border p-4 border-t-0  gap-3'>
          <div className=' flex items-center justify-center bg-[#F3F3F3] w-7 h-7 rounded-full relative '>
            <FaInstagram></FaInstagram>
          </div>
          Facebook
        </div>
        <div className='flex items-center border p-4 border-t-0  gap-3'>
          <div className=' flex items-center justify-center bg-[#F3F3F3] w-7 h-7 rounded-full relative '>
            <FaTwitter></FaTwitter>
          </div>
          Facebook
        </div>

      </div>
    </div>
  );
};

export default FindUs;