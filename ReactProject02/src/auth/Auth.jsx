import React, { useState } from 'react'
const Auth=({handleLogin}) => {


  const [email, setemail] = useState('')  
  const [password, setpassword] = useState('')
  const submitHandler = (e)=> {
    e.preventDefault()
    console.log(password)
    console.log(email)
    handleLogin(email,password)
    setemail('')
    setpassword('')

  }   
  return (
    <div className=' bg-black flex justify-center items-center w-full h-screen'>
        <div className='bg-black p-20 border-2 rounded-xl border-sky-600 '>
        <form onSubmit={ (e)=>
            {submitHandler(e)
                
            }
          } className='flex flex-col justify-center items-center '> 
                <input onChange={(e)=>
                    { setemail(e.target.value)
                       
                     }
                 } required className='border-2 bg-transparent text-xl  border-sky-600 rounded-full text-white px-3 py-4 placeholder:text-sky-200' type="email" placeholder='Enter your Email' />
                <input onChange={(e)=>
                    { setpassword(e.target.value)
                       
                     
                }} required className='border-2 bg-transparent text-xl text-white border-sky-600 rounded-full px-3 py-4 mt-6 placeholder:text-sky-200' type="password" placeholder='Enter your Password'/>
                <button className='  bg-blue-600 rounded-2xl py-2 px-8 text-xl text-white mt-6' >Log in</button>
                </form>
        
        
    </div>
    </div>
    
  )
}

export default Auth