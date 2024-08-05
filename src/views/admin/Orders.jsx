import React, { useState } from 'react'

const Orders = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [searchValue, setSearchValue] = useState("")
  const [parPage, setParPage] = useState(5)
  return (
    <div className='px-2 lg:px-7 pt-5'>
       <div className='w-full p-4 bg-[#283046] rounded-md'>
          <div className='flex justify-between items-center'>
             <select onChange={(e)=>setParPage(parseInt(e.target.value))} className='px-4 py-2 focus:border-indigo-500 outline-none bg-[#283046] border border-slate-700 rounded-md text-[#d0d2d6]'>
                <option value="5">5</option>
                <option value="5">15</option>
                <option value="5">25</option>
             </select>
             <input className='px-4 py-2 focus:border-indigo-500 outline-none bg-[#283046] border border-slate-700 rounded-md text-[#d0d2d6]' type="text" placeholder='search '/>
          </div>
          <div className='relative mt-5 overflow-y-auto'>
             <div className='w-full text-sm text-left text-[#d2d0d6]'>
               <div className='text-sm text-[#d2d0d6] uppercase border border-b border-slate-700'> 
                  <div className='flex justify-between items-start'>

                  </div>
               </div>
             </div>
          </div>
       </div>
    </div>
  )
}

export default Orders