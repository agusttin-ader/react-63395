import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";

import './CartWidget.scss'

const Cartwidget = () => {

    const {totalQuantity} = useContext(CartContext)

    let quantity = totalQuantity()


    return (
    <Link to="/cart" className="cartwidget">
        <MdOutlineShoppingCart size={25} color="black"/>
        <p className="number-cartwidget"> { quantity !== 0 && quantity } </p>
    </Link>   
    )
}

export default Cartwidget