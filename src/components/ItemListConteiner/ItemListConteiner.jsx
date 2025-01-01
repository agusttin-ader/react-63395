import { useState, useEffect } from "react"
import ItemList from "./ItemList.jsx"
import hocFilterProducts from "../../hoc/hocFilterProducts.jsx"
import { getProductos } from "../../data/data.js"
import {useParams} from "react-router-dom"
import { FadeLoader } from "react-spinners"
import "./itemlistconteiner.css"

const ItemListConteiner = ({saludo}) => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(false)

    const { idCategory } = useParams()

    useEffect(() => {
        setLoading(true)

        getProductos()
            .then((data) => {
                if(idCategory){
                    const filterProductos = data.filter ((producto) => producto.category === idCategory)
                    setProductos(filterProductos)
                }else{
                    setProductos(data)
                }
            })
            .catch((error) => {
                console.error(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [idCategory])

    return (
    <div className="itemlistconteiner">
        <h1>{saludo}</h1>
        {
            loading === true ? (<div className="loading-container"> <FadeLoader color="#00796b" /> </div>) : (<ItemList productos={productos} />)
        }
    </div>
    )
}

// export default ItemListConteiner

const ItemListContainerWhitHoc = hocFilterProducts(ItemListConteiner)

export default ItemListContainerWhitHoc