import { useNavigate } from "react-router-dom"
import Input from "../ui/Input"
import FormLayout from "./FormLayout"
import useWebFormStore from "../../stores/useWebFormStore"
import { useState } from "react"
import { formatRut, onlyNumberInput, validateEmail } from "../../utils/utils"
import Alert from "../ui/Alert"

const Form02 = () => {

    // Obtiene datos del formulario y la función para actualizar datos del representante desde el store
    const formData = useWebFormStore(state => state.formData)
    const setPersonData = useWebFormStore(state => state.setPersonData)

    // Estados locales para cada campo del formulario
    const [name, setName] = useState(formData.personData.name)
    const [rut, setRut] = useState(formData.personData.rut)
    const [address, setAddress] = useState(formData.personData.address)
    const [email, setEmail] = useState(formData.personData.email)
    const [phone, setPhone] = useState(formData.personData.phone)
    const [phone2, setPhone2] = useState(formData.personData.phone2)

    const [validationAlert, setValidationAlert] = useState(false)

    // Hook para la navegación programática
    const navigate = useNavigate()

    // Función para navegar a la página anterior
    const onClickPrev = () => {
        navigate("/datos-organizacion")
    }

    // Función para navegar a la página siguiente y actualizar los datos del representante en el store
    const onClickNext = () => {
        if (validateEmail(email)) {
            // Crea un objeto con los datos del formulario
            const data = {
                name,
                rut,
                address,
                email,
                phone,
                phone2
            }
            // Actualiza el estado global con los datos del representante
            setPersonData(data)
            // Navega a la página de detalles del permiso
            navigate("/detalles-permiso")
        } else {
            setValidationAlert(true)
        }
    }

    return (
        // Renderiza el layout del formulario con título y botones para navegación
        <>
            <FormLayout title="2. Datos del representante legal" onClickPrev={onClickPrev} onClickNext={onClickNext}>
                <div className="grid md:grid-cols-2 gap-5">
                    {/* Renderiza los campos del formulario con valores y manejadores de cambio */}
                    <Input max={90} placeholder="Nombre del presidente de la organización" value={name} onChange={(e) => { setName(e.target.value) }} label="Nombre completo" />
                    <Input max={12} placeholder="22.222.222-K" value={rut} onChange={(e) => { setRut(formatRut(e.target.value)) }} label="RUT" />
                    <Input max={90} placeholder="José Pinto Pérez 0182" value={address} onChange={(e) => { setAddress(e.target.value) }} label="Domicilio" />
                    <Input max={40} placeholder="ejemplo@gmail.com" value={email} onChange={(e) => { setEmail(e.target.value) }} label="Correo electrónico" />
                    <Input max={9} placeholder="932020239" value={phone} onChange={(e) => { setPhone(onlyNumberInput(e.target.value)) }} label="Teléfono" />
                    <Input max={9} placeholder="932020239" value={phone2} onChange={(e) => { setPhone2(onlyNumberInput(e.target.value)) }} label="Teléfono 2 (opcional)" />
                </div>
            </FormLayout>
            <Alert variant="warning" text="El correo electrónico es inválido" visible={validationAlert} setVisible={setValidationAlert} />
        </>
    )
}

export default Form02
