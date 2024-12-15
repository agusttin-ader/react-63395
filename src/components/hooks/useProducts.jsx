import { useEffect, useState } from 'react'
import { getProductos } from '../../data/data'


const useProducts = () => {
    const [productos, setProductos] = useState([])
    const  [loading, setLoading] = useState(false)

    useEffect(()=>{
        setLoading(true)

        getProductos()
        .then((data)=>{
            setProductos(data)
        })
        .catch((error)=>{
            console.error(error)
        })
        .finally(()=>{
            setLoading(false)

    })
    }, [])

    return {productos, loading}
}

export default useProducts