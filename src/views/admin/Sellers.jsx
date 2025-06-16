import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaEye } from 'react-icons/fa'
import Pagination from '../Pagination'
import image1 from '../../assets/images/category/1.jpg'
import image2 from '../../assets/images/category/2.jpg'
import image3 from '../../assets/images/category/3.jpg'
import image4 from '../../assets/images/category/4.jpg'
import image5 from '../../assets/images/category/5.jpg'


const Sellers = () => {

    const [currentPage, setCurrentPage] = useState(1)
    const [searchValue, setSearchValue] = useState("")
    const [parPage, setParPage] = useState(5)
    const [show, setShow] = useState(false)

    const sellerimage = [
      {
         id: 0,
         image: image1,
      },
      {
         id: 1,
         image: image2,
      },
      {
         id: 2,
         image: image3,
      },
      {
         id: 3,
         image: image4,
      },
      {
         id: 4,
         image: image5,
      },
     ]


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
                        sellerimage.map((item, index)=>(
                            <tr key={index}>
                            <td scope='row' className='py-1 px-4 font-medium whitespace-nowrap'>{item.id + 1}</td>
                            <td scope='row' className='py-1 px-4 font-medium whitespace-nowrap'>
                              <img className='w-[45px] h-[45px]' src={item.image} alt="image" />
                            </td>
                            <td scope='row' className='py-1 px-4 font-medium whitespace-nowrap'><span>Jahidul Islam</span></td>
                            <td scope='row' className='py-1 px-4 font-medium whitespace-nowrap'><span>Fation House</span></td>
                            <td scope='row' className='py-1 px-4 font-medium whitespace-nowrap'><span>jahidul1215@gmail.com</span></td>
                            <td scope='row' className='py-1 px-4 font-medium whitespace-nowrap'><span>Pending</span></td>
                            <td scope='row' className='py-1 px-4 font-medium whitespace-nowrap'><span>Mymensing</span></td>
                            <td scope='row' className='py-1 px-4 font-medium whitespace-nowrap'><span>Sherpur</span></td>
                            <td scope='row' className='py-1 px-4 font-medium whitespace-nowrap'>
                               <div className='flex justify-start items-center gap-4'>
                                 <Link to="/admin/dashboard/seller/details/1" className='p-[6px] bg-green-500 rounded-sm hover:shadow-lg hover:shadow-green-500/50'><FaEye/></Link>
                               </div>
                            </td>                            

                          </tr>
                        ))
                     }
                  </tbody>
               </table>
            </div>
            <div className='w-full flex justify-end mt-4 bottom-4 right-4'>
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