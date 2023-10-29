import React, { useState } from 'react'
import { GetThemeValue } from './contextTheme'


export const Form = ({addHandler}) => {
  const [userInput, setUserInput] = useState ('');
  const {darkTheme} = GetThemeValue();

  const handleSubmit = (e) => {
    e.preventDefault()
    addHandler(userInput)
    setUserInput('')

  }

  return (
    <div className={`${darkTheme ? 'bg-[#28273f]' : 'bg-white'} py-2 px-3 rounded-md sm:w-[64.7%] md:w-[50%] sm:mx-auto md:mx-auto lg:w-[50%] lg:mx-auto`}>
        <form onSubmit={handleSubmit} className= {`${darkTheme ? 'bg-[#28273f]' : 'bg-white'} flex items-center`}>
            <div className='w-full lg:mx-auto border-none '>
                <input type='text' onChange={(e) => setUserInput (e.target.value)} value={userInput} placeholder='Create new ToDo item' className={`${darkTheme ? 'bg-[#28273f]' : 'bg-white'} ${darkTheme ? 'text-[#f2f2f2]' : ' text-gray-900'} border-0 focus:outline-none text-sm px-3 py-1 w-full`}/>
            </div>
            <button type='submit' class={`${darkTheme? 'bg-[#4b496f]' : 'bg-blue-600'} text-white hover:bg-gradient-to-br focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 `}>Add</button>

        </form>
    </div>
  )
} 

export default Form 