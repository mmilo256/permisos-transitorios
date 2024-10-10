import { useEffect, useState } from "react"
import Container from "../ui/Container"
import { useNavigate, useSearchParams } from "react-router-dom"
import { getOrgByRut } from "../../services/organizationServices"
import Modal from "../ui/Modal"

const ApproveRequest = () => {

    const [searchParams, setSearchParams] = useSearchParams()
    const requestRut = searchParams.get('rut')
    const navigate = useNavigate()
    const [org, setOrg] = useState({})
    const [confirmModal, setConfirmModal] = useState(false)

    const goToAddOrg = async () => {
        navigate("/admin/agregar-organizacion")
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
            <Modal isOpen={confirmModal} setIsOpen={setConfirmModal} onClick={goToAddOrg} title="Agregar organización" buttonText="Aceptar">
                <p>La organización solicitante no existe en el sistema. Debe agregar la organización antes de aprobar el permiso</p>
            </Modal>
        </Container>
    )
}

export default ApproveRequest