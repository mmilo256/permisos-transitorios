import { useNavigate } from "react-router-dom"
import Upload from "../ui/Upload"
import FormLayout from "./FormLayout"
import useWebFormStore from "../../stores/useWebFormStore"
import { useEffect, useState } from "react"
import Alert from "../ui/Alert"
import { createApplication } from "../../services/webFormServices"

const Form04 = () => {

    // Función para actualizar los datos de documentos en el estado global
    const formData = useWebFormStore(state => state.formData)
    const setDocsData = useWebFormStore(state => state.setDocsData)

    const [errorMessage, setErrorMessage] = useState("")

    const [showAlert, setShowAlert] = useState(false)

    // Estado local para manejar los archivos subidos
    const [files, setFiles] = useState(formData.docsData)

    const [isValid, setIsValid] = useState(false)

    // Hook para la navegación programática
    const navigate = useNavigate()

    // Función para navegar a la página anterior
    const onClickPrev = () => {
        navigate("/detalles-permiso")
    }

    useEffect(() => {
        let valid = true
        let errorMsg = ""

        // Verifica que todos los campos obligatorios estén llenos
        if (
            !formData.orgData.name ||
            !formData.orgData.rut ||
            !formData.orgData.address ||
            !formData.orgData.email ||
            !formData.orgData.phone ||
            !formData.orgData.orgType ||
            !formData.personData.name ||
            !formData.personData.rut ||
            !formData.personData.address ||
            !formData.personData.email ||
            !formData.personData.phone ||
            !formData.permissionData.name ||
            !formData.permissionData.place ||
            !formData.permissionData.startDate ||
            !formData.permissionData.startTime ||
            !formData.permissionData.endDate ||
            !formData.permissionData.endTime ||
            !formData.permissionData.alcohol ||
            !formData.permissionData.food ||
            !formData.permissionData.description ||
            !formData.permissionData.purpose
        ) {
            valid = false;
            errorMsg = "Debe rellenar todos los campos obligatorios";
        } else {
            // Validación de fechas
            const { startDate, endDate, startTime, endTime } = formData.permissionData;

            const startDateTime = new Date(`${startDate}T${startTime}`);
            const endDateTime = new Date(`${endDate}T${endTime}`);

            if (startDateTime >= endDateTime) {
                valid = false;
                errorMsg = "La fecha de inicio no puede ser posterior a la fecha de término";
            }
        }

        setIsValid(valid);
        setErrorMessage(errorMsg);
    }, [formData]);


    // Función para manejar la acción del botón "Enviar solicitud"
    const onClickNext = async () => {
        // Actualiza el estado global con los archivos subidos
        setDocsData(files)
        // Muestra un mensaje de éxito
        const data = {
            org_name: formData.orgData.name,
            org_rut: formData.orgData.rut,
            org_address: formData.orgData.address,
            org_email: formData.orgData.email,
            org_phone: formData.orgData.phone,
            org_type: formData.orgData.orgType,
            owner_name: formData.personData.name,
            owner_rut: formData.personData.rut,
            owner_address: formData.personData.address,
            owner_email: formData.personData.email,
            owner_phone: formData.personData.phone,
            owner_phone2: formData.personData.phone2,
            activity_name: formData.permissionData.name,
            place: formData.permissionData.place,
            start_date: formData.permissionData.startDate,
            start_time: formData.permissionData.startTime,
            end_date: formData.permissionData.endDate,
            end_time: formData.permissionData.endTime,
            is_alcohol: formData.permissionData.alcohol,
            is_food: formData.permissionData.food,
            description: formData.permissionData.description,
            purpose: formData.permissionData.purpose,
            // docs: formData.docsData
        }

        if (isValid) {
            await createApplication(data)
            navigate("/solicitud-enviada")
        } else {
            setShowAlert(true)
        }
    }

    return (
        // Renderiza el layout del formulario con título, botones de navegación y texto del botón "Enviar solicitud"
        <>
            <Alert variant="warning" text={errorMessage} visible={showAlert} setVisible={setShowAlert} />
            <FormLayout title="4. Antecedentes" onClickPrev={onClickPrev} onClickNext={onClickNext} btnTextNext="Enviar solicitud">
                {/* Componente de carga de archivos */}
                <Upload files={files} setFiles={setFiles} label="Subir antecedentes y firma del representante legal" />
            </FormLayout>
        </>
    )
}

export default Form04
