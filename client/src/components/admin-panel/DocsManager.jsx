import { useNavigate, useParams } from "react-router-dom"
import Container from "../ui/Container"
import Heading from "../ui/Heading"
import { useEffect, useState } from "react"
import { getDocsById, uploadDocs } from "../../services/organizationServices"
import Upload from "../ui/Upload"
import Button from "../ui/Button"

const DocsManager = () => {

    const { id } = useParams()
    const [files, setFiles] = useState([])
    const [currentDocs, setCurrentDocs] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        (
            async () => {
                const docs = await getDocsById(id)
                setCurrentDocs(docs.docs.length)
            }
        )()
    }, [id])

    const handleUpload = async () => {
        const formData = new FormData();
        files.forEach(file => {
            formData.append('orgFiles', file); // Asegúrate de usar 'orgFiles'
        });
        const validFilesLength = 10 - currentDocs
        console.log(validFilesLength)
        console.log(files.length)
        if (files.length <= validFilesLength) {
            try {
                await uploadDocs(id, formData); // Cambia 'files' por 'formData'
                navigate(`/${id}`);
                alert("Documentos subidos exitosamente");
            } catch (error) {
                alert("No se pudo subir los documentos");
                console.log(error);
            }
        } else {
            alert("Se ha excedido el número de archivos que se pueden subir")
        }
    }

    return (
        <div>
            <Container>
                <button onClick={() => { console.log(files) }}>mostrar</button>
                <Heading variant="h2">Agregar documentos</Heading>
                <p>Tienes {currentDocs} de 10 documentos ({10 - currentDocs} restantes)</p>
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