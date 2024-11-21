import './App.css'
import NavBar from './components/NavBar'

// cntrl C para salir de npm run dev muchas veces, y npm run dev para iniciarlo.


// import { NavBar, saludo } from './components/NavBar'



function App() {
  const CONDICION = false
  const ESTILOS_H1 = {color: CONDICION === true ? "purple" : "red",  fontSize: "50px"}

  return (
    <div>
      <NavBar />
      <h1 style={ESTILOS_H1}>Hola mundo!</h1>
      <img /> 
    </div>
  )
}

export default App
