import React from 'react'
import { GetThemeValue } from './contextTheme'

export const filterSection = ({filterType}) => {
  const {darkTheme}  = GetThemeValue()
  return (

      <div className={`${darkTheme ? 'bg-[#28273f]' : 'bg-white'} ${darkTheme ? 'text-[#f2f2f2]' : ' text-gray-900'} flex justify-center gap-5 text-sm mx-5 lg:gap-10 h-16 border-[#494C6B] border-b-[0.5px] `}> 
          <button type='button' onClick={()=>filterType('all')} className='focus:font-bold'>All</button>
          <button type='button' onClick={()=>filterType('active')} className='focus:font-bold'>Active</button>
          <button type='button' onClick={()=>filterType('complete')} className='focus:font-bold'>Completed</button>
      </div>
  )    
}


export default filterSection