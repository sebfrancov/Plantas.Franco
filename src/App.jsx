import './App.css'
import NavbarComponent from './components/NavbarComponent' 
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from './components/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
/* import EjemploPromise from './components/Ejemplos/EjemploPromise/EjemploPromise' */
/* import EjemploEstados from './components/EjemploEstados/EjemploEstados' */
function App() {
   return (
    <BrowserRouter>
      <NavbarComponent/>
      <Routes>
        <Route path='/' element={<ItemListContainer greeting="Bienvenidos al mundo de PLANTAS"/>}/>  
        <Route path='/products/:category' element={<ItemListContainer/>}/>
        <Route path='/item/:id' element={<ItemDetailContainer/>}/>
      </Routes>
      {/* <EjemploEstados/> */}
      {/* <EjemploPromise/> */}
    </BrowserRouter>
  )
}

export default App
