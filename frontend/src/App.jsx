import React from 'react'

import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/about'
import Contact from './pages/Contact'
import Service from './pages/Service'
import Product from './pages/Product'
import ProductDetails from './pages/ProductDetails'

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
    </Routes>
      </>
  )
}

export default App