import Navbar from './components/Navbar/Navbar'
import ItemListConteiner from './components/ItemListConteiner/ItemListConteiner'
import ItemDetailConteiner from './components/ItemDetailConteiner/ItemDetailConteiner'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

function App() {
// Browser Router da funciones adicionales a los demas componentes que esten adentro.
// Routes son las rutas que se van a utilizar especificamente
// Route es la ruta que se va a utilizar path es la direccion que se va a utilizar y element es el componente que se va a renderizar
return (
    <div className='conteiner-app'>
      <BrowserRouter> 
        <Navbar />

        <Routes>
          <Route path = '/' element = {<ItemListConteiner saludo = 'Bienvenidos a CofitoS'/>} />
          <Route path = "/category/:idCategory" element = {<ItemListConteiner saludo = 'Bienvenidos a CofitoS'/>} />
          <Route path = "/detail/:idProduct" element = {<ItemDetailConteiner />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
