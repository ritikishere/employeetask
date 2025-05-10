import React from 'react'

function NewTask({data}) {
  return (
    
<div className=' h-69 w-70 bg-gray-900 ml-3 mt-21 rounded-sm  flex-shrink-0 '>
                <div className='flex justify-between px-5 py-3 text-white text-semibold '> <button className='bg-red-600 rounded-sm px-5'>{data.category}</button> <h2>{data.taskDate}</h2></div>
                <div className=' flex flex-col justify-center px-5 py-3 text-white text-semibold' ><h1 className='text-bold text-3xl px-8'>{data.taskTitle}</h1> <h3>{data.taskDescription}</h3></div>
                <div className='flex justify-between px-3 '> <button className='bg-green-600 rounded-sm text-white px-5'>Accept Task</button> 
                <button className='bg-red-600 rounded-sm text-white px-5'>Reject Task</button>
                </div>
            </div>
  )
}

export default NewTask