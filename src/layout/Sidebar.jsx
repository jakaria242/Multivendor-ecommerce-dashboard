import React, { useEffect, useState } from 'react'
import {Link, useLocation} from 'react-router-dom'
import { getNavs } from '../navigation/index'
import { BiLogInCircle } from 'react-icons/bi'


const Sidebar = ({showSidebar, setShowSidebar}) => {
   const {pathname} = useLocation()
  const [allNav, setAllNav] = useState([])
    
  useEffect(()=>{
     const navs = getNavs("admin")
     setAllNav(navs)
    }, [])
    // console.log(pathname);
    
   

  return (
    <div>
       <div onClick={()=>setShowSidebar(false)} className={`fixed duration-200 ${!showSidebar ? 'invisible' : 'visible'} w-screen h-screen bg-[#22292f80] top-0 left-10 z-10`}></div>
       <div className={`w-[260px] fixed bg-[#283046] z-50 top-0 h-screen shadow-[0_0_15px_0_rgb(34_41_47_/_5%)] transition-all ${showSidebar ? 'left-0': '-left-[260px] lg:left-0'}`}>
           {/*
          
              // you can use image or logo here

            <div className='h-[70px] flex justify-center items-center'>
            <Link to='/' className='w-[180px] h-[180px]'>
            <img className='w-full h-full' src="http://localhost:3000/public/images/logo.png" alt="logo" />
            </Link>
           </div> 

           // you can use image or logo here
           
           */}
           <div className='h-[70px] flex justify-center items-center'>
           <Link to='/'><h2 className='text-[28px] text-white text-center font-bold'>Jakaria <span className='text-[orange]'>Shops</span></h2></Link>
           </div>
           <div className='px-[16px]'>
              <ul>
                {
                  allNav.map((nav,index)=>( 
                    <li key={index}> 
                       <Link to={nav.path} className={`${pathname === nav.path ? 'bg-slate-600 shadow-indigo-500/30 text-white duration-300' : 'text-[#d0d2d6] font-normal duration-300'} px-[12px] py-[9px] rounded-sm flex justify-start items-center gap-[12px] hover:pl-4 transition-all w-full mb-1`}>
                       <span>{nav.icon}</span>
                       <span>{nav.title}</span>
                       </Link>
                    </li>
                  ))
                }
                <li>
                  <button className='duration-300 text-[#d0d2d6] font-normal px-[12px] py-[9px] rounded-sm flex justify-start items-center gap-[12px] hover:pl-4 transition-all w-full mb-1'>
                    <span><BiLogInCircle/></span>
                    <span>Logout</span>
                  </button>
                </li>
              </ul>
           </div>
       </div>
    </div>
  )
}

export default Sidebar