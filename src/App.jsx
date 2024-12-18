import './App.css'
import NavbarComponent from './components/NavbarComponent' 
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from './components/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import CartView from './components/CartView'
import Checkout from './components/Checkout'
import Error from './components/Error'

function App() {
   return (
    <CartProvider>
      <BrowserRouter>
      <NavbarComponent/>
      <Routes>
        <Route path='/' element={<ItemListContainer greeting="Bienvenidos al mundo de PLANTAS"/>}/>  
        <Route path='/products/:category' element={<ItemListContainer/>}/>
        <Route path='/item/:id' element={<ItemDetailContainer/>}/>
        <Route path='/cart' element={<CartView/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
    </BrowserRouter>
    </CartProvider>
    
  )
}

export default App
