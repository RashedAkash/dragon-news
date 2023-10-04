import React, { useContext } from 'react';
import { NavLink, Navigate, useLocation, useNavigate, useNavigation } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import { FirebaseContext } from '../../Context/AuthContext';

const Login = () => {
    const location = useLocation();
    console.log(location);
    const { signIn } = useContext(FirebaseContext);
    const navigate = useNavigate();
    const handleLogIn = (e) => {
        e.preventDefault();

        //getValue
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);
        
        //login
        signIn(email, password)
            .then(res => {
                console.log(res.user);
                navigate(
                    location?.state ? location?.state : '/'
                )
                
            })
            .catch(error => {
            console.error(error);
        })


    }

    // forget password

    const handlePassword = () => {
        console.log('click');
    }


  return (
      <div>
          <Navbar></Navbar>
           <div className='flex justify-center'>
      <div className="grid max-w-md w-full gap-6 px-12 max-sm:px-6 py-8 rounded-lg dark:text-zinc-100 text-zinc-800 sm:ring-1 ring-zinc-300 dark:ring-zinc-800 m-4 bg-[#fafafa] dark:bg-[#111]">
    <h2 className="text-4xl font-bold my-4 mb-6">Sign in</h2>
                  <form onSubmit={handleLogIn} className=''>
                      <div className="grid gap-1 w-full dark:text-gray-200">
        <label  className="">Email</label>
        <input name='email' id="email" type="email" placeholder="Email" className="placeholder:text-gray-500 placeholder:font-normal border-zinc-300 dark:border-zinc-700 focus-visible:outline-zinc-500 border focus-visible:outline-2 focus-visible:outline dark:focus-visible:outline-zinc-500 focus-visible:border-transparent py-2 px-3 rounded bg-transparent" />
    </div>
    <div className="grid gap-1 w-full dark:text-gray-200">
        <label  className="">Password</label>
        <input name='password' id="password" type="password" placeholder="Password" className="placeholder:text-gray-500 placeholder:font-normal border-zinc-300 dark:border-zinc-700 focus-visible:outline-zinc-500 border focus-visible:outline-2 focus-visible:outline dark:focus-visible:outline-zinc-500 focus-visible:border-transparent py-2 px-3 rounded bg-transparent" />
    </div>
    <button className="bg-zinc-800 dark:bg-zinc-50 text-white w-full mx-auto font-semibold dark:text-black mt-2 hover:border-black focus-visible:outline-black/50 px-6 py-2 rounded-md border-[1.5px] border-transparent transition-colors duration-100 focus-visible:outline">
        Sign in
    </button>
    </form>
    <div className="flex items-baseline justify-between text-sm font-semibold">
        <a onClick={handlePassword} href="#" className="hover:underline">Forgot Password?</a>
          <NavLink to='/register'
             className="hover:underline">Create account</NavLink>
    </div>
    <div className="flex justify-between items-center">
        <span className="h-[1px] basis-full bg-zinc-300 dark:bg-zinc-600"></span>
        <span className="mx-2.5 dark:text-zinc-200 -translate-y-0.5">OR</span>
        <span className="h-[1px] basis-full bg-zinc-300 dark:bg-zinc-600"></span>
    </div>
    <div className="flex gap-4 text-center">
        <button className="bg-blue-500 dark:bg-blue-500 text-white w-full mx-auto font-semibold mt-2 px-6 py-2 rounded-md border-[1.5px] border-transparent transition-colors duration-100">
            Facebook
        </button>
        <button className="bg-red-500 text-white w-full mx-auto font-semibold mt-2 px-6 py-2 rounded-md border-[1.5px] border-transparent transition-colors duration-100">
            Google
        </button>
    </div>
</div>
    </div>
   </div>
  );
};

export default Login;