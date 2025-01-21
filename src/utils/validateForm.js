import { object, string, number } from "yup";

let userSchema = object().shape({
    fullname: string().required("Su nombre completo es requerido"). min(3, "El nombre completo debe contener almenos 3 caracteres"). max(50, "El nombre completo solo admite hasta 50 caracteres"),
    phone: number().required("Su telefono es requerido"). positive("El telefono no puede ser negativo"). integer("El telefono no puede contener decimales"),
    email : string().email("Email no valido").required("Su email es requerido")
});

const validateForm = async (dataForm) => {
    try{
        await userSchema.validate(dataForm)
        return { status: "success", massages: "Validation success" }
    } catch(error){
        return { status: "error", massages: error.message }
    }
}

export default validateForm;