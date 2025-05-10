import React, { createContext, useContext, useEffect, useState } from 'react'
import Authprovider, { AuthContext } from '../../../Context/Authprovider'

const CreatTask = () => {

  const [taskTitle, settaskTitle] = useState('')
  const [taskDate, settaskDate] = useState('')
  const [taskDescription, settaskDescription] = useState('')
  const [category, setcategory] = useState('')
  const [name, setname] = useState('')
const [userData, setUserData] = useContext(AuthContext)



const submitHandler = (e) => {
    e.preventDefault();

    const newTask = {
      taskTitle,
      taskDescription,
      taskDate,
      category,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    };

    const data = userData;

    data.forEach(function (elem) {
      if (name.toLocaleLowerCase === elem.firstName.toLocaleLowerCase) {
        elem.tasks.push(newTask);
        elem.taskCounts.newTask = elem.taskCounts.newTask + 1;
      }
    });
    setUserData(data);
    console.log(data);

    settaskTitle("");
    setcategory("");
    setname("");
    settaskDate("");
    settaskDescription("");
  };


  return (
    <div className='px-5 '>
        <form onSubmit={(e)=> submitHandler(e)} className='flex justify-between py-10 px-10 mt-3 bg-gray-800' >
            <div className=''>
                 <h3 className='text-white'>Task Title</h3>                
                <input value={taskTitle} onChange={(e)=> {settaskTitle(e.target.value)}}
                className='bg-transparent text-white placeholder:text-blue-200 border-2 border-sky-400 mt-' type="text" placeholder='Ener Task Title'/>
                <h3 className='text-white'>Date</h3>
                <input value={taskDate} onChange={(e)=> {settaskDate(e.target.value)}}
                className='bg-transparent text-white placeholder:text-blue-200 border-2 border-sky-400 mt-' type="date" placeholder=''/>
                <h3 className='text-white'>Assign to</h3>
                <input value={name} onChange={(e)=> {setname(e.target.value)}}
                className='bg-transparent text-white placeholder:text-blue-200 border-2 border-sky-400 mt-' type="text" placeholder='Employee name'/>
                <h3 className='text-white'>Category</h3>
                <input value={category} onChange={(e)=> {setcategory(e.target.value)}}
                className='bg-transparent text-white placeholder:text-blue-200 border-2 border-sky-400 mt-' type="text" placeholder='division,dev etc'/>
            </div>
            <div className='flex flex-col '>
                <h3 className=' text-white'>Description</h3>
                <input value={taskDescription} onChange={(e)=> {settaskDescription(e.target.value)}}
                className='h-40 w-80 bg-transparent text-white border-2 border-emerald-600mt-' type="text" />
                <button className='w-80 text-white bg-blue-600 mt-3 rounded-sm py-2'>Creat Task</button>
            </div>
        </form>
    </div>
  )
}

export default CreatTask


Authprovider