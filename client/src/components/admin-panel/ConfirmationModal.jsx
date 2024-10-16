import { useNavigate, useParams } from "react-router-dom"
import Modal from "../ui/Modal"
import { updateRequest } from "../../services/webFormServices"

const ConfirmationModal = ({ reason, modal, setModal, sendRejectEmail }) => {

    const { id } = useParams()
    const navigate = useNavigate()

    const handleReject = async () => {
        await updateRequest(id, "rechazada")
        await sendRejectEmail(reason)
        alert("Solicitud rechazada")
        setModal(false)
        navigate("/solicitudes")
    }

    return (
        <Modal onClick={handleReject} title="Rechazar solicitud" isOpen={modal} setIsOpen={setModal}>
            <p>¿Está seguro de que desea rechazar la solicitud?</p>
            <p>El solicitante recibirá un correo electrónico con el motivo del rechazo.</p>
        </Modal>
    )
}

export default ConfirmationModal