import { useEffect, useState } from "react"
import { getAllApplications } from "../../services/webFormServices"
import Table from "../ui/Table"
import { formatDate } from "../../utils/utils"
import { NavLink } from 'react-router-dom'

const ApplicationsTable = () => {

    const [data, setData] = useState([])

    const columns = ["Actividad", "Organización", "Lugar de realización", "Fecha de realización", ""]

    const formattedData = data.map(row => {
        const formattedDate = formatDate(row.start_date, 1)
        return (
            {
                event: row.activity_name,
                name: row.org_name,
                place: row.place,
                president: formattedDate,
                actions: <NavLink to={String(row.id)} className="text-blue-500" >Ver solicitud</NavLink>
            }
        )
    })


    useEffect(() => {
        const renderApplications = async () => {
            const res = await getAllApplications()
            setData(res)
        }
        renderApplications()
    }, [])

    return (
        data && <Table columns={columns} data={formattedData} />
    )
}

export default ApplicationsTable