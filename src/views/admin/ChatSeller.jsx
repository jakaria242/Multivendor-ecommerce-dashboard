import React, { useState } from 'react'
import { IoMdClose } from 'react-icons/io'
import { FaList } from 'react-icons/fa'

const ChatSeller = () => {
    const [show, setShow] = useState(false)
    const sellerId = 32
  return (
    <div className='px-2 lg:px-7 pt-5'>
       <div className='w-full p-4 bg-[#283046] rounded-md h-[calc(100vh-140px)]'>
        <div className='w-full h-full flex relative'>
            <div className={`w-[280px] h-full absolute z-10 ${ show ? '-left-[16px]': '-left-[336px]' } md:left-0 md:relative transition-all`}>
                <div className='w-full h-[calc(100vh-177px)] bg-[#252b3b] md:bg-transparent overflow-auto'>
                  <div className='flex text-xl justify-between items-center p-4 md:p-0 md:px-3 md:pb-3 text-white'>
                      <h2>Sellers</h2>
                      <span onClick={()=>setShow(false)} className='cursor-pointer block md:hidden'><IoMdClose/></span>
                  </div>
                  <div className={`h-[60px] flex justify-start items-center gap-2 text-white px-2 py-2 rounded-sm cursor-pointer bg-slate-700`}>
                     <div className='relative'>
                        <img className='w-[38px] h-[38px] border-2 border-white max-w-[38px] p-[2px] rounded-full' src="http://localhost:3000/images/admin.jpg" alt="image" />
                        <div className='w-[10px] h-[10px] bg-green-500 rounded-full absolute right-0 bottom-0'></div>
                     </div>
                      <div className='flex justify-center items-start flex-col w-full'>
                         <div className='flex justify-between items-center w-full'>
                          <h2 className='text-base font-semibold'>Jakaria Islam</h2>
                         </div>
                      </div>
                  </div>
                  <div className={`h-[60px] flex justify-start items-center gap-2 text-white px-2 py-2 rounded-sm cursor-pointer`}>
                     <div className='relative'>
                        <img className='w-[38px] h-[38px] border-2 border-white max-w-[38px] p-[2px] rounded-full' src="http://localhost:3000/images/admin.jpg" alt="image" />
                        <div className='w-[10px] h-[10px] bg-green-500 rounded-full absolute right-0 bottom-0'></div>
                     </div>
                      <div className='flex justify-center items-start flex-col w-full'>
                         <div className='flex justify-between items-center w-full'>
                          <h2 className='text-base font-semibold'>Jakaria Islam</h2>
                         </div>
                      </div>
                  </div>
                  <div className={`h-[60px] flex justify-start items-center gap-2 text-white px-2 py-2 rounded-sm cursor-pointer`}>
                     <div className='relative'>
                        <img className='w-[38px] h-[38px] border-2 border-white max-w-[38px] p-[2px] rounded-full' src="http://localhost:3000/images/admin.jpg" alt="image" />
                        <div className='w-[10px] h-[10px] bg-green-500 rounded-full absolute right-0 bottom-0'></div>
                     </div>
                      <div className='flex justify-center items-start flex-col w-full'>
                         <div className='flex justify-between items-center w-full'>
                          <h2 className='text-base font-semibold'>Jakaria Islam</h2>
                         </div>
                      </div>
                  </div>
                </div>
            </div>
            <div className='w-full md:w-[calc(100%-200px)] md:pl-4'>
              <div className='flex justify-between items-center'>
                {
                  sellerId &&  
                  <div className='flex justify-start items-center gap-3'>
                     <div className='relative'>
                        <img className='w-[42px] h-[42px] border-2 border-green-500 max-w-[42px] p-[2px] rounded-full' src="http://localhost:3000/images/admin.jpg" alt="image" />
                        <div className='w-[10px] h-[10px] bg-green-500 rounded-full absolute right-0 bottom-0'></div>
                     </div>
                  </div>
                }
                  <div onClick={()=>setShow(!show)} className='w-[35px] flex md:hidden h-[35px] rounded-sm bg-blue-500 shadow-lg hover:shadow-blue-500/50 justify-center cursor-pointer items-center text-white'>
                  <span><FaList/></span></div>
              </div>
              <div className='py-4'>
                <div className='bg-slate-800 h-[calc(100vh-290px)] rounded-md p-3 overflow-y-auto'>

                  <div className='w-full flex justify-start items-center'>
                     <div className='flex justify-start items-start gap-2 md:px-3 py-2 max-full lg:max-[85%]'>
                        <div>
                          <img className='w-[38px] h-[38px] border-2 border-white max-w-[38px] p-[3px] rounded-full' src="http://localhost:3000/images/admin.jpg" alt="image" />
                        </div>
                        <div className='flex justify-center items-start flex-col w-full bg-orange-500 shadow-lg shadow-orange-500/50 text-white px-2 py-1 rounded-md'>
                          <span>How are you ?</span>
                        </div>
                     </div>
                  </div>

                  <div className='w-full flex justify-end items-center'>
                     <div className='flex justify-start items-start gap-2 md:px-3 py-2 max-full lg:max-[85%]'>
                        <div className='flex justify-center items-start flex-col w-full bg-blue-500 shadow-lg shadow-blue-500/50 text-white px-2 py-1 rounded-md'>
                          <span>i am fine and you</span>
                        </div>
                        <div>
                          <img className='w-[38px] h-[38px] border-2 border-white max-w-[38px] p-[3px] rounded-full' src="http://localhost:3000/images/admin.jpg" alt="image" />
                        </div>
                     </div>
                  </div>

                  <div className='w-full flex justify-start items-center'>
                     <div className='flex justify-start items-start gap-2 md:px-3 py-2 max-full lg:max-[85%]'>
                        <div>
                          <img className='w-[38px] h-[38px] border-2 border-white max-w-[38px] p-[3px] rounded-full' src="http://localhost:3000/images/admin.jpg" alt="image" />
                        </div>
                        <div className='flex justify-center items-start flex-col w-full bg-orange-500 shadow-lg shadow-orange-500/50 text-white px-2 py-1 rounded-md'>
                          <span>I am also fine</span>
                        </div>
                     </div>
                  </div>

                  <div className='w-full flex justify-end items-center'>
                     <div className='flex justify-start items-start gap-2 md:px-3 py-2 max-full lg:max-[85%]'>
                        <div className='flex justify-center items-start flex-col w-full bg-blue-500 shadow-lg shadow-blue-500/50 text-white px-2 py-1 rounded-md'>
                          <span>what are you doing</span>
                        </div>
                        <div>
                          <img className='w-[38px] h-[38px] border-2 border-white max-w-[38px] p-[3px] rounded-full' src="http://localhost:3000/images/admin.jpg" alt="image" />
                        </div>
                     </div>
                  </div>

                </div>
              </div>
              <form className='flex gap-3'>
                <input className='w-full flex justify-between items-center px-2 py-[5px] border border-slate-700 focus:border-blue-500 rounded-md outline-none bg-transparent text-[#d0d2d6]' type="text" placeholder='input your message' />
                <button className='hover:shadow-lg text-[#d0d2d6] hover:text-white font-semibold w-[75px] h-[35px] bg-cyan-500 hover:shadow-cyan-500/50 rounded-md flex justify-center items-center'>Send</button>
              </form>
            </div>
        </div>
       </div>
    </div>
  )
}

export default ChatSeller