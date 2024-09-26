import Button from "./Button"
import { IoIosClose } from "react-icons/io";

const Modal = ({ isOpen, setIsOpen, title, children, onClick }) => {

    if (!isOpen) {
        return null
    }

    const handleClose = () => {
        setIsOpen(false)
    }
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-20">
            <div className="bg-white border border-gray-300 shadow max-w-[90%]">
                <header className="border-b border-b-gray-300">
                    <div className="p-5 flex justify-between items-center gap-5">
                        <p className="text-xl font-bold">{title}</p>
                        <button className="scale-[2.5]" onClick={handleClose}><IoIosClose /></button>
                    </div>
                </header>
                <div className="px-5 pt-5">{children}</div>
                <footer className="flex justify-end gap-2 px-5 py-5">
                    <Button onClick={handleClose} variant="secondary">Cerrar</Button>
                    <Button onClick={onClick} variant="primary">Rechazar</Button>
                </footer>
            </div>
        </div>
    )
}

export default Modal