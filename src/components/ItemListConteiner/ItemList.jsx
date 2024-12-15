import Item from "./Item"

const ItemList = ({productos}) => {
    return (
    <div className="itemlist">
        {
        productos.map((producto)=>(
        <Item producto={producto} key={producto.id} />
        ))
        }
    </div>
    )
}

export default ItemList