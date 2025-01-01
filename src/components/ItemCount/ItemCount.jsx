import { useState } from 'react'
import './ItemCount.scss'

const ItemCount = ({stock, AddProductInCart}) => {
    const [count, setCount] = useState(1)

    const handleClickRemove = () => {
        if(count > 1){
            setCount(count - 1)
        }
    }

    const handleClickAdd = () => {
            count < stock ? setCount(count + 1) : console.log('No hay mas stock');
    }

    return (
        <div className='itemCountContainer'>
            <div className='buttonContainer'>
                <button className='buttonAddRemove' onClick={handleClickRemove}>-</button>
                <p>{count}</p>
                <button className='buttonAddRemove' onClick={handleClickAdd}>+</button>
            </div>
            <button className='buttonAddCart' onClick={ () => AddProductInCart(count) }>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount