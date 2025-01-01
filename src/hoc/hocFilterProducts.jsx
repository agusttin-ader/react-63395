import { useState } from "react"
import './hocFilterProducts.scss'
import useProducts from "../components/hooks/useProducts"

const hocFilterProducts = (Component) => {
    
    
    return function () {
        const {productos, loading} = useProducts()
        const [query, setQuery] = useState('')

        const changeInput = (event) =>{
            setQuery( event.target.value.toLowerCase() )  //recupera el valor del input con toLowerCase() cambiamos el string a minusculas.
        }

        const search = ()=>{
            const filterProducts = productos.filter((product)=>{
                return product.nombre.toLowerCase().includes(query)
            })

            return filterProducts
        }

        return(
            <>
            <div>
                <input type="text" placeholder="Buscar...." onChange={changeInput} />
            </div>
            <Component productos = { search() } />
            
            </>
        )
    }
}

export default hocFilterProducts