import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import './Cart.scss'
import { Link } from "react-router-dom"

const Cart = () => {
    const { cart, totalPrecio, deleteProductById, deleteCart } = useContext(CartContext)

    if(cart.length === 0){
        return (
            <div className="cart-container">
                <h2 className="cart-title">Carrito</h2>
                <p className="cart-empty">El carrito esta vacio</p>
                <button className="back-to-home"><Link to = '/'>Volver al inicio</Link></button>
            </div>
        )
    }

    return (    
        <div className="cart-container">
            <h2 className="cart-title">Carrito</h2>
            <ul className="cart-items">
                {cart.map((productCart) => (
                    <li key={productCart.id} className="cart-item">
                        <img 
                            src={productCart.imagen[0]} 
                            alt={productCart.nombre} 
                            className="cart-item-image"
                        />
                        <div className="cart-item-details">
                            <p className="cart-item-title">{productCart.nombre}</p>
                            <p className="cart-item-price">Cantidad: {productCart.cantidad}</p>
                            <p className="cart-item-price">Precio unitario: {productCart.precio}</p>
                            <button className="delete-product" onClick={()=>deleteProductById(productCart.id)}>Eliminar</button>
                        </div>
                    </li>
                ))}
            </ul>
            <h3 className="cart-total">Precio total: {totalPrecio()}</h3>
            <button onClick={deleteCart} className="empty-cart">Vaciar carrito</button>
            <Link to={'/checkout'}><button className="cart-checkout">Continuar compra</button></Link>
        </div>
    )
}

export default Cart
