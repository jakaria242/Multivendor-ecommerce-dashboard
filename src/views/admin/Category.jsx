import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaEdit, FaTrash } from 'react-icons/fa'
import Pagination from '../Pagination'
import { BsImage } from 'react-icons/bs'
import { GrClose } from 'react-icons/gr'
import image1 from '../../assets/images/category/1.jpg'
import image2 from '../../assets/images/category/2.jpg'
import image3 from '../../assets/images/category/3.jpg'
import image4 from '../../assets/images/category/4.jpg'
import image5 from '../../assets/images/category/5.jpg'

const Category = () => {

  const [currentPage, setCurrentPage] = useState(1)
  const [searchValue, setSearchValue] = useState("")
  const [parPage, setParPage] = useState(5)
  const [show, setShow] = useState(false)


  const categoryimage = [
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
      <div className='flex lg:hidden justify-between items-center mb-5 p-4 bg-[#283046] rounded-md'>
         <h1 className='text-[#d0d2d6] font-semibold text-lg'>Categorys</h1>
         <button onClick={()=>setShow(true)} className='bg-indigo-500 shadow-lg hover:shadow-indigo-500/50 px-4 py-2 cursor-pointer text-white rounded-sm text-sm'>Add</button>
      </div>
       <div className='flex flex-wrap w-full'>
         <div className='w-full lg:w-7/12'>
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
                        <th scope='col' className='py-3 px-4'>Action</th>
                     </tr>
                  </thead>
                  <tbody>
                     {
                       categoryimage.map((item, index)=>(
                            <tr key={index}>
                            <td scope='row' className='py-1 px-4 font-medium whitespace-nowrap'>{item.id + 1}</td>
                            <td scope='row' className='py-1 px-4 font-medium whitespace-nowrap'>
                              <img className='w-[45px] h-[45px]' src={item.image} alt="image" />
                            </td>
                            <td scope='row' className='py-1 px-4 font-medium whitespace-nowrap'><span>Cloth</span></td>
                            <td scope='row' className='py-1 px-4 font-medium whitespace-nowrap'>
                               <div className='flex justify-start items-center gap-4'>
                                 <Link className='p-[6px] bg-teal-500 rounded-sm hover:shadow-lg hover:shadow-teal-500/50'><FaEdit/></Link>
                                 <Link className='p-[6px] bg-red-500 rounded-sm hover:shadow-lg hover:shadow-red-500/50'><FaTrash/></Link>
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
         <div className={`w-[320px] lg:w-5/12 translate-x-100 lg:relative lg:right-0 fixed ${show ? 'right-0': '-right-[340px]'} z-[555] top-0 transition-all duration-500`}>
            <div className='w-full pl-5'>
               <div className=' bg-[#283046] h-screen lg:h-auto px-3 py-2 lg:rounded-md text-[#d2d0d6]'>
                    <div className='flex justify-between lg:justify-center items-center mb-4'>
                    <h1 className='text-[#d2d0d6] font-semibold text-xl  '>Add Category</h1>
                    <div onClick={()=>setShow(false)}className='block lg:hidden cursor-pointer'>
                       <GrClose/>
                    </div>
                    </div>
                   <form>
                     <div className='flex flex-col w-full gap-1 mb-3'>
                      <label htmlFor="name">Category name</label>
                      <input className='px-4 py-2 focus:border-indigo-500 outline-none bg-[#283046] border border-slate-700 rounded-md text-[#d0d2d6]' type="text" placeholder='category name' id='name' name='category_name'/>
                     </div>
                     <div>
                        <label className='flex justify-center items-center flex-col h-[238px] cursor-pointer border border-dashed hover:border-indigo-500 w-full border-[#d2d0d6]' htmlFor="image">
                           <span><BsImage/></span>
                           <span>select Image</span>
                        </label>
                     </div>
                     <input className='hidden' type="file" name='image' id='image'/>
                     <div>
                        <button className='bg-blue-500 w-full hover:shadow-blue-500/50 hover:shadow-lg hover:text-white rounded-md px-7 py-2 my-2'>Add Category</button>
                     </div>
                 </form>
               </div>
            </div>
         </div>
       </div>
    </div>
  )
}

export default Category