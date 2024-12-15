import { Link } from "react-router-dom"

const Item = ({producto}) => {
    return (
    <div className="item">
            <h3 className="text-item">{producto.nombre}</h3>
            <img className="img-item" width={100} src={producto.imagen} alt={producto.nombre}/>
            <p className="text-item">${producto.precio}</p>
            <Link to={"/detail/" + producto.id}>Ver detalles</Link>
    </div>
    )
} 

export default Item