import { useEffect, useState } from "react"
import Container from "../ui/Container"
import { useLocation, useNavigate, useSearchParams } from "react-router-dom"
import { getOrgByRut } from "../../services/organizationServices"
import Modal from "../ui/Modal"
import Input from "../ui/Input"
import Heading from "../ui/Heading"
import RadioGroup from "../ui/RadioGroup"

const ApproveRequest = () => {

    const [searchParams, setSearchParams] = useSearchParams()
    const requestRut = searchParams.get('org_rut')
    const navigate = useNavigate()
    const [org, setOrg] = useState({})
    const [confirmModal, setConfirmModal] = useState(false)
    const location = useLocation();

    const queryParams = new URLSearchParams(location.search);
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

    const goToAddOrg = async () => {
        navigate(`/admin/agregar-organizacion?${queryParams}`)
    }

    useEffect(() => {
        (
            async () => {
                const data = await getOrgByRut(requestRut)
                setOrg(data.organization)
                if (!data.organization) {
                    setConfirmModal(true)
                }
            }
        )()
    }, [requestRut])


    return (
        <Container>
            <Heading variant="h2">Generar permiso transitorio</Heading>
            <form>
                <div className='grid grid-cols-2 gap-2 pb-4'>
                    <Input value={name} onChange={(e) => { setName(e.target.value) }} label="Nombre de la actividad" />
                    <Input value={place} onChange={(e) => { setPlace(e.target.value) }} label="Lugar de realización" />
                    <div className="grid grid-cols-2 gap-2">
                        <Input value={startDate} onChange={(e) => { setStartDate(e.target.value) }} type="date" label="Fecha de inicio" />
                        <Input value={startTime} onChange={(e) => { setStartTime(e.target.value) }} type="time" label="Hora de inicio" />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                        <Input value={endDate} onChange={(e) => { setEndDate(e.target.value) }} type="date" label="Fecha de término" />
                        <Input value={endTime} onChange={(e) => { setEndTime(e.target.value) }} type="time" label="Hora de término" />
                    </div>
                    <RadioGroup selectedValue={alcohol} onChange={setAlcohol} options={opYesNo} label="Consumo y/o venta de alcohol" />
                    <RadioGroup selectedValue={food} onChange={setFood} options={opYesNo} label="Consumo y/o venta de alimentos" />
                    <div className="col-span-2">
                        <Input value={description} onChange={(e) => { setDescription(e.target.value) }} type="textarea" label="Descripción de la actividad" />
                    </div>
                    <div className="col-span-2">
                        <Input value={purpose} onChange={(e) => { setPurpose(e.target.value) }} type="textarea" label="Destino de los fondos" />
                    </div>
                </div>

                <div className='flex justify-end mt-4'>
                    <input className='cursor-pointer bg-primary hover:bg-primaryHover disabled:bg-blue-400 disabled:cursor-not-allowed text-white py-3 px-5 font-bold  text-center' type="submit" value="Generar permiso" />
                </div>
            </form>
            <Modal isOpen={confirmModal} setIsOpen={setConfirmModal} onClick={goToAddOrg} title="Agregar organización" buttonText="Aceptar">
                <p>La organización solicitante no existe en el sistema. Debe agregar la organización antes de aprobar el permiso</p>
            </Modal>
        </Container>
    )
}

export default ApproveRequest