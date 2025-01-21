//Hook de ejemplo
// import { useEffect, useState } from 'react'
// import { getProductos } from '../../data/data'

// const useProducts = () => {
//      const [productos, setProductos] = useState([])
//      const [loading, setLoading] = useState(false)

//      useEffect(() => {
//          setLoading(true)

//          getProductos()
//          .then((data) => {
//              setProductos(data)
//          })
//          .catch((error) => {
//              console.error(error)
//          })
//          .finally(() => {
//              setLoading(false)
//          })
//      }, []) // <-- Add dependency array to avoid unnecessary re-renders

//      return { productos, loading }
// }

// export default useProducts