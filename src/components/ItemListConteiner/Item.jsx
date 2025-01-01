import { Link } from "react-router-dom"

const Item = ({producto}) => {
    return (
    <div className="item">
            <h3 className="text-item">{producto.nombre}</h3>
            <img className="img-item" width={100} src={producto.imagen[0]} alt={producto.nombre}/>
            <p className="text-item">${producto.precio}</p>
            <button className="button-detail"><Link className="detail" to={"/detail/" + producto.id}>Ver detalles</Link></button>
    </div>
    )
} 

export default Item