import { formatDate } from "../../utils/utils"
import Button from "../ui/Button"
import Heading from "../ui/Heading"

const ApplicationState = ({ name, date }) => {
    return (
        <div className="bg-white text-center p-2 border">
            <Heading align="center" variant="h3">Estado de la solicitud</Heading>
            <p className="mb-1">{name && name}</p>
            <p className="mb-1">{date && formatDate(date, 1)}</p>
            <p className="mx-auto my-2 text-sm bg-slate-300 text-slate-600 w-min px-2 py-1 rounded-full">Pendiente</p>
            <div className="flex md:flex-col lg:flex-row mt-4 pt-4 border-t gap-2 justify-center">
                <Button fullWidth variant="approval" >Aprobar</Button>
                <Button fullWidth variant="reject" >Rechazar</Button>
            </div>
        </div>
    )
}

export default ApplicationState