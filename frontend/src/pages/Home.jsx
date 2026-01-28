import React, { useState } from 'react'
import Profile from '../components/Profile'
import State from '../hooks/State'
import Parent from '../components/Parent'
import Form from '../hooks/Form'
import { Link } from 'react-router-dom'
import { userContext } from '../App'

const Home = () => {
  const [user,setUser]=useState('abcde')
  return (
    <div>
        <Link to={'/form'}>Form</Link><br/>
        <Link to={'/state'}>useState Example</Link><br/>
        <Link to={'/reducer'}>useReducer Example</Link><br/>

        <userContext.Provider value={user}>
          <Profile 
           age={23} 
           skills={["HTML","CSS","JS","JAVA","NODE"]}/>
        </userContext.Provider>
    
    <Parent/>
      {/* <Profile name="xyz" age={23} skills={["HTML","CSS","JS","JAVA","NODE"]}/> */}
    </div>
  )
}

export default Home