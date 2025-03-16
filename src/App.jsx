import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Cart, Home, OutletPage, Product, SingleProduct } from './pages'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element = {<OutletPage/>}>
            <Route path='/' element = {<Home />}></Route>
            <Route path='/products' element = {<Product />}></Route>
            <Route path='/product/:id' element = {<SingleProduct />}></Route>
            <Route path="/cart" element = {<Cart />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
