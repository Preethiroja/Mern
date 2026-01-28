import React, { createContext } from 'react'

import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/about'
import Contact from './pages/Contact'
import Service from './pages/Service'
import Product from './pages/Product'
import ProductDetails from './pages/ProductDetails'
import State from './hooks/State'
import Form from './hooks/Form'
import Profile from './components/Profile'
import Reducer from './hooks/Reducer'

export const userContext=createContext()

const App = () => {
  return (
    <>
    <Navbar></Navbar>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/service' element={<Service/>}/>
      <Route path='/product' element={<Product/>}/>
      <Route path='/product/:id' element={<ProductDetails/>}/>
      <Route path='/form' element={<Form/>}/>
      <Route path='/state' element={<State/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/reducer' element={<Reducer/>}/>
    </Routes>
      </>
  )
}

export default App