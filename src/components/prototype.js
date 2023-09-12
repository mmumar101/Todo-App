import React, { useEffect, useState} from 'react'
import './index.css';
import Form from './components/form';
import FilterSection from './components/filtersection';
import Item from './components/items';
import {BsMoonFill} from 'react-icons/bs';

function App() {
const [todos, setTodos] = useState([]);
const [filter, setFilter] = useState('all');
const [theme, setTheme] = useState ('light');


//FUNCTION TO TOGGLE DARK MODE
function toggleTheme (){
  if(theme === 'light'){
    return 'dark'
  } else {
    setTheme('light')
  }
};
useEffect(() => {
  document.body.className = theme;
}, [theme]);



//FUNCTION TO ADD ITEMS

function addTodo (text) {
    const newTodo = {
      id: Date.now(),
      text: text,
      status: false,
    }
    setTodos ([newTodo, ...todos])
}

//Function to delete items
  function removeTodoById (id) {
    const todoItems = todos.filter (todo => todo.id !== id);
    setTodos (todoItems)
  }
  //Function to set status
  function toggleTodoStatus (id) {
    setTodos(
      todos.map (todo => {
        if (todo.id === id) {
          return {...todo , status: !todo.status}
        }
        return todo;
      })
    )
  }
  //Function to update filter value
   function setFilterValue(value){
      setFilter(value)
   }

  //  Function to update number of todos
   function getTodoCount(){
    if(filter === "all") {
      return todos.length;
    } else if(filter === "active") {
      return todos.filter(todo => !todo.status).length
    }
    else if(filter === "complete") {
      return todos.filter(todo => todo.status).length
    }
   }


  //Function to render todo by filtering
   function renderTodos () {
      let filteredTodos = todos

      if(filter === 'active'){
       filteredTodos = todos.filter(todo => !todo.status)
   } else if( filter === 'complete'){
      filteredTodos = todos.filter (todo => todo.status)
   }
   return filteredTodos.map (todo =>  <Item key = {todo.id} statusUpdate ={toggleTodoStatus} deleteItem ={removeTodoById} itemData ={todo} />)
  }

  //Function to clear all completed todos
  function clearCompletedTodos(){
    const todoItems = todos.filter (todo => !todo.status)
    setTodos(todoItems)
  }

//######################################################################################################

  return (
      <div className='min-h-screen pb-20 bg-[#F2F2F2] text-white '>
      <div className=' bg-[#4d53c5] bg-no-repeat bg-cover h-52 px-5 py-2 '>
        <div className='flex justify-between items-center lg:w-[50%] lg:mx-auto mt-5'>
            <p className='text-3xl font-semibold tracking-[6px]'>TODO</p>
            <button onClick={toggleTheme}>
            <BsMoonFill />
            </button>

        </div>
        <div className='mt-10 lg:w-{50%] lg:mx-auto'>
          <Form addHandler = {addTodo}/> 
        
        </div>
      </div>
      
      {/* Display items section */}
      <div className='bg-white h-60 mx-5 rounded-md w-[5/6] relative -top-8 md:w-[48.5%] md:mx-auto lg:w-[48.5%] lg:mx-auto'>
      <FilterSection filterType = {setFilterValue} />
       {renderTodos() }
    
      
      <div className='flex justify-between items-center mx-5 h-16 text-[#494c6b]'>
       <p className='text-[#494c6b]'>{getTodoCount()} items</p> 
        <button type='button' onClick={clearCompletedTodos} className='focus:font-bold text-sm'>Clear Completed</button>
      </div>
      
      </div>
    </div>
  )
}

export default App
