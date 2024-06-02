import React from 'react';
import './LoginForm.css';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa6";



const LoginForm = () => {
  return(
    <div className='container w-1/3 mt-48 h-96  bg-slate-300 rounded-3xl p-5 flex justify-center items-center flex-col m-auto'>
        <h1 className='text-3xl text-white font-semibold'>Login</h1>
        <div className='input-box w-1/2 my-5 '>
          <div className='relative flex items-center'>

            <input type='text' placeholder='Username' required className=' rounded-full bg-transparent border-slate-500 appearance-none border rounded w-full py-2 px-3 text-white leading-tight '/>
            <FaUser className='absolute  right-3 text-white'/>
          </div>
        </div>
        <div className='input-box w-1/2 my-5 '>
          <div className='relative flex items-center'>

            <input type='password' placeholder='Password' required className=' rounded-full bg-transparent border-slate-500 appearance-none border rounded w-full py-2 px-3 text-white leading-tight '/>
            <FaLock className='absolute right-3 text-white'/>
          </div>
        </div>
        <div className="remember-forgot w-3/4 flex justify-between mt-5">
          <label className='text-white'><input type='checkbox' />Remember me</label>
          {/*eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
          <a href="#" >Forgot password?</a>
        </div>
        <button type='submit' className='w-3/4 bg-purple-500 hover:bg-purple-700 text-black font-bold py-2 px-4 rounded-full mt-5'>Login</button>

    </div>
  );
};

export default LoginForm;