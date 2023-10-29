import React from 'react';
import {MdDeleteForever, MdCheck, MdCancel} from 'react-icons/md'
import { GetThemeValue } from './contextTheme';

export const Item = ({itemData, deleteItem, statusUpdate}) => {
  const {darkTheme} = GetThemeValue();
  return (
    <div className={`${darkTheme ? 'text-[#f2f2f2]' : ' text-gray-900'} px-5 h-14 flex mx-5 justify-between border-b-[1px] border-[#d2d3de] items-center`}> 
        <div className='flex items-center'>
          {
          itemData.status ? (
            <MdCheck onClick = {() => statusUpdate(itemData.id)} className='h-4 w-4 mr-3 text-[#3A7CFD]'/>
           ) : ( 
            <MdCancel onClick = {() => statusUpdate(itemData.id)} className='h-4 w-4 mr-3 text-[#3A7CFD]'/>
           )
  }
        <p className={`${itemData.status ? "line-through" : "" } text-sm lg:text-lg`}>{itemData.text}</p>         
      </div>
       <MdDeleteForever onClick={() => deleteItem(itemData.id)} className='text-red-500 h-5 w-5'/> 
    </div>
  )
}


export default Item


