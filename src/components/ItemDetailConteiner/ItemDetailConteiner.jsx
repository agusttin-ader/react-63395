import { useState, useEffect } from "react"
import ItemDetail from "./ItemDetail"
import { getProductos } from "../../data/data.js"
import { useParams } from "react-router-dom"
import { FadeLoader } from "react-spinners"
import './itemDetailConteiner.scss'

const ItemDetailConteiner = () => {
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)


    const { idProduct } = useParams()
    
    useEffect(() => {
        setLoading(true)

        getProductos()
        .then( (data) => {
            const productFind = data.find( (dataProduct) => dataProduct.id === idProduct);
            setProduct(productFind)
        })
        .catch( (error) => console.log(error))

        .finally( () => setLoading(false))

    }, [idProduct])

    return (
        <>
        {
            loading === true ? (
                <div className="loading-container">
                    <FadeLoader color="#00796b" />
                </div>
            ) : <ItemDetail product={product} />
        }
        </>
    )
}

export default ItemDetailConteiner

