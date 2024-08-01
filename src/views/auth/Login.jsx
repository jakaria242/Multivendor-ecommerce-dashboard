import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineGooglePlus, AiOutlineGithub } from 'react-icons/ai'
import { FiFacebook } from 'react-icons/fi'
import { CiTwitter } from 'react-icons/ci'

const Login = () => {

    const [login, setLogin] = useState({
        email: "",
        password: ""
      });
    
      const inputHandle = (e) => {
        const { name, value } = e.target;
        setLogin({
          ...login,
          [name]: value,
        });
      };
    
      const handleSubmit = (e)=> {
        e.preventDefault()
        console.log(login);
      }

  return (
    <div className='min-w-screen min-h-screen bg-[#161d31] flex justify-center items-center'>
       <div className='w-[350px] text-[#d0d2d6] p-4 bg-[#283046] rounded-md'>
          <h2 className='text-xl mb-3 text-center'>Welcome to my e-commerce</h2>
          <p className='text-sm mb-3 text-center'>Please signin your account & start your bussness</p>
          <form onSubmit={handleSubmit}>
            <div className='flex flex-col w-full gap-1 mb-3'>
                <label htmlFor="email">Email</label>
                <input onChange={inputHandle} value={login.email} className='px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md text-[#d0d2d6] focus:border-indigo-500 overflow-hidden' type="email" name='email' placeholder='email' id='email' required/>
            </div>
            <div className='flex flex-col w-full gap-1 mb-5'>
                <label htmlFor="password">Password</label>
                <input onChange={inputHandle} value={login.password}  className='px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md text-[#d0d2d6] focus:border-indigo-500 overflow-hidden' type="password" name='password' placeholder='password' id='password' required/>
            </div>
            <button className='w-full capitalize bg-blue-500 hover:shadow-blue-500/50 hover:shadow-lg text-white rounded-md px-7 py-2 mb-3'>Sign In</button>
            <div className='text-center mb-3'>
                <p>Don't have an account ? <Link className='text-orange-500' to='/register'>Signup Here</Link></p>
            </div>
            <div className='w-full flex justify-center items-center mb-3'>
                <div className='w-[45%] h-[1px] bg-slate-700'></div>
                   <div className='w-[10%] flex justify-center items-center'>
                      <span className='pb-1'>Or</span>
                   </div>
               <div className='w-[45%] h-[1px] bg-slate-700'></div>
            </div>
            <div className='flex justify-center items-center gap-3'>
                 <div className='w-[35px] h-[35px] flex rounded-md bg-orange-700 shadow-lg hover:shadow-orange-700/50 justify-center items-center cursor-pointer overflow-hidden'>
                    <span className='text-xl'><AiOutlineGooglePlus/></span>
                 </div>
                 <div className='w-[35px] h-[35px] flex rounded-md bg-blue-800 shadow-lg hover:shadow-blue-700/50 justify-center items-center cursor-pointer overflow-hidden'>
                    <span className='text-xl'><FiFacebook/></span>
                 </div>
                 <div className='w-[35px] h-[35px] flex rounded-md bg-teal-700 shadow-lg hover:shadow-teal-700/50 justify-center items-center cursor-pointer overflow-hidden'>
                    <span className='text-xl'><CiTwitter/></span>
                 </div>
                 <div className='w-[35px] h-[35px] flex rounded-md bg-purple-700 shadow-lg hover:shadow-purple-700/50 justify-center items-center cursor-pointer overflow-hidden'>
                    <span className='text-xl'><AiOutlineGithub/></span>
                 </div>
            </div>
          </form>
       </div>
    </div>
  )
}

export default Login