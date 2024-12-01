import { MdOutlineShoppingCart } from "react-icons/md";
import './CartWidget.scss'

const Cartwidget = () => {
    return (
    <div className="cartwidget">
        <MdOutlineShoppingCart size={25} color="black"/>
        <p>1</p>
    </div>   
    )
}

export default Cartwidget