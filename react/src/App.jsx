import React from 'react'
import User from './components/user'
import User1 from './components/user1'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'
import Contact from './pages/contact'
import Navbar from './components/navbar'
import State from './hooks/State'
const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" Component={Home}/>
      <Route path="/about" Component={About}/>
       <Route path="/contact" Component={Contact}/>
       <Route path="/state" element={<State/>}/>
    </Routes>
    <User name="Preethi" department="IT"
    skills={['HTML','CSS','JS','JAVA']} />
    <User1 projects={['Medimonitor','Plagiarism','Generalized learning path generator']} />
    </>
  )
}

export default App;