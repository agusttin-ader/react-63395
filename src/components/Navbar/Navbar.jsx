import Cartwidget from "./CartWidget"
import "./navbar.scss"
import { Link } from "react-router-dom"


const Navbar = () => {
    return (
    <nav className="navbar">
        <Link to ="/"  className="brand">
        <img src="../public/img/cofitos.jpeg" alt="logo" />
        <p>Cofito's</p>
        </Link>
        <ul className="categories">
            <Link to= "/category/budines" className="category">Budines</Link>
            <Link to = "/category/tortas" className="category">Tortas</Link>
            <Link to= "/category/cupcakes" className="category">Cupcakes</Link>
        </ul>
        <Cartwidget />
    </nav>
    )
}

export default Navbar