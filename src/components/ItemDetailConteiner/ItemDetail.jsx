import "./itemdetail.css"

const ItemDetail = ({product}) => {

    return (
    <div className="item-detail">
        <div className="images-detail-container">
            <div className="secondary-images"></div>
        <div className="main-image">
            <img src={product.imagen} alt="" />
        </div>
        </div>
        <div className="text-detail-container">
            <h2 className="title-detail">{product.nombre}</h2>
            <p className="text-detail">{product.descripcion}</p>
            <p className="text-detail">Precio: ${product.precio}</p>
        </div>
    </div>
    )
}

export default ItemDetail