import { useState } from 'react'

const EjemploFormulario = () => {
    const [nombre, setNombre] = useState('')
    const [email, setEmail] = useState('')

    const handleChangeNombre = (event) => {
        setNombre(event.target.value);
    }
    const handleChangeEmail = (event) => {
        setEmail(event.target.value);
    }

    const handleSubmitForm = () => {
        event.preventDefault()
        
        const usuario = {nombre, email}
        console.log(usuario);
    }
    

    return (
        <form onSubmit={handleSubmitForm}>
            <label>Nombre</label>
            <input type="text" value={nombre} onChange={handleChangeNombre} />

            <label>Email</label>
            <input type="email" value={email} onChange={handleChangeEmail} />

            <button type="submit">Enviar formulario</button>
        </form>
    )
}

export default EjemploFormulario