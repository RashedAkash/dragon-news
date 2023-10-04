import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const SocialLogin = () => {
  return (
    <div >
      <h2 className=' mb-5 font-bold text-xl text-left'>Login With</h2>
      <NavLink>
         <button className="btn w-full btn-outline ">
  <FaGoogle></FaGoogle>
  Login With Google
</button>
     </NavLink>
      <NavLink>
         <button className="btn w-full btn-outline mt-3 ">
  <FaGithub></FaGithub>
  Login With Github
</button>
     </NavLink>
    </div>
  );
};

export default SocialLogin;