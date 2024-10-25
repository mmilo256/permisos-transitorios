import { Link } from "react-router-dom"
import { formatDate } from "../../utils/utils"
import Heading from "../ui/Heading"
import Table from "../ui/Table"

const PermissionsTable = ({ data, orgName }) => {

    const columns = ["Actividad", "Ubicación", "Fecha de inicio", "Fecha de término", ""]
    const formattedData = data && data.map((permission) => ({
        activity: permission.activity_name,
        place: permission.place,
        start_date: `${formatDate(permission.start_date, 1)} a las ${permission.start_time}`,
        end_date: `${formatDate(permission.end_date, 1)} a las ${permission.end_time}`,
        actions: <div className="flex flex-col items-start">
            <Link className="underline text-blue-500" to={`/permisos/${permission.id}?orgName=${orgName}`}>Ver permiso</Link>
        </div>
    }))

    return (
        <>
            <Heading variant="h2" >Permisos</Heading>
            <Table columns={columns} data={formattedData} />
        </>
    )
}

export default PermissionsTable