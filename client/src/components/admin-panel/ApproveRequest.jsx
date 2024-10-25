import { useMemo, useState } from "react"
import Container from "../ui/Container"
import { useLocation, useNavigate } from "react-router-dom"
import Input from "../ui/Input"
import Heading from "../ui/Heading"
import RadioGroup from "../ui/RadioGroup"
import Button from "../ui/Button"
import { createPermission } from "../../services/permissionServices"
import { updateRequest } from "../../services/webFormServices"
/* import { formatDate } from "../../utils/utils"
import { sendEmail } from "../../services/emailServices"
import { BACKEND_URL } from "../../constants/constants" */

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

    const navigate = useNavigate()

    const toggleEditMode = () => {
        setIsDisabled(!isDisabled)
    }

    /* const sendApproveEmail = async (attachment) => {
        const emails = [orgData.org_email, orgData.owner_email]
        const template = `
        <div style="max-width: 600px; margin: auto; padding: 20px; font-family: Arial, sans-serif; background-color: #f9fafb; border-radius: 8px; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);">
  <div style="background-color: #0F69C4; color: white; padding: 10px; border-radius: 8px 8px 0 0; text-align: center;">
    <h1>Notificación de Solicitud Aprobada</h1>
  </div>
  <div style="padding: 20px; background-color: white; border-radius: 0 0 8px 8px;">
    <h2>Estimado/a:</h2>
    <p>Nos complace informarle que su solicitud de permiso ha sido aprobada.</p>
    <p><strong>Detalles del permiso:</strong></p>
    <div style="padding: 15px; background-color: #eee; border-radius: 10px">
      <p>Actividad: <strong>${name}</strong></p>
      <p>Ubicación: <strong>${place}</strong></p>
      <p>¿consumo y/o venta de alcohol?: <strong>${alcohol ? "Si" : "No"}</strong></p>
      <p>¿consumo y/o venta de alimentos?: <strong>${food ? "Si" : "No"}</strong></p>
      <p>Fecha y hora de inicio: <strong>${formatDate(startDate, 1)}, ${startTime}</strong></p>
      <p>Fecha y hora de término: <strong>${formatDate(endDate, 1)}, ${endTime}</strong></p>
      <p>Descripción: <strong>${description}</strong></p>
      <p>Destino de los fondos: <strong>${purpose}</strong></p>
    </div>
<hr style="margin: 10px 0">
    <p>Adjunto a este correo encontrará el decreto correspondiente al permiso aprobado.</p>
    <p>Si tiene alguna pregunta, no dude en ponerse en contacto con nosotros.</p>
    <p>
      Atentamente,<br />
      Ilustre Municipalidad de Chonchi
    </p>
  </div>
  <div style="text-align: center; font-size: 12px; color: #6b7280; margin-top: 20px;">
    <p>Este es un correo automático, por favor no responda.</p>
  </div>
</div>
        `
        await sendEmail(emails, "SOLICITUD DE PERMISO TRANSITORIO: APROBADA", template, attachment)
    } */

    const generateAct = async (e) => {
        e.preventDefault()
        const {
            org_name,
            org_rut,
            owner_name,
            owner_rut,
            activity_name,
            place,
            start_date,
            start_time,
            end_date,
            end_time,
            is_alcohol,
            is_food,
            description,
            purpose } = orgData
        const data = {
            org_name,
            org_rut,
            owner_name,
            owner_rut,
            activity_name,
            place,
            start_date,
            start_time,
            end_date,
            end_time,
            is_alcohol,
            is_food,
            description,
            purpose
        }
        try {
            await createPermission(data)
            await updateRequest(orgData.id, "aprobada")
            alert("Permiso creado exitosamente")
            navigate("/solicitudes")
        } catch (error) {
            alert("No se pudo crear el permiso.")
            console.log(error.message)
        }
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
                    <Button onClick={generateAct}>Generar permiso</Button>
                </div>

            </form>
        </Container>
    )
}

export default ApproveRequest