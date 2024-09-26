import { useState } from "react"
import Input from "../ui/Input"
import Modal from "../ui/Modal"
import ConfirmationModal from "./ConfirmationModal"

const RejectModal = ({ modal, setModal }) => {

    const [rejectReason, setRejectReason] = useState("")
    const [confirmationModal, setConfirmationModal] = useState(false)

    const openConfirmationModal = () => {
        setModal(false)
        setConfirmationModal(true)
    }

    return (
        <>
            <Modal title="Rechazar solicitud" onClick={openConfirmationModal} isOpen={modal} setIsOpen={setModal}>
                <label>
                    <Input value={rejectReason} onChange={(e) => { setRejectReason(e.target.value) }} placeholder="Escriba el motivo aquí..." type="textarea" label="Escriba el motivo por el cual se rechaza la solicitud" />
                </label>
            </Modal>
            <ConfirmationModal modal={confirmationModal} setModal={setConfirmationModal} />
        </>
    )
}

export default RejectModal