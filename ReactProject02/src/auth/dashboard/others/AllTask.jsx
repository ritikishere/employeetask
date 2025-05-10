import React from 'react'
import AcceptTask from '../../../TaskStatus/AcceptTask'
import CompleteTask from '../../../TaskStatus/CompleteTask'
import NewTask from '../../../TaskStatus/NewTask'
import FailedTask from '../../../TaskStatus/FailedTask'

const AllTask = ({data}) => {
  return (
    <div className='flex gap-3 px-4 overflow-x-auto w-full flex-start flex-nowrap'>
     {
      data.tasks.map((elem,index) => {
        if(elem.active) return <AcceptTask key={index} data={elem}/>
        if(elem.newTask) return <NewTask key={index} data={elem}/>
        if(elem.completed) return <CompleteTask key={index} data={elem}/>
        if(elem.failed) return <FailedTask key={index} data={elem}/>
      }

      )
     }
      
    </div>
  )
}

export default AllTask