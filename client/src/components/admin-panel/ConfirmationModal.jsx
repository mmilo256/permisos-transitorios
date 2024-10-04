import { useNavigate, useParams } from "react-router-dom"
import Modal from "../ui/Modal"
import { updateRequest } from "../../services/webFormServices"

const ConfirmationModal = ({ modal, setModal }) => {

    const { id } = useParams()
    const navigate = useNavigate()

    const handleReject = async () => {
        await updateRequest(id, "rechazada")
        alert("Solicitud rechazada")
        setModal(false)
        navigate("/admin/solicitudes")
    }

    return (
        <Modal onClick={handleReject} title="Rechazar solicitud" isOpen={modal} setIsOpen={setModal}>
            <p>¿Está seguro de que desea rechazar esta solicitud?</p>
        </Modal>
    )
}

export default ConfirmationModal