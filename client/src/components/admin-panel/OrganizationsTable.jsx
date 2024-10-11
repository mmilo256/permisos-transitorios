import { useEffect, useState } from "react"
import Table from "../ui/Table"
import { getAllOrganizations } from "../../services/organizationServices"
import Pagination from "../ui/Pagination"
import Search from "../ui/Search"
import Tabs from "./Tabs"
import { NavLink } from "react-router-dom"
import { ORG_TYPES } from "../../constants/constants"

const OrganizationsTable = () => {
    const [data, setData] = useState([])
    const [currentPage, setCurrentPage] = useState(data.currentPage || 1)

    const columns = ["RUT", "Nombre de la organización", "Presidente", "Tipo de organización", ""]

    const formattedData = data.organizations && data.organizations.map(row => {
        return (
            {
                rut: row.org_rut,
                name: row.org_name,
                president: row.president.name,
                type: row.org_type,
                actions: <NavLink to={String(row.id)} className="text-blue-500" >Ver</NavLink>
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

    const onFilter = async (filter) => {
        const res = await getAllOrganizations(currentPage, filter)
        setData(res)
    }

    const onSearch = async (search) => {
        const res = await getAllOrganizations(currentPage, false, search)
        setData(res)
    }

    return (
        data ?
            <>
                <div className="flex items-center gap-4 mb-2">
                    <Search onSearch={onSearch} />
                </div>
                <Tabs options={ORG_TYPES} onItemClick={onFilter} />
                <Table columns={columns} data={formattedData} />
                <Pagination totalPages={data.totalPages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
            </>
            : <p>No se pudo conectar a la base de datos</p>
    )
}

export default OrganizationsTable