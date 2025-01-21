import { useState, useEffect } from "react"
import ItemDetail from "./ItemDetail"
import { doc, getDoc } from "firebase/firestore"
import db from "../../db/db.js"
import { useParams } from "react-router-dom"
import { FadeLoader } from "react-spinners"
import './itemDetailConteiner.scss'

const ItemDetailConteiner = () => {
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    const { idProduct } = useParams()

    const getProduct = async () => {
        try {
            const docRef = doc(db, "products", idProduct)
            const dataDb = await getDoc(docRef)

            if (dataDb.exists()) {
                const data = { id: dataDb.id, ...dataDb.data() }
                setProduct(data)
            } else {
                setError(true)
            }
        } catch (error) {
            console.log(error)
            setError(true)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getProduct()
    }, [idProduct])

    return (
        <>
            {loading ? (
                <div className="loading-container">
                    <FadeLoader color="#00796b" />
                </div>
            ) : error ? (
                <div className="error-container">
                    <p>Product Not Found</p>
                </div>
            ) : (
                <ItemDetail product={product} />
            )}
        </>
    )
}

export default ItemDetailConteiner

