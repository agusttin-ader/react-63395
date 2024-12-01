import Cartwidget from "./CartWidget"
import "./navbar.scss"


const Navbar = () => {
    return (
    <nav className="navbar">
        <div className="brand">
        <img src="https://content.wepik.com/statics/466225664/preview-page0.jpg" alt="" />
        <p>Cofito's</p>
        </div>
        <ul className="categories">
            <li>Productos</li>
            <li>Contacto</li>
            <li>Sobre nosotros</li>
        </ul>
        <Cartwidget />
    </nav>
    )
}

export default Navbar