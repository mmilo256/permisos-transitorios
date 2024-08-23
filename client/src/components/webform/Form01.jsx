import { useNavigate } from "react-router-dom"
import Input from "../ui/Input"
import FormLayout from "./FormLayout"
import { useState } from "react"
import useWebFormStore from "../../stores/useWebFormStore"

// Tipos de organización disponibles en el select
const orgTypes = ["Junta de Vecinos", "Club Deportivo", "Agrupación", "Otro"]

const Form01 = () => {
    // Obtiene datos del formulario y la función para actualizar datos de la organización desde el store
    const formData = useWebFormStore(state => state.formData)
    const setOrgData = useWebFormStore(state => state.setOrgData)

    // Estados locales para cada campo del formulario
    const [name, setName] = useState(formData.orgData.name)
    const [rut, setRut] = useState(formData.orgData.rut)
    const [address, setAddress] = useState(formData.orgData.address)
    const [email, setEmail] = useState(formData.orgData.email)
    const [phone, setPhone] = useState(formData.orgData.phone)
    const [orgType, setOrgType] = useState(formData.orgData.orgType)

    // Hook para la navegación programática
    const navigate = useNavigate()

    // Función para navegar a la página anterior
    const onClickPrev = () => {
        navigate("/web")
    }

    // Función para navegar a la página siguiente y actualizar los datos de la organización en el store
    const onClickNext = () => {
        // Navega a la página de datos del representante
        navigate("/web/datos-representante")

        // Crea un objeto con los datos del formulario
        const data = {
            name,
            rut,
            address,
            email,
            phone,
            orgType
        }
        // Actualiza el estado global con los datos de la organización
        setOrgData(data)
    }

    return (
        // Renderiza el layout del formulario con título y botones para navegación
        <FormLayout title="1. Datos de la organización" onClickPrev={onClickPrev} onClickNext={onClickNext}>
            <div className="grid grid-cols-2 gap-5">
                {/* Renderiza los campos del formulario con valores y manejadores de cambio */}
                <Input value={name} onChange={(e) => { setName(e.target.value) }} label="Nombre o razón social" />
                <Input value={rut} onChange={(e) => { setRut(e.target.value) }} label="RUT" />
                <Input value={address} onChange={(e) => { setAddress(e.target.value) }} label="Domicilio" />
                <Input value={email} onChange={(e) => { setEmail(e.target.value) }} type="email" label="Correo electrónico" />
                <Input value={phone} onChange={(e) => { setPhone(e.target.value) }} type="number" label="Teléfono" />
                <Input value={orgType} onChange={(e) => { setOrgType(e.target.value) }} type="select" options={orgTypes} label="Tipo de organización" />
            </div>
        </FormLayout>
    )
}

export default Form01
