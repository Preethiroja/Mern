import React from 'react'
import Profile from '../components/Profile'
import State from '../hooks/State'
import Parent from '../components/Parent'
import Form from '../hooks/Form'

const Home = () => {
  return (
    <div>
        <div>App</div>
    <Form/>
    <Parent/>
      <State/>
      <Profile name="xyz" age={23} skills={["HTML","CSS","JS","JAVA","NODE"]}/>
    </div>
  )
}

export default Home