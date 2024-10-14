import { useMemo, useState } from "react"
import Container from "../ui/Container"
import { useLocation } from "react-router-dom"
import Input from "../ui/Input"
import Heading from "../ui/Heading"
import RadioGroup from "../ui/RadioGroup"

const ApproveRequest = () => {

    const location = useLocation();

    const [isDisabled, setIsDisabled] = useState(true)

    const queryParams = useMemo(() => {
        return new URLSearchParams(location.search)
    }, [location.search])
    const orgData = Object.fromEntries(queryParams.entries());

    // Opciones para los campos de radio (Sí/No)
    const opYesNo = [{ label: "Si", value: "true" }, { label: "No", value: "false" }]

    // Estados locales para cada campo del formulario, inicializados con datos del estado global
    const [name, setName] = useState(orgData.activity_name || "")
    const [place, setPlace] = useState(orgData.place || "")
    const [startDate, setStartDate] = useState(orgData.start_date || "")
    const [startTime, setStartTime] = useState(orgData.start_time || "")
    const [endDate, setEndDate] = useState(orgData.end_date || "")
    const [endTime, setEndTime] = useState(orgData.end_time || "")
    const [alcohol, setAlcohol] = useState(orgData.is_alcohol || "")
    const [food, setFood] = useState(orgData.is_food || "")
    const [description, setDescription] = useState(orgData.description || "")
    const [purpose, setPurpose] = useState(orgData.purpose || "")

    const toggleEditMode = () => {
        setIsDisabled(!isDisabled)
    }

    return (
        <Container>
            <Heading variant="h2">Generar permiso transitorio</Heading>
            <form>

                <div className='grid grid-cols-2 gap-2 pb-4'>
                    <Input disabled={isDisabled} value={name} onChange={(e) => { setName(e.target.value) }} label="Nombre de la actividad" />
                    <Input disabled={isDisabled} value={place} onChange={(e) => { setPlace(e.target.value) }} label="Lugar de realización" />
                    <div className="grid grid-cols-2 gap-2">
                        <Input disabled={isDisabled} value={startDate} onChange={(e) => { setStartDate(e.target.value) }} type="date" label="Fecha de inicio" />
                        <Input disabled={isDisabled} value={startTime} onChange={(e) => { setStartTime(e.target.value) }} type="time" label="Hora de inicio" />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                        <Input disabled={isDisabled} value={endDate} onChange={(e) => { setEndDate(e.target.value) }} type="date" label="Fecha de término" />
                        <Input disabled={isDisabled} value={endTime} onChange={(e) => { setEndTime(e.target.value) }} type="time" label="Hora de término" />
                    </div>
                    <RadioGroup disabled={isDisabled} selectedValue={alcohol} onChange={setAlcohol} options={opYesNo} label="Consumo y/o venta de alcohol" />
                    <RadioGroup disabled={isDisabled} selectedValue={food} onChange={setFood} options={opYesNo} label="Consumo y/o venta de alimentos" />
                    <div className="col-span-2">
                        <Input disabled={isDisabled} value={description} onChange={(e) => { setDescription(e.target.value) }} type="textarea" label="Descripción de la actividad" />
                    </div>
                    <div className="col-span-2">
                        <Input disabled={isDisabled} value={purpose} onChange={(e) => { setPurpose(e.target.value) }} type="textarea" label="Destino de los fondos" />
                    </div>
                </div>
                <button type="button" onClick={toggleEditMode} className="flex items-center gap-2 bg-gray-500 px-2 py-1 rounded-full text-white mb-2">
                    <div className={`h-4 w-4 ${!isDisabled ? "bg-primary" : "bg-white"} rounded-sm border-2 border-white`}></div>
                    <span>{isDisabled ? "Habilitar edición" : "Deshabilitar edición"}</span>
                </button>
                <div className='flex justify-end mt-4'>
                    <input className='cursor-pointer bg-primary hover:bg-primaryHover disabled:bg-blue-400 disabled:cursor-not-allowed text-white py-3 px-5 font-bold  text-center' type="submit" value="Generar permiso" />
                </div>

            </form>

        </Container>
    )
}

export default ApproveRequest