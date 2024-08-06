import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaEdit, FaEye, FaTrash } from 'react-icons/fa'
import Pagination from '../Pagination'
// import { BsImage } from 'react-icons/bs'
// import { GrClose } from 'react-icons/gr'

const Sellers = () => {

    const [currentPage, setCurrentPage] = useState(1)
    const [searchValue, setSearchValue] = useState("")
    const [parPage, setParPage] = useState(5)
    const [show, setShow] = useState(false)

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
          <div className='relative overflow-x-auto'>
               <table className='w-full text-sm text-left text-[#d2d0d6]'>
                  <thead className='text-sm text-[#d2d0d6] uppercase border-b border-slate-700'>
                     <tr>
                        <th scope='col' className='py-3 px-4'>No</th>
                        <th scope='col' className='py-3 px-4'>Image</th>
                        <th scope='col' className='py-3 px-4'>Name</th>
                        <th scope='col' className='py-3 px-4'>Shop Name</th>
                        <th scope='col' className='py-3 px-4'>Email</th>
                        <th scope='col' className='py-3 px-4'>Payment Status</th>
                        <th scope='col' className='py-3 px-4'>Divition</th>
                        <th scope='col' className='py-3 px-4'>District</th>
                        <th scope='col' className='py-3 px-4'>Action</th>
                     </tr>
                  </thead>
                  <tbody>
                     {
                        [1,2,3,4,5].map((item, index)=>(
                            <tr key={index}>
                            <td scope='row' className='py-1 px-4 font-medium whitespace-nowrap'>{item}</td>
                            <td scope='row' className='py-1 px-4 font-medium whitespace-nowrap'>
                              <img className='w-[45px] h-[45px]' src={`http://localhost:3000/images/category/${item}.jpg`}alt="image" />
                            </td>
                            <td scope='row' className='py-1 px-4 font-medium whitespace-nowrap'><span>Jahidul Islam</span></td>
                            <td scope='row' className='py-1 px-4 font-medium whitespace-nowrap'><span>Fation House</span></td>
                            <td scope='row' className='py-1 px-4 font-medium whitespace-nowrap'><span>jahidul1215@gmail.com</span></td>
                            <td scope='row' className='py-1 px-4 font-medium whitespace-nowrap'><span>Pending</span></td>
                            <td scope='row' className='py-1 px-4 font-medium whitespace-nowrap'><span>Mymensing</span></td>
                            <td scope='row' className='py-1 px-4 font-medium whitespace-nowrap'><span>Sherpur</span></td>
                            <td scope='row' className='py-1 px-4 font-medium whitespace-nowrap'>
                               <div className='flex justify-start items-center gap-4'>
                                 <Link className='p-[6px] bg-green-500 rounded-sm hover:shadow-lg hover:shadow-green-500/50'><FaEye/></Link>
                               </div>
                            </td>                            

                          </tr>
                        ))
                     }
                  </tbody>
               </table>
            </div>
            <div className='w-full flex justify-end mt-3 bottom-3 right-4'>
               <Pagination
                  pageNumber={currentPage} 
                  setPageNumber={setCurrentPage} 
                  totalItem={50}
                  parPage={parPage}
                  showItem= {3}
               />
            </div>
     </div>
    </div>
  )
}

export default Sellers