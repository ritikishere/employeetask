import React, { useContext } from 'react'
import Header2 from './others/Header2'
import CreatTask from './others/CreatTask'
import AllTask from './others/AllTask'
import { AuthContext } from '../../Context/Authprovider'



const Admindash = (props) => {

    const [userData,setUserData] =  useContext(AuthContext)

  

  return (
    <div className='bg-black  '>

        <div className=''>
          <Header2 changeUser={props.changeUser}/>
        <CreatTask />
        <div className='w-full bg-black px-5 '>
        </div>
        </div>
        
      


<div></div>



    <div  className='bg-gray-900 p-5 rounded mt-5 overflow-y-auto'>
        <div className='bg-red-400 mb-2 py-2 px-4 flex justify-between rounded '>
            <h2 className='text-lg font-medium w-1/5'>Employee Name</h2>
            <h3 className='text-lg font-medium w-1/5'>New Task</h3>
            <h5 className='text-lg font-medium w-1/5'>Active Task</h5>
            <h5 className='text-lg font-medium w-1/5'>Completed</h5>
            <h5 className='text-lg font-medium w-1/5'>Failed</h5>
        </div>
        <div className=''>
        {userData.map(function(elem,idx){
            return <div key={idx} className='border-2 border-emerald-500 mb-2 py-2 px-4 flex justify-between rounded'>
            <h2 className='text-lg font-medium  w-1/5'>{elem.firstName}</h2>
            <h3 className='text-lg font-medium w-1/5 text-blue-400'>{elem.taskCounts.newTask}</h3>
            <h5 className='text-lg font-medium w-1/5 text-yellow-400'>{elem.taskCounts.active}</h5>
            <h5 className='text-lg font-medium w-1/5 text-white'>{elem.taskCounts.completed}</h5>
            <h5 className='text-lg font-medium w-1/5 text-red-600'>{elem.taskCounts.failed}</h5>
        </div>
        })}
        </div>
        
        
    </div>
    


    </div>
  )
}

export default Admindash

