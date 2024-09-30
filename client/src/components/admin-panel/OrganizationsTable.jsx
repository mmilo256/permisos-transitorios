import { useEffect, useState } from "react"
import Table from "../ui/Table"
import { getAllOrganizations } from "../../services/organizationServices"
import Pagination from "../ui/Pagination"

const OrganizationsTable = () => {
    const [data, setData] = useState([])
    const [currentPage, setCurrentPage] = useState(data.currentPage || 1)

    const columns = ["RUT", "Nombre de la organización", "Presidente", "Tipo de organización"]

    const formattedData = data.organizations && data.organizations.map(row => {
        return (
            {
                rut: row.org_rut,
                name: row.org_name,
                president: row.president.name,
                type: row.org_type
            }
        )
    })

    useEffect(() => {
        const showAllOrganizations = async () => {
            const res = await getAllOrganizations(currentPage)
            setData(res)
        }
        showAllOrganizations()
    }, [currentPage])

    return (
        data ?
            <>
                <Table columns={columns} data={formattedData} />
                <Pagination totalPages={data.totalPages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
            </>
            : <p>No se pudo conectar a la base de datos</p>
    )
}

export default OrganizationsTable