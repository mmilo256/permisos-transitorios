import { useNavigate } from "react-router-dom"
import { formatDate } from "../../utils/utils"
import Button from "../ui/Button"
import Heading from "../ui/Heading"
import StatusTag from "./StatusTag"
import { getOrgByRut } from "../../services/organizationServices"
import Modal from "../ui/Modal"
import { useEffect, useRef, useState } from "react"
import { updateFolio } from "../../services/webFormServices"

const ApplicationState = ({ orgData, setIsOpen }) => {

    const navigate = useNavigate()
    const handleReject = () => {
        setIsOpen(true)
    }
    const [folioModal, setFolioModal] = useState(false)
    const [folio, setFolio] = useState("")
    const folioRef = useRef(null)

    useEffect(() => {
        orgData.folio && setFolio(orgData.folio)
    }, [orgData.folio])

    const handleApprove = async () => {
        const queryParams = new URLSearchParams(orgData).toString()
        const data = await getOrgByRut(orgData.org_rut)
        if (!data.organization) {
            alert("La organización no existe en el sistema. Debe agregar la organización antes de crear el permiso")
            navigate(`/agregar-organizacion?${queryParams}`)
        } else {
            alert("La organización está registrada en el sistema con el nombre de " + data.organization.org_name)
            navigate(`aprobar-solicitud?originalOrg=${data.organization.org_name}&${queryParams}`)
        }
    }

    const handleAddFolio = async () => {
        const folioNumber = folioRef.current.value
        await updateFolio(orgData.id, folioNumber)
        setFolio(folioNumber)
        setFolioModal(false)
    }

    return (
        <>
            <div className="bg-white text-center p-2 border">
                <Heading align="center" variant="h3">Estado de la solicitud</Heading>
                <div className="flex justify-center items-center gap-2">
                    <p className="font-bold text-slate-600">N° Folio:</p>
                    <p>{folio || <button onClick={() => { setFolioModal(true) }} className="py-1 px-3 bg-blue-500 hover:bg-blue-600 text-white rounded shadow">Asignar número</button>}</p>
                </div>
                <p className="mb-1">{orgData.org_name && orgData.org_name}</p>
                <p className="mb-1">{orgData.start_date && formatDate(orgData.start_date, 1)}</p>
                <StatusTag variant={orgData.status} />
                {orgData.status === "pendiente" && <div className="flex md:flex-col lg:flex-row mt-4 pt-4 border-t gap-2 justify-center">
                    <Button onClick={handleApprove} fullWidth variant="approval" >Aprobar</Button>
                    <Button onClick={handleReject} fullWidth variant="reject" >Rechazar</Button>
                </div>}
            </div>
            <Modal onClick={handleAddFolio} isOpen={folioModal} setIsOpen={setFolioModal} title="Agregar N° de folio" buttonText="Aceptar" >
                <input ref={folioRef} className="block w-full border border-slate-400 rounded p-1" type="number" placeholder="N° de folio" />
            </Modal>
        </>
    )
}

export default ApplicationState