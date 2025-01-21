import './formCheckout.scss'

const FormCheckout = ( { dataForm, handleChangeInput, handleSubmitForm}) => {
    return (
        <div className="form-checkout">
            <h2 className="form-title">¡Completa tus datos!</h2>
            <form onSubmit={handleSubmitForm}>
                <label className="form-label">Nombre completo</label>
                <input type="text" value={dataForm.fullname} name="fullname" onChange={handleChangeInput} className="form-input" />
            
                <label className="form-label">Telefono</label>
                <input type="number" value={dataForm.phone} name="phone" onChange={handleChangeInput} className="form-input" />
                
                <label className="form-label">Email</label>
                <input type="email" value={dataForm.email} name="email" onChange={handleChangeInput} className="form-input" />
                
                <label className="form-label">Confirmar Email</label>
                <input type="email" value={dataForm.confirmEmail} name="confirmEmail" onChange={handleChangeInput} className="form-input" />
                
                <button type="submit" className="form-button">Enviar orden</button>
            </form>
        </div>
    )
}

export default FormCheckout