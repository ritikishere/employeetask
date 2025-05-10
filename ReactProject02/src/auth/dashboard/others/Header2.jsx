import React from 'react'
import Auth from '../../Auth'

const Header2 = (props) => {

  const logOutUser=()=>{
    localStorage.setItem('loggedInuserData','')
    props.changeUser('')

  }
  return (
    <div className='flex justify-between py-5 bg-gray-950  text-white'>
        <h1 className=' text-3xl font-semibold ml-5'>Hello <br />Ritik 😎</h1>
        <button onClick={logOutUser} className='bg-red-600 rounded-xl mr-5 px-5 '>Logout</button>
    </div>
  )
}

export default Header2