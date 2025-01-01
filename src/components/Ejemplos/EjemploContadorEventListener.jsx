import { useState, useEffect } from 'react'

const EjemploContadorEventListener = () => {
    const [contador, setContador] = useState(1)
    
    const handleClickButton = () => {
        setContador((prevContador) => prevContador + 1)

    }

    useEffect( () => {
        const botonSumar = document.getElementById('botonSumar');
        
        botonSumar.addEventListener('click', handleClickButton);

        //cleanup Effect => antes que se desmonte el componente se elimina el evento, que se hace para liberar memoria
        return () => {
            botonSumar.removeEventListener('click', handleClickButton);
        }
    }, [] )


    return (
        <div>
            <p>{contador}</p>
            <button id='botonSumar'>+</button>
        </div>
    )
}

export default EjemploContadorEventListener