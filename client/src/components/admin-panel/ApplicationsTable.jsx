import { useEffect, useState } from "react"
import { getAllApplications } from "../../services/webFormServices"
import Table from "../ui/Table"
import { formatDate } from "../../utils/utils"
import { NavLink } from 'react-router-dom'
import Pagination from "../ui/Pagination"

const ApplicationsTable = () => {

    const [data, setData] = useState([])
    const [currentPage, setCurrentPage] = useState(data.currentPage || 1)

    const columns = ["Organización", "Actividad", "Lugar de realización", "Fecha de solicitud", "Estado", ""]

    const formattedData = data.requests && data.requests.map(row => {
        const formattedDate = formatDate(row.start_date, 1)
        return (
            {
                name: row.org_name,
                event: row.activity_name,
                place: row.place,
                date: formattedDate,
                status: row.status,
                actions: <NavLink to={String(row.id)} className="text-blue-500" >Ver solicitud</NavLink>
            }
        )
    })


    useEffect(() => {
        const renderApplications = async () => {
            const res = await getAllApplications(currentPage)
            setData(res)
        }
        renderApplications()
    }, [currentPage])

    return (
        data
            ? <>
                <Table columns={columns} data={formattedData} />
                <Pagination totalPages={data.totalPages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
            </>
            : <p>No se pudo conectar a la base de datos</p>
    )
}

export default ApplicationsTable