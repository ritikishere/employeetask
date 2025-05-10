import React, { useContext, useEffect, useState } from 'react'
import Auth from './auth/Auth'
import Admindash from './auth/dashboard/Admindash'
import Employeedash from './auth/dashboard/Employeedash'
import { setLocalStorage } from './Context/Localstorage'
import Authprovider, { AuthContext } from './Context/Authprovider'

const App = () => {

  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const [userData,SetUserData] = useContext(AuthContext)

  useEffect(()=>{
    const loggedInUser = localStorage.getItem('loggedInUser')
    
    if(loggedInUser){
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      setLoggedInUserData(userData.data)
    }

  },[])

  
  const handleLogin = (email, password) => {
    if (email == 'admin@me.com' && password == '123') {
      setUser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }))
    } else if (userData) {
      const employee = userData.find((e) => email == e.email && e.password == password)
      if (employee) {
        setUser('employee')
        setLoggedInUserData(employee)
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee',data:employee }))
      }     else {alert("There are 10 employees and one Admin: Employees => Email: employee1@example.com , employee2@example.com and so on. Admin => Email: admin@me.com   password for both: 123")}
    } 

  }


  return (
    <>
      {!user ? <Auth handleLogin={handleLogin} /> : ''}
      {user == 'admin' ? <Admindash changeUser={setUser} /> : (user == 'employee' ? <Employeedash changeUser={setUser} data={loggedInUserData} /> : null) }
    </>
  )
}

export default App

