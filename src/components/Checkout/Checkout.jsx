import { useState, useContext } from "react"
import FormCheckout from "./FormCheckout"
import { CartContext } from "../../context/CartContext"
import { Timestamp, collection, addDoc } from "firebase/firestore"
import db from "../../db/db.js"
import validateForm from "../../utils/validateForm.js"
import { toast } from "react-toastify"
import "./checkout.scss"

const Checkout = () => {

    const [dataForm, setDataForm] = useState({
        fullname: '',
        phone: '',
        email: '',
        confirmEmail: ''
    })

    const [orderId, setOrderId] = useState(null)

    const { cart, totalPrecio, clearCart } = useContext(CartContext)

    const handleChangeInput = (e) => {
        setDataForm({ ...dataForm, [e.target.name]: e.target.value })
    }

    const handleSubmitForm = async (e) => {
        e.preventDefault()
        if (dataForm.email !== dataForm.confirmEmail) {
            toast.warn("Los correos electrónicos no coinciden")
            return
        }
        const orden = {
            buyer: { ...dataForm },
            products: [...cart],
            total: totalPrecio(),
            date: Timestamp.fromDate(new Date())
        }
        const response = await validateForm(dataForm)
        if (response.status === "success") {
            await uploadOrder(orden)
        } else {
            toast.warn(response.massages)
        }
    }

    const uploadOrder = async (newOrder) => {
        try {
            const orderRef = collection(db, "ordenes")
            const response = await addDoc(orderRef, newOrder)
            setOrderId(response.id)
            clearCart() // Reset the cart to 0
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="checkout-container">
            {
                orderId ? (
                    <div className="order-confirmation">
                        <h2>Gracias por tu compra!</h2>
                        <p>El id de tu orden es: {orderId}</p>
                    </div>
                ) : (
                    <FormCheckout
                        dataForm={dataForm}
                        handleChangeInput={handleChangeInput}
                        handleSubmitForm={handleSubmitForm}
                    />
                )
            }
        </div>
    )
}

export default Checkout