import React from 'react'

export const filterSection = ({filterType}) => {
  return (

      <div className='  text-[#494c6b] flex justify-center gap-5 text-sm mx-5 lg:gap-10 h-16 border-[#494C6B] border-b-[0.5px] '> 
          <button type='button' onClick={()=>filterType('all')} className='focus:font-bold'>All</button>
          <button type='button' onClick={()=>filterType('active')} className='focus:font-bold'>Active</button>
          <button type='button' onClick={()=>filterType('complete')} className='focus:font-bold'>Completed</button>
      </div>
  )    
}


export default filterSection