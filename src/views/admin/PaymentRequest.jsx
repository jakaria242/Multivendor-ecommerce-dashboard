import React, { forwardRef } from 'react'
import { FixedSizeList as List } from 'react-window'
function handleOnWheel({deltaY}) {
    console.log('handleOnWheel', deltaY);
    
}

const outerElementType = forwardRef((props,ref)=>(
    <div ref={ref} onWheel={handleOnWheel} {...props}/>
))

const PaymentRequest = () => {
   const Row = ({index,style})=>{
     return(
        <div style={style} className='flex text-sm text-[#d2d0d6]'>
           <div className='w-[25%] p-2 whitespace-nowrap'>{ index + 1 }</div>
           <div className='w-[25%] p-2 whitespace-nowrap'>$510</div>
           <div className='w-[25%] p-2 whitespace-nowrap'>
              <span className='py-[3px] px-[5px] bg-slate-700 text-blue-500 rounded-md text-xs'>pending</span>
           </div>
           <div className='w-[25%] p-2 whitespace-nowrap'>12 jun 2024</div>
           <div className='w-[25%] p-2 whitespace-nowrap'>
              <button className='bg-indigo-500 shadow-lg hover:shadow-indigo-500/50 px-[3px] py-[2px] cursor-pointer text-white text-sm rounded-sm'>Confirm</button>
           </div>
        </div>
     )
   }

  return (
    <div className='px-2 lg:px-7 pt-5'>
       <div className='w-full p-4 bg-[#283046] rounded-md'>
        <h2 className='text-xl font-medium pb-5 text-[#d0d2d6]'>Withdrawal request</h2>
          <div className='w-full'>
            <div className='w-full overflow-x-auto'>
               <div className='flex bg-[#161d31] uppercase text-xs min-w-[340px] text-[#d0d2d6]'>
                  <div className='w-[25%] p-2'>NO</div>
                  <div className='w-[25%] p-2'>Amount</div>
                  <div className='w-[25%] p-2'>Status</div>
                  <div className='w-[25%] p-2'>Date</div>
                  <div className='w-[25%] p-2'>Action</div>
               </div>
               <div>
                  {
                     <List 
                     style={{minWidth: '340px', overflowX: 'hidden'}} 
                     className='List' 
                     height={350}
                     itemCount={50}
                     itemSize={35}
                     outerElementType={outerElementType}
                     >
                        {Row}
                     </List>
                  }
               </div>
            </div>
          </div>
       </div>
    </div>
  )
}

export default PaymentRequest