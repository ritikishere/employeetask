import React from 'react'
import Header from './others/Header'
import AllTask from './others/AllTask'
import Tasklistno from './others/Tasklistno'
const  Employeedash = (props) => {
  return (
    <div className='bg-gray-800 h-screen'>
        <Header changeUser={props.changeUser} data={props.data}/>
        <Tasklistno data={props.data}/>
    </div>
  )
}

export default Employeedash