import React, { useState } from 'react'


export const Form = ({addHandler}) => {
  const [userInput, setUserInput] = useState ('')

  const handleSubmit = (e) => {
    e.preventDefault()
    addHandler(userInput)
    setUserInput('')

  }

  return (
    <div className='bg-white py-2 px-3 rounded-md md:w-[50%] md:mx-auto lg:w-[50%] lg:mx-auto'>
        <form onSubmit={handleSubmit} className= 'flex items-center'>
            <div className='w-full lg:mx-auto border-none'>
                <input type='text' onChange={(e) => setUserInput (e.target.value)} value={userInput} placeholder='Create new ToDo item' className='border-0 focus:outline-none text-gray-900 text-sm px-3 py-1 w-full'/>
            </div>
            <button type='submit' class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ">Add</button>

        </form>
    </div>
  )
} 

export default Form 