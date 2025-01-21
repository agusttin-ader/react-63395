import React, { useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { useContext } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './itemDetail.scss';
import { Link } from 'react-router-dom';

const ItemDetail = ({ product }) => {
    //estado para controlar si se muestra o no el componente ItemcCount
    const [showItemCount, setShowItemCount] = useState(true);

    const [currentImage, setCurrentImage] = useState(product.imagen[0]);

    const imagenes = product.imagen.filter((image) => image !== currentImage);

    const { addProduct } = useContext(CartContext);

    const AddProductInCart = (count) => {
        //producto que vamos a anadir al carrito
        const productCart = {...product, cantidad: count};

        addProduct(productCart);
        // una vez que se agrega el producto al carrito, se oculta el componente ItemCount
        setShowItemCount(false);
        
    };

    return (
        <div className="item-detail">
            <div className="images-detail-container">
                <div className="secondary-images">
                    {imagenes.map((imagen) => (
                        <img
                            src={imagen}
                            key={imagen}
                            alt="Secondary"
                            onClick={() => setCurrentImage(imagen)}
                        />
                    ))}
                </div>
                <div className="main-image">
                    <img src={currentImage} alt="Main" />
                </div>
            </div>
            <div className="text-detail-container">
                <h2>{product.nombre}</h2>
                <p className="text-detail">{product.descripcion}</p>
                <p>${product.precio}</p>
                {
                    showItemCount === true ? (
                        <ItemCount stock={product.stock} AddProductInCart={AddProductInCart} />
                    ):(
                        <button className='finish-buy'><Link className='link-finish' to = "/cart">Terminar mi compra</Link></button>
                    )
                }
            </div>
        </div>
    );
}

export default ItemDetail;