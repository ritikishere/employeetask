import React from 'react'
import AllTask from './AllTask'

const Tasklistno = ({data}) => {
  return (
    <div className=''>
        <div className='flex gap-2'>
            <div className='h-35 w-70 rounded-xl text-2xl ml-5 mt-5 bg-gray-900 '><h1 className='font-semibold ml-5 mt-3 text-2xl text-white'>{data.taskCounts.newTask }</h1><br /> <h1 className='font-semibold ml-5 text-white'>New Task</h1></div>
            <div className='h-35 w-70 rounded-xl text-2xl ml-5 mt-5 bg-gray-900 '><h1 className='font-semibold ml-5 mt-3 text-2xl text-white'>{data.taskCounts.completed }</h1><br /> <h1 className='font-semibold ml-5 text-white'>Completed Task</h1></div>
            <div className='h-35 w-70 rounded-xl text-2xl ml-5 mt-5 bg-gray-900 '><h1 className='font-semibold ml-5 mt-3 text-2xl text-white'>{data.taskCounts.active }</h1><br /> <h1 className='font-semibold ml-5 text-white'>Accepted Task</h1></div>
            <div className='h-35 w-70 rounded-xl text-2xl ml-5 mt-5 bg-gray-900 '><h1 className='font-semibold ml-5 mt-3 text-2xl text-white'>{data.taskCounts.failed }</h1><br /> <h1 className='font-semibold ml-5 text-white'>Failed Task</h1></div>
        </div>

        <AllTask data={data} />

</div>
        
  )
}

export default Tasklistno