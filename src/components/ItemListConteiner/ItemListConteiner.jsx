import { useState, useEffect } from "react"
import ItemList from "./ItemList.jsx"
import { useParams } from "react-router-dom"
import { collection, getDocs, query, where } from "firebase/firestore"
import db from "../../db/db.js"
import { FadeLoader } from "react-spinners"
import "./itemlistconteiner.css"

const ItemListConteiner = ({ saludo }) => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const { idCategory } = useParams()
    const collectionName = collection(db, "products")

    const getProducts = async () => {
        try {
            const dataDb = await getDocs(collectionName)

            const data = dataDb.docs.map((productDb) => {
                return { id: productDb.id, ...productDb.data() }
            })

            setProductos(data)
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    const getProductsByCategory = async () => {
        try {
            setLoading(true)
            const q = query(collectionName, where("category", "==", idCategory))
            const dataDb = await getDocs(q)

            const data = dataDb.docs.map((productDb) => {
                return { id: productDb.id, ...productDb.data() }
            })

            setProductos(data)
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        setLoading(true)
        if (idCategory) {
            getProductsByCategory()
        } else {
            getProducts()
        }
    }, [idCategory])

    return (
        <div className="itemlistconteiner">
            <h1 className="saludo">{saludo}</h1>
            {loading ? (
                <div className="loading-container">
                    <FadeLoader color="#00796b" />
                </div>
            ) : (
                <ItemList productos={productos} />
            )}
        </div>
    )
}

export default ItemListConteiner