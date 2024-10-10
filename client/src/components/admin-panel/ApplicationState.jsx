import { useNavigate } from "react-router-dom"
import { formatDate } from "../../utils/utils"
import Button from "../ui/Button"
import Heading from "../ui/Heading"
import StatusTag from "./StatusTag"

const ApplicationState = ({ status, name, date, setIsOpen, orgRut }) => {

    const navigate = useNavigate()

    const handleReject = () => {
        setIsOpen(true)
    }

    const handleApprove = () => {
        console.log("Aprobado")
        navigate(`aprobar-solicitud?rut=${orgRut}`)
    }

    return (
        <>
            <div className="bg-white text-center p-2 border">
                <Heading align="center" variant="h3">Estado de la solicitud</Heading>
                <p className="mb-1">{name && name}</p>
                <p className="mb-1">{date && formatDate(date, 1)}</p>
                <StatusTag variant={status} />
                {status === "pendiente" && <div className="flex md:flex-col lg:flex-row mt-4 pt-4 border-t gap-2 justify-center">
                    <Button onClick={handleApprove} fullWidth variant="approval" >Aprobar</Button>
                    <Button onClick={handleReject} fullWidth variant="reject" >Rechazar</Button>
                </div>}
            </div>
        </>
    )
}

export default ApplicationState