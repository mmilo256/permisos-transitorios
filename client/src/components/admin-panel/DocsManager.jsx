import { useNavigate, useParams } from "react-router-dom"
import Container from "../ui/Container"
import Heading from "../ui/Heading"
import { useState } from "react"
import { uploadDocs } from "../../services/organizationServices"
import Upload from "../ui/Upload"
import Button from "../ui/Button"

const DocsManager = () => {

    const { id } = useParams()
    const [files, setFiles] = useState([])
    const navigate = useNavigate()

    const handleUpload = async () => {
        const formData = new FormData();
        files.forEach(file => {
            formData.append('orgFiles', file); // Asegúrate de usar 'orgFiles'
        });

        try {
            await uploadDocs(id, formData); // Cambia 'files' por 'formData'
            navigate(`/admin/${id}`);
            alert("Documentos subidos exitosamente");
        } catch (error) {
            alert("No se pudo subir los documentos");
            console.log(error);
        }
    }

    return (
        <div>
            <Container>
                <button onClick={() => { console.log(files) }}>mostrar</button>
                <Heading variant="h2">Agregar documentos</Heading>
                <div>
                    <Upload name="orgFiles" files={files} setFiles={setFiles} label="Documentos" />
                </div>
                <div className="flex justify-end my-2">
                    <Button onClick={handleUpload}>Guardar cambios</Button>
                </div>

            </Container>
        </div>
    )
}

export default DocsManager