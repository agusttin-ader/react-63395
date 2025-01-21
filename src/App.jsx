import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import ItemListConteiner from './components/ItemListConteiner/ItemListConteiner'
import ItemDetailConteiner from './components/ItemDetailConteiner/ItemDetailConteiner'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import Cart from './components/Cart/Cart'
import Checkout from './components/Checkout/Checkout'
import { ToastContainer } from 'react-toastify'
import './App.css'


function App() {
// Browser Router da funciones adicionales a los demas componentes que esten adentro.
// Routes son las rutas que se van a utilizar especificamente
// Route es la ruta que se va a utilizar path es la direccion que se va a utilizar y element es el componente que se va a renderizar
return (
    <div className='conteiner-app'>
      <BrowserRouter> 
      <CartProvider> 
      <Navbar />
      <ToastContainer theme="dark" />
      
      <Routes>
        <Route path = '/' element = {<ItemListConteiner saludo = 'Bienvenidos a CofitoS'/>} />
        <Route path = "/category/:idCategory" element = {<ItemListConteiner saludo = 'Bienvenidos a CofitoS'/>} />
        <Route path = "/detail/:idProduct" element = {<ItemDetailConteiner />}/>
        <Route path='/cart' element = {<Cart />}/>
        <Route path='/checkout' element = {<Checkout />}/>
      </Routes>

      <Footer />
      </CartProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
