import { useNavigate } from "react-router-dom"
import Input from "../ui/Input"
import RadioGroup from "../ui/RadioGroup"
import FormLayout from "./FormLayout"
import useWebFormStore from "../../stores/useWebFormStore"
import { useState } from "react"

// Opciones para los campos de radio (Sí/No)
const opYesNo = ["Si", "No"]

const Form03 = () => {

    // Obtiene datos del formulario y la función para actualizar datos de permisos desde el store
    const formData = useWebFormStore(state => state.formData)
    const setPermissionData = useWebFormStore(state => state.setPermissionData)

    // Estados locales para cada campo del formulario, inicializados con datos del estado global
    const [name, setName] = useState(formData.permissionData.name)
    const [place, setPlace] = useState(formData.permissionData.place)
    const [startDate, setStartDate] = useState(formData.permissionData.startDate)
    const [startTime, setStartTime] = useState(formData.permissionData.startTime)
    const [endDate, setEndDate] = useState(formData.permissionData.endDate)
    const [endTime, setEndTime] = useState(formData.permissionData.endTime)
    const [alcohol, setAlcohol] = useState(formData.permissionData.alcohol)
    const [food, setFood] = useState(formData.permissionData.food)
    const [description, setDescription] = useState(formData.permissionData.description)
    const [purpose, setPurpose] = useState(formData.permissionData.purpose)

    // Hook para la navegación programática
    const navigate = useNavigate()

    // Función para navegar a la página anterior
    const onClickPrev = () => {
        navigate("/datos-representante")
    }

    // Función para navegar a la página siguiente y actualizar los datos del permiso en el store
    const onClickNext = () => {
        // Navega a la página de antecedentes
        navigate("/antecedentes")

        // Crea un objeto con los datos del formulario
        const data = {
            name,
            place,
            startDate,
            startTime,
            endDate,
            endTime,
            alcohol,
            food,
            description,
            purpose
        }
        // Actualiza el estado global con los datos del permiso
        setPermissionData(data)
    }

    return (
        // Renderiza el layout del formulario con título y botones para navegación
        <FormLayout title="3. Detalles del permiso" onClickPrev={onClickPrev} onClickNext={onClickNext}>
            <div className="grid grid-cols-4 gap-5">
                {/* Campos del formulario para detalles del permiso */}
                <div className="col-span-2">
                    <Input value={name} onChange={(e) => { setName(e.target.value) }} label="Nombre de la actividad" />
                </div>
                <div className="col-span-2">
                    <Input value={place} onChange={(e) => { setPlace(e.target.value) }} label="Lugar de realización" />
                </div>
                <Input value={startDate} onChange={(e) => { setStartDate(e.target.value) }} type="date" label="Fecha de inicio" />
                <Input value={startTime} onChange={(e) => { setStartTime(e.target.value) }} type="time" label="Hora de inicio" />
                <Input value={endDate} onChange={(e) => { setEndDate(e.target.value) }} type="date" label="Fecha de término" />
                <Input value={endTime} onChange={(e) => { setEndTime(e.target.value) }} type="time" label="Hora de término" />
                <div className="col-span-2">
                    {/* Grupo de botones de radio para consumo de alcohol */}
                    <RadioGroup selectedValue={alcohol} onChange={setAlcohol} label="Consumo de alcohol" options={opYesNo} name="alcohol" />
                </div>
                {/* Grupo de botones de radio para venta de alimentos */}
                <RadioGroup selectedValue={food} onChange={setFood} label="Venta de alimentos" options={opYesNo} name="alimentos" />
                <div className="col-span-4">
                    {/* Campo de texto para descripción de la actividad */}
                    <Input value={description} onChange={(e) => { setDescription(e.target.value) }} type="textarea" label="Descripción de la actividad" />
                </div>
                <div className="col-span-4">
                    {/* Campo de texto para destino de los fondos */}
                    <Input value={purpose} onChange={(e) => { setPurpose(e.target.value) }} type="textarea" label="Destino de los fondos" />
                </div>
            </div>
        </FormLayout>
    )
}

export default Form03
