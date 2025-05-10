import React from 'react'

function CompleteTask({data}) {
  return (
    <div>
        <div className=' h-69 w-70 bg-gray-900 ml-3 mt-21 flex-shrink-0 rounded-sm '>
                <div className='flex justify-between px-5 py-3 text-white text-semibold '> <button className='bg-red-600 rounded-sm px-5'>{data.category}</button> <h2>{data.taskDate}</h2></div>
                <div className=' flex flex-col justify-center px-5 py-3 text-white text-semibold' ><h1 className='text-bold text-3xl px-8'>{data.taskTitle}</h1> <h3>{data.taskDescription}</h3></div>
                <div className='mt-6 ml-25'>
                <button className=' bg-sky-600 rounded font-medium py-1 text-white px-2 text-xs'>Complete</button>
            </div>
            </div>
            
    </div>
  )
}

export default CompleteTask