import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getDocsById, getOrgById, removeDocument } from "../../services/organizationServices"
import Heading from "../ui/Heading"
import Container from "../ui/Container"
import Button from "../ui/Button"
import { BACKEND_URL } from "../../constants/constants"
import { MdDelete } from "react-icons/md";
import Modal from "../ui/Modal"
import PermissionsTable from "./PermissionsTable"
import { getAllPermissions } from "../../services/permissionServices"

const OrganizationDetail = () => {

    const { id } = useParams()
    const [organization, setOrganization] = useState({})
    const [documents, setDocuments] = useState([])
    const [permissions, setPermissions] = useState([])
    const [loading, setLoading] = useState(false)
    const [confirmationModal, setConfirmationModal] = useState(false)
    const [currentDoc, setCurrentDoc] = useState("")
    const [refresh, setRefresh] = useState(false)

    useEffect(() => {
        (
            async () => {
                setLoading(true)
                try {
                    const org = await getOrgById(id)
                    setOrganization(org.organization)
                    const docs = await getDocsById(id)
                    setDocuments(docs.docs)
                    const data = await getAllPermissions(1, id)
                    setPermissions(data.permissions)
                } catch (error) {
                    alert("No se pudo cargar la información de la organización")
                    console.log(error.message)
                } finally {
                    setLoading(false)
                }
            }
        )()
    }, [id])

    const { org_name, org_rut, org_address, org_email, org_phone, org_type, president } = organization;
    const { name, rut, address, email, phone, phone2 } = president || {};

    const handleDelete = (doc) => {
        setCurrentDoc(doc)
        setConfirmationModal(true)
    }

    const deleteDoc = async () => {
        await removeDocument(currentDoc.id)
        setRefresh(!refresh)
        setConfirmationModal(false)
    }

    return (
        <div>
            <Container>
                <Heading variant="h1">{org_name}</Heading>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-slate-700">
                    <div className="bg-white p-4 shadow">
                        <div>
                            <Heading variant="h4">Datos de la organización</Heading>
                            <div className="font-semibold">
                                <p>Nombre: <span className="font-normal">{org_name}</span></p>
                                <p>RUT: <span className="font-normal">{org_rut}</span></p>
                                <p>Domicilio: <span className="font-normal">{org_address}</span></p>
                                <p>Correo electrónico: <span className="font-normal">{org_email}</span></p>
                                <p>Contacto: <span className="font-normal">{org_phone}</span></p>
                                <p>Tipo de organización: <span className="font-normal">{org_type}</span></p>
                            </div>
                        </div>
                        <div>
                            <Heading variant="h4">Datos del representante legal</Heading>
                            <div className="font-semibold">
                                <p>Nombre: <span className="font-normal">{name}</span></p>
                                <p>RUT: <span className="font-normal">{rut}</span></p>
                                <p>Domicilio: <span className="font-normal">{address}</span></p>
                                <p>Correo electrónico: <span className="font-normal">{email}</span></p>
                                <p>Contacto: <span className="font-normal">{phone}</span></p>
                                <p>Contacto alternativo: <span className="font-normal">{phone2}</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white p-4 shadow">
                        <Heading variant="h4">Documentación relacionada</Heading>
                        <div className="mb-2 max-w-56">
                            <Button href="docs" type="link">Agregar documentos</Button>
                        </div>
                        <table className="w-full">
                            <thead className="bg-black text-white">
                                <tr>
                                    <th className="border"></th>
                                    <th className="text-left border px-2">Documento</th>
                                    <th className="border"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {documents ? documents.map((doc, index) => {
                                    return (
                                        <tr className="odd:bg-blue-50 even:bg-blue-100" key={index}>
                                            <td className="px-1">{doc.id}</td>
                                            <td className="px-2"><a className="text-primary underline" target="_blank" href={`${BACKEND_URL}/${doc.path}`}>{doc.originalname}</a></td>
                                            <td>
                                                <button onClick={() => { handleDelete(doc) }} className="text-sm w-14 text-red-600"><MdDelete size={24} /></button>
                                            </td>
                                        </tr>
                                    )
                                }) : <tr>
                                    <td>
                                        No hay documentos
                                    </td>
                                </tr>}
                            </tbody>
                        </table>

                    </div>
                </div>
                <PermissionsTable data={permissions} orgName={org_name} />
            </Container>
            <Modal isOpen={confirmationModal} onClick={deleteDoc} setIsOpen={setConfirmationModal} title="Borrar documento" buttonText="Si, borrar">
                <p>¿Seguro que desea borrar el siguiente documento?</p>
                <p className="font-semibold">{currentDoc.originalname}</p>
            </Modal>
        </div>
    )
}

export default OrganizationDetail