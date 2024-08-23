import { useNavigate } from "react-router-dom"
import Upload from "../ui/Upload"
import FormLayout from "./FormLayout"
import useWebFormStore from "../../stores/useWebFormStore"
import { useState } from "react"

const Form04 = () => {

    // Función para actualizar los datos de documentos en el estado global
    const setDocsData = useWebFormStore(state => state.setDocsData)

    // Estado local para manejar los archivos subidos
    const [files, setFiles] = useState([])

    // Hook para la navegación programática
    const navigate = useNavigate()

    // Función para navegar a la página anterior
    const onClickPrev = () => {
        navigate("/detalles-permiso")
    }

    // Función para manejar la acción del botón "Enviar solicitud"
    const onClickNext = () => {
        // Actualiza el estado global con los archivos subidos
        setDocsData(files)
        // Muestra un mensaje de éxito
        alert("Solicitud enviada")
        navigate("/solicitud-enviada")
    }

    return (
        // Renderiza el layout del formulario con título, botones de navegación y texto del botón "Enviar solicitud"
        <FormLayout title="4. Antecedentes" onClickPrev={onClickPrev} onClickNext={onClickNext} btnTextNext="Enviar solicitud">
            {/* Componente de carga de archivos */}
            <Upload files={files} setFiles={setFiles} label="Subir antecedentes y firma del representante legal" />
        </FormLayout>
    )
}

export default Form04
