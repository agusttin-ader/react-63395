import { useState, useEffect } from "react"
import ItemDetail from "./ItemDetail"
import { getProductos } from "../../data/data.js"
import { useParams } from "react-router-dom"

const ItemDetailConteiner = () => {
    const [product, setProduct] = useState({})

    const { idProduct } = useParams()
    
    useEffect(() => {
        getProductos()
        .then( (data) => {
            const productFind = data.find( (dataProduct) => dataProduct.id === idProduct);
            setProduct(productFind)
        })
    }, [idProduct])

    return (
        <div>
            <ItemDetail product={product} />
        </div>
    )
}

export default ItemDetailConteiner