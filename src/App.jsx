import React from 'react'
import Landing from './pages/Landing'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SingleProduct from './pages/Singleproduct'
import Cart from './pages/Cart'
import Nav from './Components/sections/Nav'
import Footer from './Components/sections/Footer'
// import Nav from './Components/Nav'
// import Funihighlight from './Components/Funihighlight'
// import Bestsellerproducts from '../src/Components/Bestsellerproduct'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Nav/>
      <Routes>
        <Route path='/' element={<Landing />}></Route>
        <Route path='/product/:id' element={<SingleProduct />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App