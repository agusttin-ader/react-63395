import { useState, useEffect } from "react"
import ItemList from "./ItemList.jsx"
import hocFilterProducts from "../../hoc/hocFilterProducts.jsx"
import { getProductos } from "../../data/data.js"
import {useParams} from "react-router-dom"
import "./itemlistconteiner.css"

const ItemListConteiner = ({saludo}) => {
    const [productos, setProductos] = useState([])

    const { idCategory } = useParams()

    useEffect(() => {
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
                console.log("Se ejecuto el finally")
            })
    }, [idCategory])

    return (
    <div className="itemlistconteiner">
        <h1>{saludo}</h1>
        <ItemList productos={productos} />
    </div>
    )
}

// export default ItemListConteiner

const ItemListContainerWhitHoc = hocFilterProducts(ItemListConteiner)

export default ItemListContainerWhitHoc