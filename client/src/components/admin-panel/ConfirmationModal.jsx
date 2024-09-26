import Modal from "../ui/Modal"

const ConfirmationModal = ({ modal, setModal }) => {
    return (
        <Modal title="Rechazar solicitud" isOpen={modal} setIsOpen={setModal}>
            <p>¿Está seguro de que desea rechazar esta solicitud?</p>
        </Modal>
    )
}

export default ConfirmationModal