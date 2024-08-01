import React, { useState } from 'react'
import { admin_login } from '../../store/Reducers/authReducerSlice'
import {  useDispatch } from 'react-redux'


const AdminLogin = () => {

  const dispatch = useDispatch()

    const [adminLogin, setAdminLogin] = useState({
        email: "",
        password: ""
      });
    
      const inputHandle = (e) => {
        const { name, value } = e.target;
        setAdminLogin({
          ...adminLogin,
          [name]: value,
        });
      };
    
      const handleSubmit = (e)=> {
        e.preventDefault()
        dispatch(admin_login(adminLogin));
      }

  return (
    <div className='min-w-screen min-h-screen bg-[#161d31] flex justify-center items-center'>
       <div className='w-[350px] text-[#d0d2d6] p-4 bg-[#283046] rounded-md'>
           {/*
           // you can use image or logo here

            <div className='h-[70px] flex justify-center items-center'>
             <div className='w-[180px] h-[50px]'>
                <img className='h-full w-full object-cover' src="http://localhost:3000/images/logo.png" alt="image" />
             </div>
           </div> 

           // you can use image or logo here
           */}
           <h2 className='text-[28px] text-white text-center font-bold'>Jakaria <span className='text-[orange]'>Shops</span></h2>
          <form onSubmit={handleSubmit}>
            <div className='flex flex-col w-full gap-1 mb-3'>
                <label htmlFor="email">Email</label>
                <input onChange={inputHandle} value={adminLogin.email} className='px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md text-[#d0d2d6] focus:border-indigo-500 overflow-hidden' type="email" name='email' placeholder='email' id='email' required/>
            </div>
            <div className='flex flex-col w-full gap-1 mb-5'>
                <label htmlFor="password">Password</label>
                <input onChange={inputHandle} value={adminLogin.password}  className='px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md text-[#d0d2d6] focus:border-indigo-500 overflow-hidden' type="password" name='password' placeholder='password' id='password' required/>
            </div>
            <button className='w-full capitalize bg-blue-500 hover:shadow-blue-500/50 hover:shadow-lg text-white rounded-md px-7 py-2 mb-3'>Login</button>
          </form>
       </div>
    </div>
  )
}

export default AdminLogin